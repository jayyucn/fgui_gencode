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
        // if(this.name != "ServerPanel.xml" && this.name != "LoginWindowUI.xml")
        //     return
        this.ExportStruct();
        this.ExportExtend();
    }

    /// <summary>
    /// 导出结构
    /// </summary>
    private ExportStruct()
    {
        let com = this.com;
        let fields: any[] = [];
        let setControllerList: any[] = [];
        let setTransitionList: any[] = [];
        let setDisplayList: any[] = [];

        // fields
        for(let node of this.com.controllerList)
        {
            if(node.isIgnore)
                continue;
            let line = [node.fieldName,node.type];
            fields.push(line);
            let lineCtrl = [node.fieldName, node.name];
            setControllerList.push(lineCtrl);
        }

        for (let node of this.com.transitionList)
        {
            if (node.isIgnore)
                continue;
            let line = [node.fieldName, node.type];
            fields.push(line);
            let lineTrans = [node.fieldName, node.name];
            setTransitionList.push(lineTrans);
        }

        for(let node of this.com.displayList)
        {
            if(node.isIgnore)
                continue;
            let lines = [node.fieldName,node.type];
            let lineDis = [node.fieldName,node.name,node.type];
            fields.push(lines);
            setDisplayList.push(lineDis);
        }

        for(let node of this.com.componentList)
        {
            if(node.isIgnore)
                continue;
            let lines = [node.fieldName,node.GetType(this.com)];
            let lines2 = [node.fieldName,node.name,node.GetType(this.com)];
            fields.push(lines);
            setDisplayList.push(lines2);
        }


        let dependPackages = "";
        let dependPackageList: string[] = new Array<string>();

        for (let item of this.com.dependPackageList)
        {
            dependPackageList.push(`\"${item.name}\"`);
        }
        dependPackages = dependPackageList.toString();


        let template = new TemplateSystem(FS.ReadTxt(TsPathTemplate.ComponentStruct));
        template.AddVariable("imports", com.structImports);
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
        let structPath = TsPathOut.ComponentStruct;
        let folderName = com.package.codeFolderName;
        let path = this.Format(structPath,[folderName,this.name]);
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
        template.AddVariable("imports", com.extendsImports);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        let content = template.Parse();
        let path = this.Format(TsPathOut.ComponentExtend,[com.package.codeFolderName,this.name]);

        FS.CheckPath(path);
        FS.WriteTxt(path, content);
    }

    private Format(target:string, args: any[]) {
        var result = target;
        if(args.length > 0)
        {
            for(var i = 0;i < args.length;i++)
            {
                if(args[i] != undefined)
                {
                    var reg = new RegExp("({)" + i + "(})","g");
                    result = result.replace(reg,args[i]);
                }
            }
        }
        return result;
    }
}