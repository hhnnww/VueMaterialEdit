import {base_store, material_info_store, store_selected_img} from "./store";
import {Message, Notification} from '@arco-design/web-vue'


export function make_xq() {
    if (material_info_store.素材格式.length == 0) {
        Message.error({
            content: '素材格式为空'
        })
        return;
    }
    Notification.info({
        title: '制作详情',
        content: material_info_store.素材ID + ' 开始制作详情',
        duration: 10000,
        closable: true
    })
    fetch('http://127.0.0.1:22702/make_xq/make_xq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            root_path: base_store.root_path,
            tb_name: base_store.tb_name,

            素材ID: material_info_store.素材ID,
            素材格式: material_info_store.素材格式,
            源文件列表: material_info_store.源文件列表,
            源文件大小: material_info_store.源文件大小,
            
            预览图单排图片数量: material_info_store.预览图单排图片数量,
            效果图单排图片数量: material_info_store.效果图单排图片数量,

            制作效果图: material_info_store.制作效果图,
            制作预览图: material_info_store.制作预览图,

            详情使用图片: material_info_store.详情使用图片,
            img_list: store_selected_img.value,
            详情水印: material_info_store.详情水印,
            详情素材信息: material_info_store.详情素材信息,
            详情使用图片数量: material_info_store.详情使用图片数量,
            详情使用图片排序: material_info_store.详情使用图片排序
        })
    }).then((res) => {
        return res.text()
    }).then(() => {
        Notification.success({
            title: '制作详情',
            content: material_info_store.素材ID + ' 制作详情完成',
            duration: 10000,
            closable: true
        })
    })
}