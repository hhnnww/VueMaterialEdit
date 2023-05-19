<template>
    <div class="">
        <a-radio-group type="button"
                       size="large"
                       v-model="base_store.tb_name"
                       style="margin-bottom: 20px;">

            <a-radio v-for="tb_name in site_store.tb_name" :value="tb_name">{{ tb_name }}</a-radio>
        </a-radio-group>

        <div v-for="action_list in action_panel_list"
             class="mb-3">

            <a-button-group>
                <template v-for="action in action_list">
                    <a-button
                        type="primary"
                        size="large"
                        :status="action.status"
                        shape="square"
                        @click="action_function(action.name,action.alert)"
                    >
                        <template #icon>
                            <in-com-icon :icon="action.icon"/>
                        </template>
                        {{ action.name }}
                    </a-button>
                </template>
            </a-button-group>

        </div>
    </div>
</template>

<script setup
        lang="ts">
import {base_store} from "./store";
import {
    Ad,
    AddPic,
    Copy,
    DeleteThree,
    FileEditingOne,
    FileFocusOne,
    FileZip,
    FolderConversionOne,
    Lightning
} from "@icon-park/vue-next";
import InComIcon from './com-in-显示图标.vue'
import {action_function} from './fun-素材文件夹功能'
import site_store from '../../store'

const action_panel_list = [
    [
        {name: '全自动一键操作', icon: Lightning},
        {name: '解压ZIP', icon: FileZip},
        {name: '删除广告文件', icon: Ad},
        {name: '移动到根目录', icon: FolderConversionOne},
        {name: '文件重命名', icon: FileEditingOne},
        {name: '享设计文件夹改名', icon: FileEditingOne},
    ], [
        {name: '按格式分类', icon: FolderConversionOne},
        {name: '按数字分类', icon: FolderConversionOne},
        {name: '删除所有EPS', icon: DeleteThree},
        {name: '删除相同文件', icon: DeleteThree},
        {name: '字体导出PNG', icon: FileFocusOne},
        {name: '生成SKP批量导出脚本', icon: FileFocusOne}
    ],
    [
        {name: 'PSD删除广告-生成图片-添加广告', icon: FileFocusOne},
        {name: 'PSD生成图片-添加广告', icon: FileFocusOne},
        {name: 'PSD生成图片', icon: FileFocusOne},
        {name: 'AI导出图片', icon: FileFocusOne},
        {name: 'PPT导出图片', icon: FileFocusOne},
    ],
    [
        {name: '复制到预览图', icon: Copy},
        {name: '复制到效果图', icon: Copy},
    ], [
        {name: '素材图添加水印', icon: AddPic},
        {name: '删除图片边框', icon: AddPic},
        {name: '压缩字体为RAR', icon: FileZip},
        {name: '素材图蜘蛛水印', icon: AddPic},
        {name: '制作文件夹预览图', icon: AddPic}
    ],
    [
        {name: "删除素材内所有图片", icon: DeleteThree},
        {name: '删除效果图', icon: DeleteThree},
        {name: '删除预览图', icon: DeleteThree},
        {name: '删除所有', status: 'danger', icon: DeleteThree, alert: true}
    ]
]
</script>

<style scoped>

</style>