<template>
    <com-select-panel/>
    <a-divider/>

    <com-scrapy-panel/>
    <a-divider/>

    <com-scrapy-list/>
</template>

<script setup lang="ts">
import ComSelectPanel from './com-选择面板.vue'
import ComScrapyPanel from './com-采集面板.vue'
import ComScrapyList from './com-素材列表.vue'
import {fun_获取素材} from "./fun-获取素材";
import {watch, watchEffect} from "vue";
import {store_select, store_scrapy} from "./store";

const local_site_name = localStorage.getItem('site_name')
if (local_site_name) {
    store_select.site_name = local_site_name
}

const local_tb_name = localStorage.getItem('tb_name')
if (local_tb_name) {
    store_select.tb_name = local_tb_name
}

fun_获取素材()

watch(() => [store_select.site_name, store_select.tb_name], () => {
    localStorage.setItem('site_name', store_select.site_name)
    localStorage.setItem('tb_name', store_select.tb_name)

    store_scrapy.url = ''
    store_scrapy.max_page = 1
    store_scrapy.cookie = ''

    store_select.page_num = 1
})

//
// watch(() => store_select.page_num, () => {
//     fun_获取素材()
// })

watchEffect(() => {
    fun_获取素材()
})
</script>

<style scoped>

</style>