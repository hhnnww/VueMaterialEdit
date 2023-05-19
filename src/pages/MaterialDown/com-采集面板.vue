<template>
    <a-form layout="vertical" size="large">
        <a-row :gutter="[20,0]">
            <a-col :span="10">
                <a-form-item label="采集网址">
                    <a-input v-model="store_scrapy.url"/>
                </a-form-item>
            </a-col>

            <a-col :span="4">
                <a-form-item label="采集页数">
                    <a-input-number mode="button" min="1" max="50" v-model="store_scrapy.max_page"/>
                </a-form-item>
            </a-col>

            <a-col :span="10">
                <a-form-item label="COOKIE">
                    <a-input v-model="store_scrapy.cookie"/>
                </a-form-item>
            </a-col>

            <a-col :span="24">
                <a-space>
                    <a-button type="primary" @click="采集素材">
                        <template #icon>
                            <link-cloud/>
                        </template>
                        开始采集
                    </a-button>

                    <a-button @click="clear_db">
                        <template #icon>
                            <strikethrough/>
                        </template>
                        清空数据库
                    </a-button>
                    <a-button @click="down_path_cate">
                        <template #icon>
                            <folder-success-one/>
                        </template>
                        下载文件夹归类
                    </a-button>

                    <template v-if="store_select.site_name === 'envato'">
                        <a-button @click="fun_envato下载文件夹归类">
                            <template #icon>
                                <folder-success-one/>
                            </template>
                            envato素材下载文件夹归类
                        </a-button>
                    </template>

                </a-space>
            </a-col>
        </a-row>
    </a-form>
</template>

<script setup lang="ts">
import {store_scrapy, store_select} from "./store";
import {采集素材} from "./fun-采集素材";
import {fun_获取素材} from "./fun-获取素材";
import {Notification} from "@arco-design/web-vue";
import {LinkCloud, Strikethrough, FolderSuccessOne} from "@icon-park/vue-next";

function fun_envato下载文件夹归类() {
    Notification.info({
        title: 'envato下载文件夹归类',
        content: '开始归类',
        closable: true,
        duration: 10000,
    })
    fetch('http://127.0.0.1:22702/scrapy/envato_down_path_cate', {
        method: 'GET'
    }).then((res) => {
        return res.text()
    }).then((res) => {
        console.log(res)
        Notification.success({
            title: 'envato文件夹归类',
            content: '归类成功',
            closable: true,
            duration: 10000,
        })
    })
}

function clear_db() {
    fetch('http://127.0.0.1:22702/get_material/clear_db/' + store_select.tb_name + '/' + store_select.site_name, {
        method: 'GET'
    }).then((res) => {
        return res.text()
    }).then((res) => {
        console.log(res)
        fun_获取素材()
    })
}

function down_path_cate() {
    fetch('http://127.0.0.1:22702/scrapy/down_path_cate?down_path=' + store_scrapy.down_path, {
        method: 'GET'
    }).then((res) => {
        return res.text()
    }).then((res) => {
        Notification.success({
            title: '下载文件夹归类',
            content: '归类结果 ' + res,
            duration: 10000,
            closable: true
        })
    })
}
</script>

<style scoped>

</style>