"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem_1 = __importDefault(require("./FileSystem"));
const Config_1 = __importDefault(require("./Config"));
const Parser_1 = __importDefault(require("./Generator/Parser"));
const fs_1 = require("fs");
class Main {
    constructor() {
        this.Init();
    }
    Init() {
        let packagesPaths = FileSystem_1.default.GetPackagePaths(Config_1.default.FGUI_ASSET_PATH);
        // let list = FileSystem.ReaddirSync(packagesPaths[0])
        // console.log(list)
        // CodeGenerator.Launch(packagesPaths);
        // PackageInfoMgr.Instance.Init(packagesPaths);
        // let file = readFileSync('./test/ModelSection/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./test/ModelSection/DetailsPanel.xml',{encoding: 'utf-8'})
        let file = fs_1.readFileSync('./test/ModelSection/package.xml', { encoding: 'utf-8' });
        // let file = readFileSync('./test/CommonBase/Button/CommonButton.xml',{encoding: 'utf-8'})
        // Parser.ParseXml(file);
        Parser_1.default.ParseXml(file);
    }
}
exports.default = Main;
new Main();