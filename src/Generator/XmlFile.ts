export default class XmlFile {
    
}

export interface IXmlFile {
    component: IComponent;
}

export interface IComponent {
    controller?: any
    displayList: IDisplayList
}

export interface IDisplayList {
    image: IImage|IImage[]
    group?: any | any[];
    component: IComponent | IComponent[];
    text: any
    transition?: any
    loader?: any | any[]
    list?: any | any[]
    movieclip?: any | any[]
}

export interface IImage {
    id: string;// 'n5_xy38',
    name: string;//'n5',
    src: string;//'7m9y0',
    fileName: string;// '_images_ui/按钮1.png',
    pkg?: string;//'wvnubgws',
    xy?: string;//'0,0',
    group?: string;//'n19_ycyv'
    size?: string;//'184,53'
    alpha?: string;//0.8
}

export enum NodeName {
    controller = "controller",
    transition = "transition",
    displayList = "displayList",
    // 图片
    image = "image",
    // 文本
    text = "text",
    // 富文本
    richtext = "richtext",
    // 图形
    graph = "graph",
    // 组
    group = "group",
    // 装载器
    loader = "loader",
    // 列表
    list = "list",
    // 序列帧动画
    movieclip = "movieclip",
    // 组件
    component = "component",
}
