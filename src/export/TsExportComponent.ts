import ResourceComponent from "../data/ResourceComponent";
import CNode from '../data/CNode';
import TsPathTemplate from "./TsPathTemplate";
import FS from "../FS";
import TsPathOut from "./TsPathOut";
import {TemplateSystem} from "../maps/templating/TemplateSystem";
export interface ILines {

}

export default class TsExportComponent
{
    public com: ResourceComponent;

    constructor(com: ResourceComponent) {
        this.com = com;
    }

    public name: string;
    public Export()
    {
        this.name = this.com.className;
        this.ExportStruct();
        this.ExportExtend();
    }

    /// <summary>
    /// 导出结构
    /// </summary>
    private ExportStruct()
    {
        let com = this.com;
        let fields: any[][] = [];
        let setControllerList: any[][] = [];
        let setTransitionList: any[][] = [];
        let setDisplayList: any[][] = [];

        // fields
        for(let node of this.com.controllerList)
        {
            if(node.isIgnore)
                continue;
            let lines = [{fieldName: node.fieldName,type: node.type}] ;
            fields.push(lines);
            setControllerList.push(lines);
        }

        for (let node of this.com.transitionList)
        {
            if (node.isIgnore)
                continue;
            let lines = [{fieldName: node.fieldName,type: node.type}];
            fields.push(lines);
            setTransitionList.push(lines);
        }

        for(let node of this.com.displayList)
        {
            if(node.isIgnore)
                continue;
            let lines = [{fieldName: node.fieldName,name: node.name,type: node.type}];
            fields.push(lines);
            setDisplayList.push(lines);
        }

        for(let node of this.com.componentList)
        {
            if(node.isIgnore)
                continue;
            let lines = [{fieldName: node.fieldName, name: node.name,type: node.GetType(this.com)}];
            fields.push(lines);
            setDisplayList.push(lines);
        }


        let dependPackages = "";
        let dependPackageList: string[] = new Array<string>();

        for (let item of this.com.dependPackageList)
        {
            dependPackageList.push(`\"${item.name}\"`);
        }
        dependPackages = dependPackageList.toString();


        let template = new TemplateSystem(FS.ReadTxt(TsPathTemplate.ComponentStruct));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        template.AddVariable("packagename", com.packageName);
        template.AddVariable("dependPackages", dependPackages);
        template.AddVariable("comname", FS.GetFileNameWithoutExtension(com.name));
        template.AddVariable("URL", com.URL);
        template.AddVariable("fields", fields);
        template.AddVariable("setControllerList", setControllerList);
        template.AddVariable("setDisplayList", setDisplayList);
        template.AddVariable("setTransitionList", setTransitionList);
        let content = template.Parse();
            let path = this.Format(TsPathOut.ComponentStruct, com.package.codeFolderName, name);
        FS.CheckPath(path);
        FS.WriteTxt(path, content);
    }

    /// <summary>
    /// 导出扩展
    /// </summary>
    private ExportExtend()
    {
        let com = this.com;
        let template: TemplateSystem = new TemplateSystem(FS.ReadTxt(TsPathTemplate.ComponentExtend));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        let content = template.Parse();
        let path = this.Format(TsPathOut.ComponentExtend, com.package.codeFolderName, name);

        FS.CheckPath(path);
        FS.WriteTxt(path, content);
    }

    private Format(target:string,...args) {
        var result = target;
        if(arguments.length > 0)
        {
            if(arguments.length == 1 && typeof (args) == "object")
            {
                for(var key in args)
                {
                    if(args[key] != undefined)
                    {
                        var reg = new RegExp("({" + key + "})","g");
                        result = result.replace(reg,args[key]);
                    }
                }
            }
            else
            {
                for(var i = 0;i < arguments.length;i++)
                {
                    if(arguments[i] != undefined)
                    {
                        //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                        var reg = new RegExp("({)" + i + "(})","g");
                        result = result.replace(reg,arguments[i]);
                    }
                }
            }
        }
        return result;
    }
}