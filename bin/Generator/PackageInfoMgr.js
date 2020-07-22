"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Package_1 = __importDefault(require("./Package"));
class PackageInfoMgr {
    constructor() {
        this.packages = [];
    }
    static get Instance() {
        if (!this._Instance)
            this._Instance = new PackageInfoMgr();
        return this._Instance;
    }
    Init(packagesPaths) {
        for (let path of packagesPaths) {
            let pkg = new Package_1.default(path);
            this.packages.push(pkg);
        }
    }
}
exports.default = PackageInfoMgr;
