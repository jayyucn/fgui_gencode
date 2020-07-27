import Package from "../data/Package";
import Path from "../Path";
import {TemplateSystem} from "../TemplateSystem";
import TsPathOut from "./TsPathOut";
import TsPathTemplate from "./TsPathTemplate";

export default class TSExportGuiBinderList
{
    public static Export(packageList: Package[])
    {
        let list = [];
        let importList = [];

        for(let pkg of packageList)
        {
            if(!pkg.genCode)
                continue;
            let inpt = [pkg.classNameBinder, `./${pkg.codeFolderName}/${pkg.classNameBinder}`];
            importList.push(inpt);
            if(!pkg.genCode)
                continue;
            list.push([`${pkg.classNameBinder}.bindAll()`]);
        }
        

        let template: TemplateSystem = new TemplateSystem(Path.ReadTxt(TsPathTemplate.GuiBinderList));
        template.AddVariable("imports",importList);
        template.AddVariable("packlist",list);
        let content = template.Parse();
        let path = TsPathOut.GuiBinderList;

        Path.CheckPath(path);
        Path.WriteTxt(path,content);
    }
}