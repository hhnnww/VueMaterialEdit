<template>
    <a-menu mode="horizontal" theme="dark"
            :default-selected-keys="[route.name]">
        <a-menu-item key="index"
                     @click="router.push({name:'index'})">
            首页
        </a-menu-item>

        <a-menu-item key="material-edit"
                     @click="router.push({name:'material-edit'})">
            素材编辑
        </a-menu-item>

        <a-menu-item key="material-down"
                     @click="router.push({name:'material-down'})">
            素材下载
        </a-menu-item>

        <a-menu-item key="material-merge" @click="router.push({name:'material-merge'})">
            素材合并
        </a-menu-item>

        <a-menu-item key="material-move" @click="router.push({name:'material-move'})">
            下载目录移动到素材目录
        </a-menu-item>

        <a-menu-item key="un-used-path-dir" @click="router.push({name:'un-used-path-dir'})">
            查看未使用目录
        </a-menu-item>

        <a-menu-item key="font_to_png" @click="router.push({name:'font_to_png'})">
            字体生成图片
        </a-menu-item>

        <a-menu-item key="material-category" @click="router.push({name:'material_category'})">
            素材文件夹分类
        </a-menu-item>
    </a-menu>
</template>

<script setup
        lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

</script>

<style scoped>

</style>