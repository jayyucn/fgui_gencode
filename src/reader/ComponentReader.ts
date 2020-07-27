import ResourceComponent from "../data/ResourceComponent";
import Parser from "../parse/Parser";
import {fgui} from "../data/FguiComponentType";
import XmlNode, { ComponentNode } from '../data/XmlNode';
import Path from '../FS';

export default class ComponentReader
{
    public static Load(path: string,resourceComponent: ResourceComponent)
    {
        // console.log("ComponentReader:" + path);
        
        let xml = Path.ReadXml(path);
        let xmlDocument = Parser.ParseXml(xml);
        let component = xmlDocument.component;
        // 继承
        let extention = fgui.ExtendType.Component;
        if( component.extention)
            extention = component.extention;
        resourceComponent.extention = extention;
        let keys = Object.keys(component);
        for(let key of keys)
        {
            let nodeList: XmlNode[] = component[key] instanceof Array ? component[key] : [component[key]];
            for (let node of nodeList) {
                switch(key)
                {
                    // 控制器
                    case fgui.NodeName.controller:
                        resourceComponent.controllerList.push(new XmlNode({
                            name:node.name,
                            type:fgui.CommonName.Controller
                        }));
                        break;
                    // 动效
                    case fgui.NodeName.transition:
                        resourceComponent.transitionList.push(new XmlNode({
                            name: node.name,
                            type:fgui.CommonName.Transition
                        }));
                        break;
                    case fgui.NodeName.displayList:
                        this.LoadDisplayList(node,resourceComponent);
                        break;
                }
            }
            
        }

    }

    private static LoadDisplayList(displayList,resourceComponent: ResourceComponent) {
        let displayListKeys = Object.keys(displayList);
        for(let key of displayListKeys)
        {
            let nodeList = displayList[key] instanceof Array ? displayList[key] : [displayList[key]];
            for(let node of nodeList) {
                let pkg = null;
                let src = null;
                let type = "";
                let nodeName = node.name;
                if(!node.name)
                {
                    console.log('ssssss', node)
                }
                let isIgnore: boolean = false;
                node.name
                switch(key)
                {
                    // 图片
                    case fgui.NodeName.image:
                        node.pkg && (pkg = node.pkg);
                        node.src && (pkg = node.src);
                        type = fgui.CommonName.GImage;
                        break;
                    // 文本
                    case fgui.NodeName.text:
                        let input = false;
                        node.input && (input = node.input == "true");
                        if(input)
                            type = fgui.CommonName.GTextInput;
                        else
                            type = fgui.CommonName.GTextField;
                        break;
                    // 富文本
                    case fgui.NodeName.richtext:
                        type = fgui.CommonName.GRichTextField;
                        break;
                    // 图形
                    case fgui.NodeName.graph:
                        type = fgui.CommonName.GGraph;
                        break;
                    // 组
                    case fgui.NodeName.group:
                        let advanced = false;
                        node.advanced && (advanced = node.advanced == "true");
                        if(advanced)
                            type = fgui.CommonName.GGroup;
                        else
                            isIgnore = true;
                        break;
                    // 装载器
                    case fgui.NodeName.loader:
                        type = fgui.CommonName.GLoader;
                        break;
                    // 列表
                    case fgui.NodeName.list:
                        type = fgui.CommonName.GList;
                        break;
                    // 序列帧动画
                    case fgui.NodeName.movieclip:
                        type = fgui.CommonName.GMovieClip;
                        break;
                    // 自定义组件
                    case fgui.NodeName.component:
                        isIgnore = true;
                        node.pkg && (pkg = node.pkg);
                        node.src && (src = node.src);
                        type = fgui.CommonName.GComponent;
                        // console.log('AddNode: ', nodeName)
                        resourceComponent.AddNode(new ComponentNode({
                            name: nodeName,
                            type: type,
                            pkg: pkg,
                            src: src
                        }));
                        break;
                }
                if(!isIgnore)
                {
                    resourceComponent.displayList.push(new XmlNode({
                        name: nodeName,
                        type: type,pkg,src
                    }));
                }
            }
        }
    }
}