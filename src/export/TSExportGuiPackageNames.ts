import Package from "../data/Package";
import {TemplateSystem} from "../maps/templating/TemplateSystem";
import TsPathTemplate from "./TsPathTemplate";
import FS from "../FS";
import TsPathOut from "./TsPathOut";


export default class TSExportGuiPackageNames
{
    public static Export(packageList: Package[])
    {

        let list = [];

        for(let pkg of packageList)
        {
            if(pkg.genCode)
                list.push([pkg.codeFolderName,pkg.name]);
        }

        let importList = []
        for(let pkg of packageList) {
            if(pkg.genCode)
                importList.push([pkg.classNameBinder]);
        }

        let template: TemplateSystem = new TemplateSystem(FS.ReadTxt(TsPathTemplate.GuiPackageNames));
        template.AddVariable("imports",importList);
        template.AddVariable("packlist",list);
        let content = template.Parse();
        let path = TsPathOut.GuiPackageNames;

        FS.CheckPath(path);
        FS.WriteTxt(path,content);
    }

}