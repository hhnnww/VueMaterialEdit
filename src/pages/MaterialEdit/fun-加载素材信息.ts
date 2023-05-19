import {base_store, material_info_store, store_selected_img} from "./store";
import {getFormattedValue} from "@arco-design/web-vue/es/time-picker/utils";

export function open_action_panel() {
    // localStorage.setItem('root_path', base_store.root_path)
    store_selected_img.value.length = 0

    fetch('http://127.0.0.1:22702/GetMaterialInfo/base_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            root_path: base_store.root_path
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        material_info_store.素材ID = res.素材ID
        material_info_store.首图标题 = ''
        material_info_store.素材格式 = res.素材格式
        material_info_store.源文件数量 = res.源文件数量
        material_info_store.源文件列表 = res.源文件列表
        material_info_store.源文件大小 = res.源文件大小
        material_info_store.首图行数 = 4
        material_info_store.prev_path = res.prev_path
        material_info_store.next_path = res.next_path
        material_info_store.首图间距 = 10
        material_info_store.预览图列表 = res.预览图列表
        material_info_store.效果图列表 = res.效果图列表
        material_info_store.首图名称 = 0
        material_info_store.详情使用图片数量 = res.预览图列表.length
        material_info_store.素材格式标题 = res.素材格式标题

        base_store.action_panel = true

        let recent_path_list = []
        const recent_path_text = localStorage.getItem('recent_path')
        if (recent_path_text) {
            recent_path_list = JSON.parse(recent_path_text)

            if (!recent_path_list.some((rec_path: string) => rec_path === base_store.root_path.toString())) {
                recent_path_list.unshift(base_store.root_path)
                recent_path_list = Array.from(new Set(recent_path_list))
                recent_path_list = recent_path_list.slice(0, 50)
                localStorage.setItem('recent_path', JSON.stringify(recent_path_list))
            }
        } else {
            localStorage.setItem('recent_path', JSON.stringify([base_store.root_path]))
        }
    })
}