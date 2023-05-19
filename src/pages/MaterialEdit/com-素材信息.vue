<template>
    <a-form layout="vertical"
            size="large"
            :model="material_info_store">

        <a-row :gutter="[20,0]">
            
            <!-- 素材信息 -->

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="源文件数量">
                    <a-input v-model="material_info_store.源文件数量"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="预览图数量">
                    <a-input v-model="material_info_store.预览图列表.length" disabled/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="素材格式标题">
                    <a-input v-model="material_info_store.素材格式标题"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="素材ID">
                    <a-input v-model="material_info_store.素材ID"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="素材格式">
                    <a-input v-model="material_info_store.素材格式"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="源文件列表">
                    <a-input v-model="material_info_store.源文件列表"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="源文件大小">
                    <a-input v-model="material_info_store.源文件大小"/>
                </a-form-item>
            </a-col>

            
            
            <!-- 首图信息 -->

            <a-col :span="24">
                <a-divider orientation="left">首图选项</a-divider>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图标题"
                             required>
                    <a-input v-model="material_info_store.首图标题"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" xl="12" xxl="12">
                <a-form-item label="首图排列方式">
                    <a-radio-group type="button"
                                   size="large"
                                   v-model="material_info_store.首图排列方式">
                        <a-radio value="全自动适应">全自动适应</a-radio>
                        <a-radio value="单行自适应">单行自适应</a-radio>
                        <a-radio value="固定尺寸">固定尺寸</a-radio>
                        <a-radio value="OneAndX">OneAndX</a-radio>
                        <a-radio value="竖排自适应">竖排自适应</a-radio>
                        <a-radio value="横排自适应">横排自适应</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>
            
            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图裁剪模式">
                    <a-radio-group type="button" size="large" v-model="material_info_store.首图裁剪模式">
                        <a-radio value="top">顶部裁剪</a-radio>
                        <a-radio value="middle">居中裁剪</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图间距">
                    <a-radio-group type="button"
                                   size="large"
                                   v-model="material_info_store.首图间距">
                        <a-radio :value="0">无间距</a-radio>
                        <a-radio :value="10">有间距</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图行数">
                    <a-radio-group size="large" type="button" v-model="material_info_store.首图行数">
                        <a-radio :value="1">1 行</a-radio>
                        <a-radio :value="2">2 行</a-radio>
                        <a-radio :value="3">3 行</a-radio>
                        <a-radio :value="4">4 行</a-radio>
                        <a-radio :value="5">5 行</a-radio>
                        <a-radio :value="6">6 行</a-radio>
                        <a-radio :value="7">7 行</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图样式">
                    <a-radio-group type="button"
                                   v-model="material_info_store.首图样式">
                        <a-radio value="黑鲸">黑鲸</a-radio>
                        <a-radio value="T500">T500</a-radio>
                        <a-radio value="巴扎嘿">巴扎嘿</a-radio>
                        <a-radio value="三老爹">三老爹</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="首图名称">
                    <a-radio-group type="button" size="large" v-model="material_info_store.首图名称">
                        <a-radio :value="0">0.JPG</a-radio>
                        <a-radio :value="1">1.JPG</a-radio>
                        <a-radio :value="2">2.JPG</a-radio>
                        <a-radio :value="3">3.JPG</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <!-- 详情信息 -->
            
            <a-col :span="24">
                <a-divider orientation="left">详情选项</a-divider>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="效果图单行图片数量">
                <a-radio-group  type="button" size="large" v-model="material_info_store.效果图单排图片数量">
                    <a-radio :value="1">1 张</a-radio>
                    <a-radio :value="2">2 张</a-radio>
                    <a-radio :value="3">3 张</a-radio>
                    <a-radio :value="4">4 张</a-radio>
                </a-radio-group>
            </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="预览图单行图片数量">
                <a-radio-group  type="button" size="large" v-model="material_info_store.预览图单排图片数量">
                    <a-radio :value="1">1 张</a-radio>
                    <a-radio :value="2">2 张</a-radio>
                    <a-radio :value="3">3 张</a-radio>
                    <a-radio :value="4">4 张</a-radio>
                </a-radio-group>
            </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="是否将效果图作为详情">
                    <a-radio-group type="button" size="large" v-model="material_info_store.制作效果图">
                        <a-radio :value="true">制作</a-radio>
                        <a-radio :value="false">不制作</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="是否将预览图作为详情">
                    <a-radio-group type="button" size="large" v-model="material_info_store.制作预览图">
                        <a-radio :value="true">制作</a-radio>
                        <a-radio :value="false">不制作</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="详情使用图片">
                    <a-radio-group type="button" size="large" v-model="material_info_store.详情使用图片">
                        <a-radio value="所有图片">所有图片</a-radio>
                        <a-radio value="已选图片">已选图片</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="详情是否添加水印">
                    <a-radio-group type="button" size="large" v-model="material_info_store.详情水印">
                        <a-radio :value="true">添加</a-radio>
                        <a-radio :value="false">不添加</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="是否携带素材信息">
                    <a-radio-group type="button" size="large" v-model="material_info_store.详情素材信息">
                        <a-radio :value="true">携带</a-radio>
                        <a-radio :value="false">不携带</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="详情使用图片数量">
                    <a-input-number step="10" mode="button" v-model="material_info_store.详情使用图片数量"/>
                </a-form-item>
            </a-col>

            <a-col :xs="xs" :xl="xl" :xxl="xxl">
                <a-form-item label="详情图片排序">
                    <a-radio-group v-model="material_info_store.详情使用图片排序" type="button" size="large">
                        <a-radio :value="true">正序</a-radio>
                        <a-radio :value="false">倒序</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-col>

            <a-col :span="24" class="mt-10">
                <a-space>
                    <a-button-group>

                        <a-button size="large" type="primary" @click="make_st_xq">
                            <template #icon>
                                <add-picture/>
                            </template>
                            制作首图 + 详情
                        </a-button>

                        <a-button size="large" type="primary" @click="make_st">
                            <template #icon>
                                <add-picture/>
                            </template>
                            制作首图
                        </a-button>

                        <a-button size="large" type="primary" @click="make_xq">
                            <template #icon>
                                <add-picture/>
                            </template>
                            制作详情
                        </a-button>

                    </a-button-group>

                </a-space>
            </a-col>

        </a-row>
    </a-form>
</template>

<script setup
        lang="ts">
import {ref} from "vue";
import {material_info_store} from "./store";
import {AddPicture} from "@icon-park/vue-next";
import {make_st} from "./fun-制作首图";
import {make_xq} from "./fun-制作详情";

const xs = ref(12)
const xl = ref(6)
const xxl = ref(6)

function make_st_xq() {
    make_st()
    make_xq()
}

</script>

<style scoped>

</style>