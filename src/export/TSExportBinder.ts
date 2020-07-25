import Package from "../data/Package";
import FS from '../FS';
import {TemplateSystem} from "../maps/templating/TemplateSystem";
import TsPathTemplate from "./TsPathTemplate";
import TsPathOut from "./TsPathOut";

export default class TSExportBinder
{
    public static Export(pkg: Package)
    {
        let coms = [];
        for(let component of pkg.ComponentList)
        {
            if(component.exported)
                coms.push([component.classNameExtend]);
        }

        let template: TemplateSystem = new TemplateSystem(FS.ReadTxt(TsPathTemplate.Binder));
        template.AddVariable("imports",pkg.importList);
        template.AddVariable("coms",coms);
        template.AddVariable("className",pkg.classNameBinder);
        let content = template.Parse();
        let path = this.Format(TsPathOut.Binder,[pkg.codeFolderName,pkg.classNameBinder]);

        FS.CheckPath(path);
        FS.WriteTxt(path,content);

        
        // TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.Binder));
        // template.AddVariable("namespace",pkg.nameSpace);
        // template.AddVariable("className",pkg.classNameBinder);
        // template.AddVariable("coms",coms.ToArray());
        // string content = template.Parse();

        // PathHelper.CheckPath(path);
        // File.WriteAllText(path,content);
    }

    private static Format(target: string,args: any[])
    {
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