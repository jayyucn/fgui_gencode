import {readdirSync,statSync} from "fs";
import Config from './Config';
import {config} from "process";

export default class FileSystem
{

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
                if(!item.startsWith(Config.IGNORE_PATH_PREFIX))
                {
                    let newList = FileSystem.ReaddirSync(itemPath,includeFileTypes,excludeFileTypes);
                    list = list.concat(newList);
                }
            } else if(stat.isFile())
            {
                for(let type of Config.INCLUDE_FILE_TYPES)
                {
                    if(item.endsWith('.' + type))
                    {
                        list.push(itemPath);
                        break;
                    }
                }
            }
        }
        return list;
    }

    public static GetPackagePaths(assetPath: string): string[] {
        let list: string[] = [];
        let itemList = readdirSync(assetPath);
        for(let packageName of itemList)
        {
            let itemPath = assetPath + '/' + packageName;
            let stat = statSync(itemPath);
            if(stat.isDirectory() && !packageName.startsWith(Config.IGNORE_PATH_PREFIX))
            {
                list.push(itemPath);
            }
        }
        return list;
    }



}