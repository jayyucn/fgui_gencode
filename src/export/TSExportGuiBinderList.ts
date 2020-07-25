import Package from "../data/Package";
import FS from "../FS";
import {TemplateSystem} from "../maps/templating/TemplateSystem";
import TsPathOut from "./TsPathOut";
import TsPathTemplate from "./TsPathTemplate";

export default class TSExportGuiBinderList
{
    public static Export(packageList: Package[])
    {
        let list = [];

        for(let pkg of packageList)
        {
            if(!pkg.genCode)
                continue;
            list.push([`${pkg.nameSpace}.${pkg.classNameBinder}.bindAll()`]);
        }

        let template: TemplateSystem = new TemplateSystem(FS.ReadTxt(TsPathTemplate.GuiBinderList));
        template.AddVariable("packlist",list);
        let content = template.Parse();
        let path = TsPathOut.GuiBinderList;

        FS.CheckPath(path);
        FS.WriteTxt(path,content);
    }
}