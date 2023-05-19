<template>
    <a-space size="large" direction="vertical" fill>
        <a-input v-model="store.root_path" size="large"/>
        <a-space>
            <a-tag>源文件:{{ store.material_path }}</a-tag>
            <a-tag>预览图:{{ store.preview_path }}</a-tag>
        </a-space>
        <a-button @click="get_info" type="primary">提交</a-button>
    </a-space>

</template>

<script setup lang="ts">
import {get_material_root_info, get_all_folder} from "./function";
import {store} from "./store";

function get_info() {
    get_material_root_info();
    get_all_folder()
}
</script>

<style scoped>

</style>