<template>
    <com-in-page-nati/>

    <a-row :gutter="[24,24]" class="py-14" align="end" justify="start">
        <a-col :span="3" v-for="ma in store_material_list">
            <com-in-material :material_obj="ma"/>
        </a-col>
    </a-row>

    <com-in-page-nati/>
</template>

<script setup lang="ts">
import ComInPageNati from './com-in-翻页.vue'
import ComInMaterial from './com-in-单个素材.vue'
import {store_material_list} from "./store";
</script>

<style scoped>

</style>