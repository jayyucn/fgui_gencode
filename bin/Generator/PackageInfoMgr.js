"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            // let pkg = new PackageReader(path);
            // this.packages.push(pkg);
        }
    }
}
exports.default = PackageInfoMgr;
