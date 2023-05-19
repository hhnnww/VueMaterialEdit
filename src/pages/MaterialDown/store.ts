import {reactive, ref} from "vue";


export const store_select = reactive({
    tb_name: '饭桶设计',
    site_name: '包图',
    page_num: 1
})

export const store_scrapy = reactive({
    url: '',
    max_page: 1,
    cookie: '',
    down_path: 'G:\\DOWN'
})

export const store_material_list = ref([])

export const store_material_info = reactive({
    count: 0,
    all_page: 1
})