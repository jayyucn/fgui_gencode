import Package from '../data/Package';
import FS from '../FS';
import Parser from '../Generator/Parser';
import { INode } from '../Generator/XmlFile';
import ResourceComponent from '../data/ResourceComponent';

export default class PackageReader
{
    public static Load(path: string): Package
    {
        console.log("PackageReader:" + path);
        let xmlStr = FS.ReadXml(path);
        let pkg: Package = new Package();
        pkg.rootPath = FS.GetDirectoryName(xmlStr);
        let xmlDocument = Parser.ParseXml(xmlStr);
        let packageDescription = xmlDocument.packageDescription;
        let publish = xmlDocument.packageDescription.publish;

        pkg.genCode = false;
        pkg.id = packageDescription.id;
        if(publish != null)
        {
            pkg.name = publish.name;

            if(publish.genCode != null)
                pkg.genCode = publish.genCode == "true";
        }
        else
        {
            pkg.name = FS.GetFileNameWithoutExtension(FS.GetDirectoryName(xmlStr));
        }
        let resources = packageDescription.resources;
        let keys = Object.keys(resources);
        for(let key of keys)
        {
            let node = resources[key];

            let item = new ResourceComponent(node);

            let comPath = pkg.rootPath + item.path + item.name;
            if(FS.Exists(comPath))
            {
                pkg.AddResource(item);
            }
        }
        return pkg;
    }
}
