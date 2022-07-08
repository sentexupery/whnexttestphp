<template>
  <div>
      <table class="table">
          <thead>
          <tr>
              <th v-for="(column,idx) in columns" :key="idx" @click="columnsForSort.includes(column[0])?sortByColumn(column[0]):''" style="cursor: pointer">
                  {{ column[1]  }}
                  <span v-if="column === sortedColumn">
                    <i v-if="order === 'asc' ">&uparrow;</i>
                    <i v-else>&downarrow;</i>
                  </span>
              </th>
          </tr>
          </thead>
          <tbody>
          <tr class="" v-if="advertData.length === 0">
              <td class="lead text-center" :colspan="columns.length + 1">Объявлений нет</td>
          </tr>
          <tr v-for="advert in advertData" :key="advert.id" v-else>
              <td><router-link :to="{ name: 'advert.show',params: { id: advert.id}}">{{ advert.title }}</router-link></td>
              <td>{{ photoSingle(advert.photos) }}</td>
              <td>{{ advert.price }}</td>
              <td>{{ advert.created_at }}</td>
          </tr>
          </tbody>
      </table>
      <nav v-if="pagination && advertData.length > 0">
          <ul class="pagination">
              <li class="page-item" :class="{'disabled' : currentPage === 1}">
                  <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Пред.</a>
              </li>
              <li v-for="page in pagesNumber" class="page-item"
                  :class="{'active': page == pagination.meta.current_page}">
                  <a href="javascript:void(0)" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
              </li>
              <li class="page-item" :class="{'disabled': currentPage === pagination.meta.last_page }">
                  <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">След.</a>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            advertData: [],
            url: '',
            pagination: {
                meta: { to: 1, from: 1 }
            },
            offset: 4,
            currentPage: 1,
            perPage: 10,
            columns: [['title','Заголовок'], ['photos', 'Фото'], ['price','Цена'], ['created_at','Дата']],
            columnsForSort: ['price','created_at'],
            sortedColumn: 'price',
            order: 'asc'
        }
    },
    mounted() {
        this.fetchData()
    },
    computed: {
        pagesNumber() {
            if (!this.pagination.meta.to) {
                return []
            }
            let from = this.pagination.meta.current_page - this.offset
            if (from < 1) {
                from = 1
            }
            let to = from + (this.offset * 2)
            if (to >= this.pagination.meta.last_page) {
                to = this.pagination.meta.last_page
            }
            let pagesArray = []
            for (let page = from; page <= to; page++) {
                pagesArray.push(page)
            }
            return pagesArray
        },
        totalData() {
            return (this.pagination.meta.to - this.pagination.meta.from) + 1
        }
    },
    methods: {
        fetchData() {
            let dataFetchUrl = `/api/advert?page=${this.currentPage}&column=${this.sortedColumn}&order=${this.order}&per_page=${this.perPage}`
            axios.get(dataFetchUrl)
                .then(({ data }) => {
                    //console.log(data)
                    this.pagination = data
                    this.advertData = data.data
                }).catch(error => this.advertData = [])
        },
        changePage(pageNumber) {
            this.currentPage = pageNumber
            this.fetchData()
        },
        sortByColumn(column) {
            if (column === this.sortedColumn) {
                this.order = (this.order === 'asc') ? 'desc' : 'asc'
            } else {
                this.sortedColumn = column
                this.order = 'asc'
            }
            this.fetchData()
        },
        photoSingle(value) {
            if (value.length !== 0)
            {
                if (value) {
                    value = value[0]['photo_path'];
                    return value
                }
            }
        },
    }
}
</script>

<style scoped>

</style>
