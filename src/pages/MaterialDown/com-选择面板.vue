<template>

    <a-form layout="vertical">
        <a-space>
            <a-form-item label="店铺选择">
                <a-radio-group v-model="store_select.tb_name" type="button" size="large">
                    <a-radio v-for="tb_name in site_store.tb_name" :value="tb_name">{{ tb_name }}</a-radio>
                </a-radio-group>
            </a-form-item>

            <a-form-item label="网站选择">
                <a-radio-group v-model="store_select.site_name" type="button" size="large">
                    <a-radio v-for="site_name in site_store.site_name" :value="site_name">{{ site_name }}</a-radio>
                </a-radio-group>
            </a-form-item>

            <a-form-item label="下载目录">
                <a-radio-group v-model="store_scrapy.down_path" type="button" size="large">
                    <a-radio value="D:\DOWN">D:\DOWN</a-radio>
                    <a-radio value="E:\DOWN">E:\DOWN</a-radio>
                    <a-radio value="F:\DOWN">F:\DOWN</a-radio>
                    <a-radio value="G:\DOWN">G:\DOWN</a-radio>
                </a-radio-group>
            </a-form-item>

        </a-space>
    </a-form>

</template>

<script setup lang="ts">
import {store_scrapy, store_select} from "./store";
import site_store from "../../store";
</script>


<style scoped>

</style>