import OS from 'os';
import FairyManager from './reader/FairyManager';
import Path from './Path';

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

    static Init(clientPath: string) {
        // let packagesPaths = FS.GetDirectories(Config.FGUI_ASSET_PATH);
        // let list = FileSystem.ReaddirSync(packagesPaths[0])
        // console.log(list)
        // CodeGenerator.Launch(packagesPaths);
        // PackageInfoMgr.Instance.Init(packagesPaths);
        // let file = readFileSync('./test/ModelSection/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./test/ModelSection/DetailsPanel.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./bin/assets/ModuleLogin/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./bin/assets/CommonBase/Button/CommonButton.xml',{encoding: 'utf-8'})
        // Parser.ParseXml(file);
        // Parser.ParseXml(file);
        
        let mgr = new FairyManager();
        let assetPath = "";
        let resPath = "";
        if (OS.platform() == "darwin") {
            clientPath = "/Users/jay/projects/client/";
            assetPath = "arts_project/Game-FGUI";
            resPath = "client/Game/bin/res/fgui";
        } else
        {
            clientPath = "E:\\workspace\\JJSGDNF\\client\\";
            assetPath = "arts_project\\Game-FGUI";
            resPath = "client\\Game\\bin\\res\\fgui";
        }
        mgr.LoadProject(clientPath + assetPath);
        mgr.ExportTS();

        mgr.ExportRes(clientPath + resPath);

        // let src = "./bin/assets/Component~NCode/GoButton.xml";
        // let exist = FS.Exists(src);
        // console.log(exist)
    }


}

new Main();