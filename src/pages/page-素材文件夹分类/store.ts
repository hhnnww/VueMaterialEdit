import {reactive, ref} from "vue";

type SingleFolder = {
    folder_path: string
    folder_stem: string
    preview_path: string
}

type SingleMaterial = {
    material_path: string
    preview_path: string
    image_path: string

}

const all_material = ref<[SingleMaterial] | []>([])

const all_folder = ref<[SingleFolder] | []>([])

type StoreType = {
    action: string

    // 素材路径
    root_path: string
    material_path: string
    preview_path: string

    // 新建文件夹
    new_category_stem: string

    // 移动素材列表
    in_folder_path: string
    in_preview_path: string
    move_material_list: [SingleMaterial] | []
}


const store = reactive<StoreType>({
    action: '',

    // 素材路径
    root_path: '',
    material_path: '',
    preview_path: '',

    // 新建文件夹
    new_category_stem: '',

    // 移动素材列表
    in_folder_path: '',
    in_preview_path: '',
    move_material_list: [],
})

export {store, all_material, all_folder}