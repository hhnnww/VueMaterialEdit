<template>
    <a-auto-complete size="large"
                     v-model="base_store.root_path"
                     class="large-input" :data="recent_path_list" :allow-clear="true">
    </a-auto-complete>

    <div class="" style="margin-top: 20px">
        <a-space>
            <a-button type="primary" size="large"
                      @click="open_action_panel">提交
            </a-button>

            <a-button-group size="large">
                <a-button v-if="material_info_store.prev_path['exist'] === true" @click="base_store.root_path=material_info_store.prev_path['path']">
                    <double-left style="margin-right: 10px"/>
                    {{ material_info_store.prev_path['stem'] }} 上一个文件夹
                </a-button>

                <a-button v-if="material_info_store.next_path['exist'] === true" @click="base_store.root_path=material_info_store.next_path['path']">
                    下一个文件夹 {{ material_info_store.next_path['stem'] }}
                    <double-right style="margin-left: 10px"/>
                </a-button>
            </a-button-group>
        </a-space>
    </div>
</template>

<script setup
        lang="ts">
import {base_store, material_info_store} from "./store";
import {ref, watch} from "vue";
import {DoubleLeft, DoubleRight} from "@icon-park/vue-next";
import {open_action_panel} from './fun-加载素材信息'

// base_store.root_path = localStorage.getItem('root_path') || ''

watch(() => base_store.root_path, () => {
    base_store.action_panel = false
})

const recent_path_list = ref([])
const recent_path_text = localStorage.getItem('recent_path')
if (recent_path_text) {
    recent_path_list.value = JSON.parse(recent_path_text)
}
</script>

<style scoped>

</style>