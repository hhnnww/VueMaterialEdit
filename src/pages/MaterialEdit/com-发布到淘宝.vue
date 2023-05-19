<template>
    <h3>
        <a-typography-paragraph copyable class="text-xl">
            {{ material_info_store.首图标题 }}{{ format_list[material_info_store.素材格式] }}{{ material_info_store.素材ID }}
        </a-typography-paragraph>
    </h3>

    <div class="" style="margin-top: 10px">
        <a-button type="primary" size="large" @click="publish_tb">
            <template #icon>
                <taobao theme="filled"/>
            </template>
            发布到淘宝
        </a-button>
    </div>

</template>

<script setup lang="ts">
import {material_info_store} from "./store";
import {Taobao} from '@icon-park/vue-next'

function publish_tb() {
    window.open('https://item.upload.taobao.com/sell/publish.htm?catId=201160807', '', '')
}

const format_list = {
    'PSD': 'PSD分层设计素材',
    'AI': 'AI矢量设计素材',
    'SKP': 'SU草图大师设计素材'
}
</script>

<style scoped>

</style>