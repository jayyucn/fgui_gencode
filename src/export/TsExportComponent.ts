import ResourceComponent from "../data/ResourceComponent";
import XmlNode from '../data/XmlNode';
import TsPathTemplate from "./TsPathTemplate";
import Path from "../Path";
import TsPathOut from "./TsPathOut";
import {TemplateSystem} from "../TemplateSystem";
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

        for(let node of this.com.componentNodeList)
        {
            if(node.isIgnore)
                continue;
            let type = node.GetType(this.com);
            let lines = [node.fieldName, type];
            let lines2 = [node.fieldName,node.name, type];
            fields.push(lines);
            setDisplayList.push(lines2);
        }

        let dependPackages = "";
        let dependPackageList: string[] = new Array<string>();

        for (let pkg of this.com.dependPackageList)
        {
            dependPackageList.push(`\"${pkg.name}\"`);
        }
        dependPackages = dependPackageList.toString();


        let template = new TemplateSystem(Path.ReadTxt(TsPathTemplate.ComponentStruct));
        template.AddVariable("imports", com.extendsImports);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        template.AddVariable("packagename", com.packageName);
        template.AddVariable("dependPackages", dependPackages);
        template.AddVariable("comname", Path.GetFileNameWithoutExtension(com.name));
        template.AddVariable("URL", com.URL);
        template.AddVariable("fields", fields);
        template.AddVariable("setControllerList", setControllerList);
        template.AddVariable("setDisplayList", setDisplayList);
        template.AddVariable("setTransitionList", setTransitionList);
        let content = template.Parse();
        let structPath = TsPathOut.ComponentStruct;
        let folderName = com.package.codeFolderName;
        let path = structPath.format(folderName,this.name);
        Path.CheckPath(path);
        Path.WriteTxt(path, content);
    }

    /// <summary>
    /// 导出扩展
    /// </summary>
    private ExportExtend()
    {
        let com = this.com;
        let path = TsPathOut.ComponentExtend.format(com.package.codeFolderName,this.name);
        if(Path.IsFile(path))
            return;
        let template: TemplateSystem = new TemplateSystem(Path.ReadTxt(TsPathTemplate.ComponentExtend));
        template.AddVariable("imports", com.structImports);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        let content = template.Parse();
        Path.CheckPath(path);
        Path.WriteTxt(path, content);
    }

}