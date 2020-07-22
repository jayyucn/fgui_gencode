import FileSystem from './FileSystem';
import Config from './Config';
import CodeGenerator from './Generator/CodeGenerator';
import PackageInfoMgr from './Generator/PackageInfoMgr';
import Parser from './Generator/Parser';
import {readFileSync} from 'fs';

export default class Main {
    constructor() {
        this.Init();
    }

    Init() {
        // let packagesPaths = FileSystem.GetPackagePaths(Config.FGUI_ASSET_PATH);
        // let list = FileSystem.ReaddirSync(packagesPaths[0])
        // console.log(list)
        // CodeGenerator.Launch(packagesPaths);
        // PackageInfoMgr.Instance.Init(packagesPaths);
        let file = readFileSync('./test/ModelSection/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./test/ModelSection/DetailsPanel.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./test/CommonBase/Button/CommonButton.xml',{encoding: 'utf-8'})
        // Parser.ParseXml(file);
        Parser.ParseXml2(file);
    }

    
}

new Main();