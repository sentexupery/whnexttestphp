<template>
    <div v-if="advert">
        <div>
            Заголовок: {{ this.advert.title }}
        </div>
        <div>
            Цена: {{ this.advert.price }}
        </div>
        <div v-if="this.advert.photos.length>0">
            <div ref="advert_photo">Ссылка на главное фото: {{ photoSingle(this.advert.photos) }}</div>
            <a href="#" v-if="this.advert.photos.length>1" @click="viewAllPhoto">Показать все фото</a>
        </div>
        <div>
            Текст: {{ this.advert.description }}
            <a href="#" @click="getAdvertFull">Показать текст объявления</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    data() {
        return {
            advert: null
        }
    },
    mounted() {
        this.getAdvert()
    },
    methods: {
        getAdvert() {
            axios.get(`/api/advert/${this.$route.params.id}?fields=0`)
                .then( res => {
                    this.advert = res.data.data
                })
        },
        getAdvertFull(event) {
            axios.get(`/api/advert/${this.$route.params.id}?fields=1`)
                .then( res => {
                    this.advert = res.data.data
                });
            event.target.className += ' disabled'
        },
        photoSingle(value) {
            if (value.length !== 0)
            {
                if (value) {
                    value = value[0]['photo_path'];
                    return value
                }
            } else {
                return 'Ссылки отсутствуют';
            }
        },
        viewAllPhoto(e) {
            e.preventDefault();
            let list=''
            for (let i = 0; i< this.advert.photos.length; i++  ) {
                list += this.advert.photos[i]['photo_path']+'\r\n';
            }
            this.$refs.advert_photo.innerText = "Ссылка на главное фото: " + list;
            e.target.className += ' disabled'
        }

    }
}
</script>

<style scoped>
    .disabled {
        display: none;
    }
</style>
