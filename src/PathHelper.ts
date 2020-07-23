import FS from './FS';


export default class PathHelper
{
    public static CheckPath(path: string, isFile: boolean = true)
    {
        if(isFile) path = path.substr(0,path.lastIndexOf('/'));
        let dirs: string[] = path.split('/');
        let target = "";
        let first = true;
        for(let dir of dirs)
        {
            if(first){
                first = false;
                target += dir;
                continue;
            }

            if(!dir) continue;
            target += "/" + dir;
            if(!FS.Exists(target))
            {
                FS.CreateDirectory(target);
            }
        }
    }

    public static  ChangeExtension( path:string, ext:string): string
    {
        let e = FS.GetExtension(path);
        if(!e)
        {
            return path + ext;
        }

        let backDSC = path.indexOf('\\') != -1;
        path = path.replace('\\','/');
        if(path.indexOf('/') == -1)
        {
            return path.substring(0,path.lastIndexOf('.')) + ext;
        }
        let dir = path.substring(0,path.lastIndexOf('/'));
        let name = path.substring(path.lastIndexOf('/'),path.length - path.lastIndexOf('/'));
        name = name.substring(0,name.lastIndexOf('.')) + ext;
        path = dir + name;
        if(backDSC)
            path = path.replace('/','\\');
        return path;
    }
}