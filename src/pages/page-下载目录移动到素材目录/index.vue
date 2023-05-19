<template>
    <a-form layout="vertical" size="large" :model="store">
        <a-row :gutter="[24,24]">

            <a-col :span="4">
                <a-form-item label="店铺名称">
                    <a-radio-group v-model="store.tb_name" type="button">
                        <a-radio v-for="tb_name in site_store.tb_name" :value="tb_name">{{ tb_name }}</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :span="10">
                <a-form-item label="下载目录">
                    <a-input v-model="store.down_path"/>
                </a-form-item>
            </a-col>

            <a-col :span="10">
                <a-form-item label="素材目录">
                    <a-input v-model="store.material_path"/>
                </a-form-item>
            </a-col>

            <a-col :span="24">
                <a-button @click="fun_移动目录" type="primary">开始移动</a-button>
            </a-col>

        </a-row>
    </a-form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import site_store from "../../store";

const store = reactive({
    tb_name: '饭桶设计',
    down_path: 'G:\\DOWN',
    material_path: 'G:\\饭桶设计\\1000-1999'
})

function fun_移动目录() {
    fetch('http://127.0.0.1:22702/down_path_move_material_path/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/Json'
        },
        body: JSON.stringify(store)
    })
}

</script>

<style scoped>

</style>