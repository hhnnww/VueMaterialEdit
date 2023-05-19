<template>
    <a-form size="large" layout="vertical">

        <a-row :gutter="[24,24]">
            <a-col :span="6">
                <a-form-item label="本文内容">
                    <a-input v-model="store.text"/>
                </a-form-item>
            </a-col>

            <a-col :span="6">
                <a-form-item label="字体路径">
                    <a-input v-model="store.font_path"/>
                </a-form-item>
            </a-col>

            <a-col :span="4">
                <a-form-item label="本文方向">
                    <a-radio-group type="button" v-model="store.direction">
                        <a-radio value="ltr">横向</a-radio>
                        <a-radio value="ttb">竖向</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col>
                <a-button type="primary" @click="get_img">提交</a-button>
            </a-col>

            <template v-if="img_url !== ''">
                <a-col>
                    <img :src="img_url" alt=""/>
                </a-col>
            </template>

        </a-row>

    </a-form>
</template>

<script setup lang="ts">
import axios from "axios";
import {reactive, ref} from "vue";

const store = reactive({
    font_path: '',
    text: '',
    direction: 'ltr'
})

const img_url = ref('')

function get_img() {
    axios.get('http://127.0.0.1:22702/font_to_pil', {
        params: store
    })
    img_url.value = 'http://127.0.0.1:22702/font_to_pil?font_path=' + store.font_path + '&text=' + store.text + '&direction=' + store.direction
}
</script>

<style scoped>

</style>