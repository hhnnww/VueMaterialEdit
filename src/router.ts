import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', name: 'index', component: () => import('./pages/index/Index.vue')},
    {path: '/MaterialEdit', name: "material-edit", component: () => import('./pages/MaterialEdit/index.vue')},
    {path: '/MaterialDown', name: 'material-down', component: () => import('./pages/MaterialDown/Index.vue')},
    {
        path: '/DownPathToMaterialPath',
        name: 'material-move',
        component: () => import('./pages/page-下载目录移动到素材目录/index.vue')
    },
    {path: '/MaterialMerge', name: 'material-merge', component: () => import('./pages/page-素材合并/Index.vue')},
    {
        path: '/UnusedPathDir',
        name: 'un-used-path-dir',
        component: () => import('./pages/pages-查看未使用目录/Index.vue')
    },
    {
        path: '/font_to_png',
        name: 'font_to_png',
        component: () => import('./pages/page-字体生成图片/Index.vue')
    },
    {
        path: '/material_folder_category',
        name:'material_category',
        component: ()=> import('./pages/page-素材文件夹分类/index.vue')
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route