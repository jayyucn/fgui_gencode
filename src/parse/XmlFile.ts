import ResourceComponent from "../data/ResourceComponent";


export interface XmlDocument {
    packageDescription: IpackageDescription;
    component: IComponent;
}

export interface IpackageDescription {
    resources: Iresources;
    id: string;
    publish?:IPublish;
}
export interface IPublish {
    name: string;
    genCode: string;
}

export interface Iresources {
    image: INode | INode[];
    component: INode | INode[];
}

export interface INode{
    id: string;
    name: string;
    path: string;
    exported: string;
}


export interface IComponent {
    transition: any;
    controller?: any;
    extention: string;
    displayList: IDisplayList
}

export interface IXmlNode {

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
