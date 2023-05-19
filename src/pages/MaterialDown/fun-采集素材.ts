import {store_select, store_scrapy} from "./store";
import {Notification} from "@arco-design/web-vue";
import {fun_获取素材} from "./fun-获取素材";

export function 采集素材() {
    Notification.info({
        title: "开始采集",
        content: '采集 ' + store_select.site_name + ' - ' + store_select.tb_name,
        duration: 10000,
        closable: true
    })
    fetch('http://localhost:22702/scrapy/run', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: store_scrapy.url,
            max_page: store_scrapy.max_page,
            cookie: store_scrapy.cookie,
            tb_name: store_select.tb_name,
            site_name: store_select.site_name
        })
    }).then((res) => {
        return res.text()
    }).then((res) => {
        console.log(res)
        Notification.success({
            title: "采集成功",
            content: '采集 ' + store_select.site_name + ' - ' + store_select.tb_name,
            duration: 10000,
            closable: true
        })
        fun_获取素材()

        //数据初始化
        Object.assign(store_scrapy)
    })
}