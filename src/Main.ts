import OS from 'os';
import FairyManager from './reader/FairyManager';

export default class Main {
    constructor() {

        this.Init();
    }

    Init() {
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
        if (OS.platform() == "darwin") {
            mgr.LoadProject('/Users/jay/projects/client/arts_project/Game-FGUI');
            // mgr.LoadProject('./bin/');
        } else
            mgr.LoadProject('E:\\workspace\\JJSGDNF\\client\\arts_project\\Game-FGUI');
        mgr.ExportTS();

        // let src = "./bin/assets/Component~NCode/GoButton.xml";
        // let exist = FS.Exists(src);
        // console.log(exist)
    }


}

new Main();