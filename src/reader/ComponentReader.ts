import ResourceComponent from "../data/ResourceComponent";
import Parser from "../Generator/Parser";
import {fgui} from "../data/FguiComponentType";
import CNode, { ComponentNode } from '../data/CNode';

export default class ComponentReader
{
    public static Load(path: string,resourceComponent: ResourceComponent)
    {
        console.log("ComponentReader:" + path);
        
        let xmlDocument = Parser.ParseXml(path);

        let component = xmlDocument.component;
        // 继承
        let extention = fgui.ExtendType.Component;
        if(component.extention)
            extention = extention;
        resourceComponent.extention = extention;

        let keys = Object.keys(component);
        
        for(let key of keys)
        {
            let nodeList = [...component[key]];
            for (let node of nodeList) {
                switch(key)
                {
                    // 控制器
                    case fgui.NodeName.controller:
                        resourceComponent.transitionList.push(new CNode({
                            name:name,
                            type:fgui.CommonName.Controller
                        }));
                        break;
                    // 动效
                    case fgui.NodeName.transition:
                        resourceComponent.transitionList.push(new CNode({
                            name:name,
                            type:fgui.CommonName.Transition
                        }));
                        break;
                    case fgui.NodeName.displayList:
                        let displayListKeys = Object.keys(node);
                        for(let dkey of displayListKeys)
                        {
                            let displayNode = node[dkey];
                            let pkg = null;
                            let src = null;
                            let type = "";
                            let nodeName = displayNode.name;
                            let isComponent: boolean = false;
                            switch(dkey) {
                                // 图片
                                case fgui.NodeName.image:
                                    displayNode.pkg && (pkg = displayNode.pkg);
                                    displayNode.src && (pkg = displayNode.src);
                                    type = fgui.CommonName.GImage;
                                    break;
                                // 文本
                                case fgui.NodeName.text:
                                    let input = false;
                                    displayNode.input && (input = displayNode.input == "true");
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
                                    displayNode.advanced && (input = displayNode.advanced == "true");
                                    if(advanced)
                                        type = fgui.CommonName.GGroup;
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
                                    isComponent = true;
                                    displayNode.pkg && (pkg = displayNode.pkg);
                                    displayNode.src && (src = displayNode.src);
                                        type = fgui.CommonName.GComponent;
                                        resourceComponent.AddNode(new ComponentNode({
                                            name: nodeName,
                                            type: type,
                                            pkg: pkg,
                                            src: src
                                        }));
                                    break;
                            }
                            if(!isComponent) {
                                resourceComponent.displayList.push(new CNode({
                                    name: nodeName,
                                    type:fgui.CommonName.GImage,pkg,src
                                }));
                            }
                        }
                        break;
                }
            }
            
        }

    }
}