import {base_store, material_info_store, store_selected_img} from "./store";
import {Message, Notification} from "@arco-design/web-vue";

export function make_st() {
    if (material_info_store.首图标题.length == 0) {
        Message.error({
            content: '请填写标题'
        })
        return
    }

    if (store_selected_img.value.length == 0) {
        Message.error({
            content: '请选择图片'
        })
        return
    }

    if (material_info_store.素材格式.length == 0) {
        Message.error({
            content: '素材格式为空'
        })
        return;
    }
    Notification.info({
        title: '制作首图',
        content: material_info_store.素材ID + ' 开始制作首图',
        duration: 10000,
        closable: true
    })
    fetch('http://127.0.0.1:22702/make_st/make_st', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'material_id': material_info_store.素材ID,
            "title": material_info_store.首图标题,
            "img_list": store_selected_img.value,
            "st_row": material_info_store.首图行数,
            "st_style": material_info_store.首图样式,
            "small_pic_mode": material_info_store.首图排列方式,
            "material_format_list": material_info_store.素材格式,
            "tb_name": base_store.tb_name,
            "gutter": material_info_store.首图间距,
            '首图名称': material_info_store.首图名称,
            '素材格式标题': material_info_store.素材格式标题,
            '源文件数量': material_info_store.源文件数量,
            "首图裁剪模式":material_info_store.首图裁剪模式
        })
    }).then((res) => {
        return res.text()
    }).then(() => {
        Notification.success({
            title: '制作首图',
            content: material_info_store.素材ID + ' 制作首图完成',
            duration: 10000,
            closable: true
        })
    })
}