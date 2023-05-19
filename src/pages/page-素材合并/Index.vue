<template>
    <a-form layout="vertical" size="large">
        <a-row :gutter="[24,24]" justify="start" align="center">

            <a-col :span="3">
                <a-form-item label="店铺选择">
                    <a-radio-group type="button" v-model="store.tb_name">
                        <a-radio v-for="tb_name in site_store.tb_name" :value="tb_name">{{ tb_name }}</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :span="9">
                <a-form-item label="源目录">
                    <a-input v-model="store.ori_path"/>
                </a-form-item>
            </a-col>

            <a-col :span="1" class="text-center text-3xl">
                <arrow-right/>
            </a-col>

            <a-col :span="9">
                <a-form-item label="目标目录">
                    <a-input v-model="store.dst_path"/>
                </a-form-item>
            </a-col>

            <a-col :span="24">
                <a-button type="primary" @click="fun_合并素材">提交</a-button>
            </a-col>
        </a-row>
    </a-form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {ArrowRight} from "@icon-park/vue-next";
import {Notification} from "@arco-design/web-vue";
import axios from "axios";
import site_store from "../../store";

const store = reactive({
    tb_name: '饭桶设计',
    dst_path: '',
    ori_path: ''
})

function fun_合并素材() {
    Notification.info({
        title: '合并素材',
        content: '把素材目录：' + store.dst_path + '合并到目录：' + store.ori_path,
        closable: true,
        duration: 0
    })
    axios.post('http://127.0.0.1:22702/material_merge', {
        tb_name: store.tb_name,
        ori_path: store.ori_path,
        dst_path: store.dst_path
    }).then(function (res) {
        console.log(res)
        Notification.success({
            title: '合并素材成功',
            content: '把素材目录：' + store.dst_path + '合并到目录：' + store.ori_path,
            closable: true,
            duration: 0
        })
    })

}
</script>

<style scoped>

</style>