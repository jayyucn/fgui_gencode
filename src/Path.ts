import { readdirSync, statSync, exists, existsSync, readFileSync } from 'fs';
import * as Fse from 'fs-extra';
import ResourceComponent from './data/ResourceComponent';
import Setting from './Setting';

export default class Path
{
    public static ReadTxt(path: string): string
    {
        return readFileSync(path,{encoding: 'utf-8'});
    }

    public static WriteTxt(path: string, content: string)
    {
        Fse.ensureFileSync(path);
        Fse.writeFileSync(path,content,{encoding:'utf-8'});
        // return readFileSync(path,{encoding: 'utf-8'});
    }

    public static WriteJson(path: string, jsonString: any) {
        Fse.writeJsonSync(path,jsonString);
    }

    public static ReadXml(path: string):string {
        return readFileSync(path, {encoding: 'utf-8'});
    }

    public static ReaddirSync(url: string,includeFileTypes: string[] = [],excludeFileTypes: string[] = [])
    {
        let list: string[] = [];
        let itemList = readdirSync(url);
        for(let item of itemList)
        {
            let itemPath = url + '/' + item;
            let stat = statSync(itemPath);
            if(stat.isDirectory())
            {
                if(!item.startsWith(Setting.Options.ignorePathPrefix))
                {
                    let newList = Path.ReaddirSync(itemPath,includeFileTypes,excludeFileTypes);
                    list = list.concat(newList);
                }
            } else if(stat.isFile() && item.endsWith('.xml'))
            {
                list.push(itemPath);
            }
        }
        return list;
    }

    public static GetDirectories(assetPath: string): string[] {
        let list: string[] = [];
        let itemList = readdirSync(assetPath);
        for(let packageName of itemList)
        {
            let itemPath = assetPath + '/' + packageName;
            let stat = statSync(itemPath);
            if(stat.isDirectory() && !packageName.startsWith(Setting.Options.ignorePathPrefix))
            {
                list.push(itemPath);
            }
        }
        return list;
    }

    public static GetFGUIResList(resPath: string): string[]{
        let list: string[] = [];
        let itemList = readdirSync(resPath);
        for(let item of itemList) {
            let itemPath = resPath + '/' + item;
            let stat = statSync(itemPath);
            if(stat && stat.isFile())
                list.push(item);
        }
        return list;
    }

    public static Exists(path: string) {
        return existsSync(path);
    }

    public static CreateDirectory(path: string) {
        Fse.ensureDirSync(path);
    }

    public static GetDirectoryPath(path: string)
    {
        if(Path.IsFile(path)) {
            return path.slice(0,path.lastIndexOf('/'))
        }
        if(path.endsWith('/'))
            return path.slice(0,path.lastIndexOf('/')+1);
        return path;
    }

    public static GetFileNameWithoutExtension(name: string): string {
        name = name.slice(name.lastIndexOf('/')+1);
        return name.split('.')[0]
    }

    public static GetExtension(name: string): string {
        return name.split('.')[1];
    }

    public static IsFile(path: string) {
        let stat = statSync(path);
        return stat.isFile();
    }

    public static IsDirectory(path: string) {
        let stat = statSync(path);
        return stat && stat.isDirectory();
    }

    public static CheckPath( path:string, isFile = true)
    {
        if(isFile) path = path.substring(0,path.lastIndexOf('/'));
        let dirs: string[] = path.split('/');
        let target = "";

        let first = true;
        for(let dir of dirs)
        {
            if(first)
            {
                first = false;
                target += dir;
                continue;
            }
            if(dir) continue;
            target += "/" + dir;
            if(!Path.Exists(target))
            {
                Path.CreateDirectory(target);
            }
        }
    }

    public static GetImportParams(res: ResourceComponent, isExtend:boolean = false): string[] {
        let cls = isExtend?res.classNameExtend:res.classNameStruct;
        let folder = isExtend ? "Extends" : "Generates";
        return [cls,`../../${folder}/${res.packageName}/${cls}`];
    }
    
}