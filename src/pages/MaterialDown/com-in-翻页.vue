<template>
    <a-space>
        <a-button-group size="large">
            <a-button @click="store_select.page_num = 1">
                <home class="mr-2"/>
                首页
            </a-button>

            <a-button @click="store_select.page_num --" :disabled="turn_page.prev_page">
                <double-left class="mr-2"/>
                上一页
            </a-button>

            <a-button>{{ store_select.page_num }}</a-button>

            <a-button @click="store_select.page_num ++" :disabled="turn_page.next_page">
                下一页
                <double-right class="ml-2"/>
            </a-button>

        </a-button-group>
        <div class="mx-5">素材总计：{{ store_material_info.count }}</div>
        <a-button type="primary" size="large" @click="fun_获取素材">
            <template #icon>
                <refresh/>
            </template>
            刷新
        </a-button>
    </a-space>
</template>

<script setup lang="ts">
import {store_material_info, store_select} from "./store";
import {reactive, watchEffect} from "vue";
import {DoubleLeft, DoubleRight, Home, Refresh} from "@icon-park/vue-next";
import {fun_获取素材} from "./fun-获取素材";

const turn_page = reactive({
    prev_page: false,
    next_page: false
})

watchEffect(() => {
    turn_page.prev_page = store_select.page_num <= 1;

    turn_page.next_page = store_select.page_num >= store_material_info.all_page;

    scrollTo(0, 0)
})
</script>

<style scoped>

</style>