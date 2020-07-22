"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem_1 = __importDefault(require("../FileSystem"));
const Config_1 = __importDefault(require("../Config"));
const Parser_1 = __importDefault(require("./Parser"));
class Package {
    constructor(path) {
        this.packageId = "";
        this.xmlList = [];
        this.xmlList = FileSystem_1.default.ReaddirSync(path, Config_1.default.INCLUDE_FILE_TYPES);
        //parse file list
        for (let xmlPath of this.xmlList) {
            console.log('xml path', path);
            Parser_1.default.ParseXml(xmlPath);
        }
    }
    GetDependPackages() {
    }
}
exports.default = Package;
