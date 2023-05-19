import {all_folder, all_material, store} from "./store";
import axios from "axios";

const url = 'http://127.0.0.1:22702/folder_category/'

function make_post(action: string) {
    store.action = action
    return axios.post(url, store)
}

function get_material_root_info() {
    make_post('获取素材文件夹信息').then((res) => {
        store.root_path = res.data.root_path
        store.material_path = res.data.material_path
        store.preview_path = res.data.preview_path
    })

}

function get_all_folder() {
    make_post('获取所有文件夹').then((res) => {
        all_folder.value = res.data
    })
}

function get_all_material() {
    make_post('获取所有文件').then((res) => {
        all_material.value = res.data
    })
}

function new_folder() {
    make_post('新建文件夹').then((res) => {
        if (res.data == 'ok') {
            get_all_folder()
        }
    })
}

function move_to_folder() {
    make_post('移动到文件夹').then((res) => {
        if (res.data == 'ok') {
            get_all_material()
        }
    })
}

export {get_all_material, get_all_folder, new_folder, move_to_folder, get_material_root_info}