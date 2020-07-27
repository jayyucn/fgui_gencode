import Package from "../data/Package";
import Path from '../Path';
import { TemplateSystem } from "../TemplateSystem";
import TsPathTemplate from "./TsPathTemplate";
import TsPathOut from "./TsPathOut";

export default class TSExportSoundKey
{
    public static Export(pkg: Package)
    {

        let coms: any[] = [];

        for(let component of pkg.sounds)
        {
            if(!component.exported)
                continue;
            coms.push([component.classNameExtend,component.name,component.id,Path.GetExtension(component.name)]);
        }

        let template: TemplateSystem = new TemplateSystem(Path.ReadTxt(TsPathTemplate.SoundKey));
        template.AddVariable("packageName",pkg.name);
        template.AddVariable("list",coms);
        template.AddVariable("packageId",pkg.id);
        let content = template.Parse();
        let path = TsPathOut.SoundKey;

        Path.CheckPath(path);
        Path.WriteTxt(path,content);
    }
}

