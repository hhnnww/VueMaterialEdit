import {base_store} from "./store";
import {Notification} from "@arco-design/web-vue";
import {open_action_panel} from "./fun-加载素材信息";

export function action_function(action_name: string, alert: boolean|undefined) {
    if (alert) {
        if (!confirm('确定' + action_name)) {
            return
        }
    }
    Notification.info({
        title: action_name,
        content: '开始操作' + action_name,
        closable: true,
        duration: 10000
    })
    fetch('http://127.0.0.1:22702/MaterialFolder/Function', {
        method: 'POST',
        body: JSON.stringify({
            root_path: base_store.root_path,
            tb_name: base_store.tb_name,
            action_name: action_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res.json()
    }).then((res) => {
        if (res.mess === 'OK') {
            Notification.success({
                title: action_name,
                content: '操作完成' + res.mess,
                closable: true,
                duration: 10000
            })
            open_action_panel()
        }
    })
}