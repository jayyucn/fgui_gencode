import Package from "../data/Package";
import FS from '../FS';

export default class TSExportBinder
{
    public static Export(pkg: Package)
    {
        let coms = [];
        for(let component of pkg.ComponentList)
        {
            if(component.isIgnore)
                continue;
            coms.push(component.classNameExtend);
        }

        FS.ReaddirSync
        
        // TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.Binder));
        // template.AddVariable("namespace",pkg.nameSpace);
        // template.AddVariable("className",pkg.classNameBinder);
        // template.AddVariable("coms",coms.ToArray());
        // string content = template.Parse();
        // string path = string.Format(TsPathOut.Binder,pkg.codeFolderName,pkg.classNameBinder);

        // PathHelper.CheckPath(path);
        // File.WriteAllText(path,content);
    }
}