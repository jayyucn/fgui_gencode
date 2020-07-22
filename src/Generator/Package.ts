import FileSystem from '../FileSystem';
import Config from '../Config';
import Parser from './Parser';
export default class Package {

    constructor(path: string) {
        this.xmlList = FileSystem.ReaddirSync(path,Config.INCLUDE_FILE_TYPES);
        //parse file list
        for(let xmlPath of this.xmlList) {
            console.log('xml path', path);
            if(xmlPath.endsWith('.package.xml')) {

                return;
            }
            Parser.ParseXml(xmlPath);
        }
    }

    packageId: string = "";
    xmlList: string[] = [];

    public GetDependPackages() {

    }
}