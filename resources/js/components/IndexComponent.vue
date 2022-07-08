<template>
    <div>
        <router-link :to="{ name: 'advert.index' }">Объявления</router-link>
        <router-link :to="{ name: 'advert.create' }">Добавить</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "IndexComponent"
}
</script>

<style scoped>

</style>
