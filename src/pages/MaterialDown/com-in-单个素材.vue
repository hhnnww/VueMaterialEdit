<template>

    <div class="cursor-pointer h-[300px] center text-center overflow-hidden bg-gray-800 rounded" @click="down_material(material_obj['id'])">
        <a-image :preview="false" fit="scale-down" height="300" :src="material_obj.img"/>
    </div>

    <a-space size="large" class="mt-4">
        <a-button-group>
            <a-button @click="preview_material(material_obj['url'])">
                <template #icon>
                    <preview-open/>
                </template>
                预览
            </a-button>

            <a-button @click="cut_material(material_obj['id'])">
                <template #icon>
                    <cutting/>
                </template>
                截止
            </a-button>
        </a-button-group>

        <span class="opacity-50">{{ material_obj.id }}</span>
    </a-space>

</template>

<script setup lang="ts">
defineProps(['material_obj'])
import {store_material_list, store_select} from "./store";
import {fun_获取素材} from "./fun-获取素材";
import {Cutting, PreviewOpen} from "@icon-park/vue-next";

function down_material(material_id: string) {
    window.open('http://127.0.0.1:22702/get_material/get_material/' + store_select.tb_name + '/' + store_select.site_name + '/' + material_id)

    store_material_list.value.forEach((item, index) => {
        if (item['id'] === material_id) {
            store_material_list.value.splice(index, 1)
        }
    })
}

function preview_material(material_url: string) {
    window.open(material_url)
}

function cut_material(material_id: string) {
    fetch('http://127.0.0.1:22702/get_material/cut/' + store_select.tb_name + '/' + store_select.site_name + '/' + material_id, {
        method: 'GET'
    }).then((res) => {
        return res.text()
    }).then((res) => {
        console.log(res)
        fun_获取素材()
    })
    scrollTo(0, 0)
}
</script>

<style scoped>

</style>