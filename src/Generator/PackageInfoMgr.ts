import PackageReader from '../reader/PackageReader';
export default class PackageInfoMgr {

    private static _Instance: PackageInfoMgr;
    static get Instance() {
        if(!this._Instance)
            this._Instance = new PackageInfoMgr();
        return this._Instance;
    }
    
    packages: PackageReader[] = [];

    
    public Init(packagesPaths: string[]) {
        for(let path of packagesPaths) {
            let pkg = new PackageReader(path);
            this.packages.push(pkg);
        }
    }


}