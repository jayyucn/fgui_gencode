import Package from "../data/Package";
import FS from '../FS';

export default class TSExportSoundKey
{
    public static Export(pkg: Package)
    {

        let coms: any[][] = [];

        for(let component of pkg.sounds)
        {
            if(!component.exported)
                continue;
            coms.push([component.classNameExtend,component.name,component.id,FS.GetExtension(component.name)]);
        }

        TsPathTemplate.SoundKey
        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.SoundKey));
        template.AddVariable("packageName",pkg.name);
        template.AddVariable("packageId",pkg.id);
        template.AddVariable("list",coms.ToArray());
        string content = template.Parse();
        string path = TsPathOut.SoundKey;

        PathHelper.CheckPath(path);
        File.WriteAllText(path,content);
    }
}

