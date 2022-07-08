<template>
    <div class="w-100">
        <form @submit="checkForm">
            <span v-for="error in errors"><span>{{ error }}</span><br></span>
        <div class="mb-3 mt-3">
            <input type="text" v-model="title" placeholder="Заголовок объявления" class="form-control">
        </div>
        <div class="mb-3">
            <textarea v-model="description" placeholder="Текст объявления" class="form-control"></textarea>
        </div>
        <div class="mb-3">
            <input type="number" v-model="price" placeholder="Цена" class="form-control">
        </div>
        <label for="text" v-for="(photo, index) in photos">Ссылка на фото {{ index+1 }}:  <br>
        <div class="mb-3">
            <input type="text" v-model="photos[index]" placeholder="Ссылка на фото" class="form-control">
        </div>
        </label><p><span style="cursor: pointer" @click="addInput">Добавить ссылку на фото</span></p>
        <div class="mb-3">
            <input type="submit" value="Добавить" class="btn btn-success">
        </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            title: '',
            description: '',
            price: '',
            photos: [],
            errors: []
        }
    },
    methods: {
        checkForm(e) {
            e.preventDefault();
            this.errors = [];
            if (!this.title) {
                this.errors.push('Укажите заголовок объявления');
            } else {
                if (!(this.title.length<200 && this.title.length>10)) {
                    this.errors.push('Заголовок объявления должен содержать не менее 10 и не более 200 символов');
                }
            }
            if (!this.description) {
                this.errors.push('Укажите текст объявления');
            } else {
                if (!(this.description.length<1000 && this.description.length>20)) {
                    this.errors.push('Текст объявления должен содержать не менее 20 и не более 1000 символов');
                }
            }
            if (this.errors.length === 0) {
                axios.post('/api/advert', { title: this.title, description: this.description, price: this.price, photos: this.photos})
                    .then( res => {
                        this.title = ''
                        this.description = ''
                        this.price = ''
                        this.photos = ''
                    }).catch(err => {
                        if (err.response) {
                            //console.log(err.response.data.errors)
                            this.errors.push(err.response.data.errors);
                        }
                })
            }
        },
        addInput(){
            if(this.photos.length<3) {
                this.photos.push('');
            }
        }
    }
}
</script>

<style scoped>

</style>
