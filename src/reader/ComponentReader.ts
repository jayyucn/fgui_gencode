import ResourceComponent from "../data/ResourceComponent";
import Parser from "../Generator/Parser";
import {fgui} from "../data/FguiComponentType";
import CNode from '../data/CNode';

export default class ComponentReader
{
    public static Load(path: string,resourceComponent: ResourceComponent)
    {
        console.log("ComponentReader:" + path);
        
        let xmlDocument = await Parser.ParseXml(path);

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
                        resourceComponent.controllerList.push(new CNode(name,fgui.CommonName.Controller));
                        break;
                    // 动效
                    case fgui.NodeName.transition:
                        resourceComponent.transitionList.push(new CNode(name,fgui.CommonName.Transition));
                        break;
                    case fgui.NodeName.displayList:
                        let displayNodeList = node.ChildNodes;
                        let displayListKeys = Object.keys(node);
                        for(let dkey of displayListKeys)
                        {
                            let displayNode = node[dkey];
                            let pkg = null;
                            let src = null;
                            let nodeName = displayNode.name;
                            switch(dkey) {
                                // 图片
                                case fgui.NodeName.image:
                                    displayNode.pkg && (pkg = displayNode.pkg);
                                    displayNode.src && (pkg = displayNode.src);
                                    resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GImage,pkg,src));
                                    break;
                                // 文本
                                case fgui.NodeName.text:
                                    let input = false;
                                    displayNode.input && (input = displayNode.input == "true");
                                    if(input)
                                        resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GTextInput));
                                    else
                                        resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GTextField));
                                    break;
                                // 富文本
                                case fgui.NodeName.richtext:
                                    resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GRichTextField));
                                    break;
                                // 图形
                                case fgui.NodeName.graph:
                                    resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GGraph));
                                    break;
                                // 组
                                case fgui.NodeName.group:
                                    let advanced = false;
                                    displayNode.advanced && (input = displayNode.advanced == "true");
                                    if(advanced)
                                        resourceComponent.displayList.push(new CNode(nodeName,fgui.CommonName.GGroup));
                                    break;

                                // 装载器
                                case fgui.NodeName.loader:
                                    resourceComponent.displayList.push(new Node() {name = nodeName,type = fgui.CommonName.GLoader});
                                    break;

                                // 列表
                                case fgui.NodeName.list:
                                    resourceComponent.displayList.Add(new Node() {name = nodeName,type = fgui.CommonName.GList});
                                    break;

                                // 序列帧动画
                                case fgui.NodeName.movieclip:
                                    resourceComponent.displayList.Add(new Node() {name = nodeName,type = fgui.CommonName.GMovieClip});
                                    break;

                                // 自定义组件
                                case fgui.NodeName.component:
                                    pkg = null;
                                    if(displayNode.Attributes["pkg"] != null)
                                    {
                                        pkg = displayNode.Attributes.GetNamedItem("pkg").InnerText;
                                    }
                                    resourceComponent.AddNode(new ComponentNode() {
                                        name = nodeName,type = fgui.CommonName.GComponent,
                                        pkg = pkg,
                                        src = displayNode.Attributes.GetNamedItem("src").InnerText
                                    });
                                    break;

                            }
                        }
                        break;
                }
            }
            
        }

    }
}