<template>
    <a-layout class="bg-black">
        <a-layout-header>
            <com-header/>
        </a-layout-header>
        <a-layout-content class="p-10">
            <router-view/>
        </a-layout-content>
    </a-layout>

</template>

<script setup
        lang="ts">
import ComHeader from './com-header.vue'

document.body.setAttribute('arco-theme', 'dark')
document.title = '超级无敌素材处理程序'
</script>

<style scoped>
</style>
