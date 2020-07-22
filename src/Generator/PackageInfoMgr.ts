import Package from './Package';
export default class PackageInfoMgr {

    private static _Instance: PackageInfoMgr;
    static get Instance() {
        if(!this._Instance)
            this._Instance = new PackageInfoMgr();
        return this._Instance;
    }
    
    packages: Package[] = [];

    
    public Init(packagesPaths: string[]) {
        for(let path of packagesPaths) {
            let pkg = new Package(path);
            this.packages.push(pkg);
        }
    }


}