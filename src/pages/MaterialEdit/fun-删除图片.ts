import {Notification} from "@arco-design/web-vue";
import {open_action_panel} from "./fun-加载素材信息";

export function del_img(img_path: string) {
    fetch('http://127.0.0.1:22702/MaterialFolder/del_img?img=' + img_path, {
        method: 'GET'
    }).then((res) => {
        return res.text()
    }).then((res) => {
        Notification.info({
            title: '删除图片',
            content: '图片删除成功：' + img_path
        })
        open_action_panel()
    })
}