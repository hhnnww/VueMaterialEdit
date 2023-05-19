<template>
    <a-space size="large">
        <a-button-group>
            <a-button type="primary" @click="select_all">
                <template #icon>
                    <check-one theme="outline"/>
                </template>
                全选
            </a-button>
            <a-button type="primary" @click="store_selected_img.length=0">
                <template #icon>
                    <reduce-one theme="outline"/>
                </template>
                全不选
            </a-button>
        </a-button-group>
        <a-typography>
            {{ store_selected_img.length }}
        </a-typography>
    </a-space>

    <template v-if="material_info_store.效果图列表.length > 0">
        <in-com-img-list :img_list="material_info_store.效果图列表" title="效果图列表"/>
    </template>

    <template v-if="material_info_store.预览图列表.length > 0">
        <in-com-img-list :img_list="material_info_store.预览图列表" title="预览图列表"/>
    </template>

</template>

<script setup
        lang="ts">
import {material_info_store, store_selected_img} from "./store";
import InComImgList from './com-in-图片列表.vue'
import {CheckOne, ReduceOne} from "@icon-park/vue-next";

function select_all() {
    material_info_store.预览图列表.forEach((item) => {
        if (store_selected_img.value.indexOf(item['path']) <= -1) {
            store_selected_img.value.push(item['path'])
        }
    })

    material_info_store.效果图列表.forEach((item) => {
        if (store_selected_img.value.indexOf(item['path']) <= -1) {
            store_selected_img.value.push(item['path'])
        }
    })
}
</script>

<style scoped>

</style>