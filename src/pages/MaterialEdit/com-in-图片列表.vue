<template>
    <div class="" style="margin-top: 50px">
        <div class="text-xl font-bold mb-2 mb-5">{{ props.title }}</div>
        <a-row :gutter="[24,24]" align="end">
            <a-col :xl="4" :xxl="3" v-for="img in props.img_list">
                <input type="checkbox" v-model="store_selected_img" :name="img.name" :id="img.name" :value="img.path" style="display: none"/>
                <label :for="img.name" class="img-item p-2 block">
                    <!--suppress VueUnrecognizedDirective -->
                    <img src="" v-lazy="'http://127.0.0.1:22702/GetMaterialInfo/img_blob?img='+img['path']" alt=""/>
                </label>
                <div class="img-meta px-2 flex">

                    <div class="name">{{ img.name }}</div>

                    <div class="">
                        <a-popconfirm content="确定要删除吗？此操作不可撤回。" @ok="del_img(img.path)">
                            <a-button type="text" size="mini" status="danger">
                                <template #icon>
                                    <delete theme="outline"/>
                                </template>
                                删除
                            </a-button>
                        </a-popconfirm>
                    </div>

                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
import {Delete} from "@icon-park/vue-next";
import {store_selected_img} from "./store";
import {del_img} from "./fun-删除图片";

const props = defineProps([
    'img_list', 'title'
])
</script>

<style scoped>
label.img-item {
    border-radius: 2px;
    cursor: pointer;
}

input[type=checkbox]:checked + label.img-item {
    background: rgb(var(--primary-6));
}

.img-meta {
    margin-top: 10px;
}

.img-meta .name {
    text-transform: uppercase;
    overflow: hidden;
    width: 70%;
}
</style>