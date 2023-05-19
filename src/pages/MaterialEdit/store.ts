import { reactive, ref } from "vue";

export const base_store = reactive({
  root_path: "",
  tb_name: "小夕素材",
  action_panel: false,
});

export const material_info_store = reactive({
  素材ID: "",
  首图标题: "",
  首图排列方式: "全自动适应",
  首图样式: "黑鲸",
  首图行数: 4,
  素材格式: "",
  源文件数量: 0,
  源文件列表: "",
  源文件大小: "",
  首图间距: 10,
  首图名称: 0,
  prev_path: "",
  next_path: "",

  效果图单排图片数量: 1,
  预览图单排图片数量: 3,
  
  首图裁剪模式: "middle",

  制作效果图: true,
  制作预览图: true,

  预览图列表: [],
  效果图列表: [],

  详情使用图片: "所有图片",
  详情水印: true,

  详情素材信息: true,

  详情使用图片数量: 0,
  详情使用图片排序: true,

  素材格式标题: "",
});

export const store_selected_img = ref([]);
