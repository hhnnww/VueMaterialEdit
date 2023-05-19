import {store_select, store_material_list, store_material_info} from "./store";

export function fun_获取素材() {
    fetch('http://127.0.0.1:22702/get_material/get_list', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tb_name: store_select.tb_name,
            site_name: store_select.site_name,
            page_num: store_select.page_num
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        store_material_list.value = res['material_list']

        store_material_info.all_page = res['all_page']
        store_material_info.count = res['count']
    })
}