<template>
    <com-input/>

    <template v-if="base_store.action_panel === true">
        <a-divider/>
        <com-panel/>

        <a-divider/>
        <com-taobao/>

        <a-divider/>
        <com-info/>

        <a-divider/>
        <com-img/>
    </template>

</template>

<script setup
        lang="ts">
import {base_store} from "./store";
import ComInput from './com-路径输入.vue'
import ComPanel from './com-操作面板.vue'
import ComInfo from './com-素材信息.vue'
import ComImg from './com-图片列表.vue'
import ComTaobao from './com-发布到淘宝.vue'
</script>

<style scoped>

</style>