import Package from '../data/Package';
import FS from '../FS';
import Parser from '../Generator/Parser';
import { INode } from '../Generator/XmlFile';
import ResourceComponent from '../data/ResourceComponent';
import {ResourceComponentType} from '../data/ResourceComponentType';

export default class PackageReader
{
    public static Load(path: string): Package
    {
        console.log("PackageReader:" + path);
        if(!FS.IsFile(path)) {
            console.error(`${path} is not file`);
            return;
        }
        let xmlStr = FS.ReadXml(path);
        let pkg: Package = new Package();
        pkg.rootPath = FS.GetDirectoryPath(path);
        let xmlDocument = Parser.ParseXml(xmlStr);
        let packageDescription = xmlDocument.packageDescription;
        let publish = xmlDocument.packageDescription.publish;

        pkg.genCode = false;
        pkg.id = packageDescription.id;
        if(publish)
        {
            pkg.name = publish.name;

            if(publish.genCode)
                pkg.genCode = publish.genCode == "true";
        }
        else
        {
            pkg.name = FS.GetFileNameWithoutExtension(FS.GetDirectoryPath(path));
        }
        let resources = packageDescription.resources;
        let keys = Object.keys(resources);
        for(let key of keys)
        {
            let list = resources[key] instanceof Array ? resources[key] : [resources[key]];
            for(let node of list) {
                let item = new ResourceComponent(node);
                item.type = <ResourceComponentType>key;
                let comPath = pkg.rootPath + item.path + item.name;
                if(FS.Exists(comPath))
                {
                    pkg.AddResource(item);
                }
            }
        }
        return pkg;
    }
}
