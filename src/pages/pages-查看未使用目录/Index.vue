<template>
    <a-row :gutter="[24,24]">
        <a-col :span="24">
            <a-input size="large" v-model="parent_path"/>
        </a-col>

        <a-col :span="24">
            <a-button type="primary" @click="fun_get_path_list">提交</a-button>
        </a-col>

        <template v-if="path_list.length > 0">
            <a-col :span="24">
                <a-row :gutter="[24,24]">
                    <a-col :span="3" v-for="path in path_list">
                        <a-typography-text copyable>{{ path }}</a-typography-text>
                    </a-col>
                </a-row>
            </a-col>
        </template>

    </a-row>
</template>

<script setup lang="ts">
import {ref} from "vue";

const path_list = ref([])
const parent_path = ref('')

function fun_get_path_list() {
    fetch('http://127.0.0.1:22702/un-used-path-dir', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            in_path: parent_path.value
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        path_list.value = res
    })
}
</script>

<style scoped>

</style>