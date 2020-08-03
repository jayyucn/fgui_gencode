import FairyManager from './reader/FairyManager';
import Path from './Path';
import Setting from './Setting';
import * as Fse from 'fs-extra';

export default class Main {
    constructor() {

        // this.test();
    }

    test() {
        let arr = ['aaaa.png', 'bbb.png', 'ccc.png'];
        let obj = {
            res: arr
        }
        Path.WriteJson('./test.json', obj);
    }

    static Init(clientPath: string, output: string, templatePath: string) {
        if(!Path.IsDirectory(clientPath))
            throw new Error(`project path url not found: ${clientPath}`);
        if(!Fse.pathExistsSync(output))
            Fse.ensureDir(output);
        if(!clientPath.endsWith('/'))
            clientPath += '/';
        Setting.Options.codePath = output;
        if(templatePath)
            Setting.Options.templateDir = templatePath;
        let mgr = new FairyManager();

        let assetPath = clientPath + "arts_project/Game-FGUI";
        let resPath = clientPath + "client/Game/bin/res/fgui";
        
        mgr.LoadProject(assetPath);
        mgr.ExportTS();

        mgr.ExportRes(resPath);


        mgr.CopyToClient();
        // let src = "./bin/assets/Component~NCode/GoButton.xml";
        // let exist = FS.Exists(src);
        // console.log(exist)
    }


}

new Main();