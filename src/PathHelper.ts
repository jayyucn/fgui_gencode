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

    public static string ChangeExtension(string path,string ext)
    {
        string e = Path.GetExtension(path);
        if(string.IsNullOrEmpty(e))
        {
            return path + ext;
        }

        bool backDSC = path.IndexOf('\\') != -1;
        path = path.Replace('\\','/');
        if(path.IndexOf('/') == -1)
        {
            return path.Substring(0,path.LastIndexOf('.')) + ext;
        }

        string dir = path.Substring(0,path.LastIndexOf('/'));
        string name = path.Substring(path.LastIndexOf('/'),path.Length - path.LastIndexOf('/'));
        name = name.Substring(0,name.LastIndexOf('.')) + ext;
        path = dir + name;

        if(backDSC)
        {
            path = path.Replace('/','\\');
        }
        return path;
    }
}