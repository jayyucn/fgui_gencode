"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FairyManager_1 = __importDefault(require("./reader/FairyManager"));
class Main {
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
        // let file = readFileSync('./test/CommonBase/Button/CommonButton.xml',{encoding: 'utf-8'})
        // Parser.ParseXml(file);
        // Parser.ParseXml(file);
        let mgr = new FairyManager_1.default();
        mgr.LoadProject('./bin');
    }
}
exports.default = Main;
new Main();
