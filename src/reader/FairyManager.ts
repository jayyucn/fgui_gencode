import Package from "../data/Package";
import XmlNode,{ComponentNode} from "../data/XmlNode";
import Path from "../Path";
import PackageReader from "./PackageReader";
import ComponentReader from "./ComponentReader";
import ResourceComponent from "../data/ResourceComponent";
import TSExportBinder from "../export/TSExportBinder";
import Setting from "../Setting";
import TSExportSoundKey from "../export/TSExportSoundKey";
import TsExportComponent from "../export/TsExportComponent";
import TSExportGuiPackageNames from "../export/TSExportGuiPackageNames";
import TSExportGuiBinderList from "../export/TSExportGuiBinderList";

export default class FairyManager
{
    packageList: Package[] = new Array<Package>();
    packages: Map<string,Package> = new Map<string,Package>();
    packagesByName: Map<string,Package> = new Map<string,Package>();

    public AddPackage(pkg: Package)
    {
        this.packageList.push(pkg);
        this.packages.set(pkg.id,pkg);
        this.packagesByName.set(pkg.name,pkg);
    }

    public GetPackage(packageId: string): Package
    {
        if(this.packages.has(packageId))
        {
            return this.packages.get(packageId);
        }
        return null;
    }

    public GetPackageByName(packageName: string): Package
    {
        if(this.packagesByName.has(packageName))
        {
            return this.packagesByName.get(packageName);
        }
        return null;
    }

    public GetRescoureComponent(nodeOrId: string | ComponentNode,resId?: string)
    {
        if(!nodeOrId)
            return;
        if(nodeOrId instanceof ComponentNode)
        {
            let node = nodeOrId;
            if(!node.pkg && node.parent != null)
            {
                return node.parent.package.GetResource(node.src);
            }
            let pkg: Package = this.GetPackage(node.pkg);
            if(pkg != null)
            {
                return pkg.GetResource(node.src);
            }
            return;
        }
        let packageId = nodeOrId;
        let pkg: Package = this.GetPackage(packageId);
        if(pkg != null && resId)
        {
            return pkg.GetResource(resId);
        }
        return;
    }

    public  LoadProject(projectPath: string)
    {
        let root = projectPath + "/assets";
        let dirs: string[] = Path.GetDirectories(root);

        for(let i = 0;i < dirs.length;i++)
        {
            let packageXmlPath = dirs[i] + "/package.xml";
            if(Path.Exists(packageXmlPath))
            {
                let pkg = PackageReader.Load(packageXmlPath);
                pkg && this.AddPackage(pkg);
            }
        }
        this.LoadComponent();
        this.SetComponentNode();
    }


    private LoadComponent()
    {
        for(let pkg of this.packageList)
        {
            for(let component of pkg.ComponentList)
            {
                let path = pkg.rootPath + component.path + component.name;
                ComponentReader.Load(path,component);
            }
        }
    }

    private SetComponentNode()
    {
        for(let pkg of this.packageList)
        {
            for(let component of pkg.ComponentList)
            {
                for(let node of component.componentNodeList)
                {
                    let res = this.GetRescoureComponent(node);
                    if(!res)
                        console.warn(`没有找到 resourceComponent  packagename= ${node.parent.package.name} comname= ${node.parent.name} nodename=${node.name}`);
                    else
                    {
                        node.resourceComponent  = res;
                        // 添加被依赖
                        node.resourceComponent.beDependList.push(component);
                        if(component.exported)
                        {
                            node.resourceComponent.beenDependentorExtported = true;
                        }
                    }
                }
            }
        }
        // 生成依赖的包列表
        for(let pkg of this.packageList)
        {
            for(let component of pkg.ComponentList)
            {
                component.AddDependPackage(pkg);
                this.TraverseDependPackage(component,component);

                for(let node of component.displayList)
                {
                    if(node.pkg != null)
                    {
                        let pkg = this.GetPackage(node.pkg);
                        if(pkg != null)
                            component.AddDependPackage(pkg);
                    }
                }
            }
        }
    }

    public TraverseDependPackage(component: ResourceComponent,root: ResourceComponent)
    {
        for(let node of component.componentNodeList)
        {
            if(node.resourceComponent != null)
            {
                root.AddDependPackage(node.resourceComponent.package);
                this.TraverseDependPackage(node.resourceComponent,root);
            }
        }
    }


    public ExportTS()
    {
        
        this.ExportTSComponent();
        this.ExportTSBinder();
        this.ExportTSExportGuiPackageNames();
        this.ExportTSExportGuiBinderList();
        this.ExportTSExportSoundKey();
    }

    public ExportRes(resPath: string) {
        let resList: string[] = Path.GetFGUIResList(resPath);
        resList.sort();
        let obj = {};
        obj['res'] = resList;
        let resMap: Map<number,string> = new Map<number,string>();
        let indexMap: Map<string,number> = new Map<string,number>();
        let tempMap: Map<string, number[]> = new Map<string, number[]>();
        let soundList: string[] = [];
        let binList: number[] = [];
        for(let index = 0;index < resList.length;index++)
        {
            let res = resList[index];
            let pkgName = "";
            if(res.startsWith('Sound')) {
                soundList.push(res);
            }
            else if(res.endsWith('.' + Setting.Options.fguiFileExtension)) {
                binList.push(index);
            }else if(res.endsWith('.png') || res.endsWith('.jpg')) {
                pkgName = res.slice(0,res.indexOf('_atlas'));
                if(!tempMap.has(pkgName))
                    tempMap.set(pkgName, []);
                tempMap.get(pkgName).push(index);
            }
            resMap.set(index,res);
            indexMap.set(res,index);
        }
        let pkgs = obj['pkgs'] = {};
        for(let pkg of this.packageList)
        {
            let dependList = [];
            for(let p of pkg.dependPackages) {
                let list = tempMap.get(p.name);
                if(!list)
                    continue;
                dependList = dependList.concat(list);
            }
            if(dependList.length > 0)
                pkgs[pkg.name] = dependList;
        }
        obj['bins'] = binList;
        Path.WriteJson(Setting.Options.fguiExportJsonPath, obj);
    }

    public CopyToClient() {
        let codePath = Setting.Options.codePath + "/TS";
        let outputPath = Setting.Options.codeOutPut;
    }

    private ExportTSComponent()
    {
        for(let pkg of this.packageList)
        {
            for(let component of pkg.ComponentList)
            {
                if(component.isIgnore)
                    continue;
                let ept: TsExportComponent = new TsExportComponent(component);
                ept.Export();
            }
        }
    }

    private ExportTSBinder()
    {

        for(let pkg of this.packageList)
        {
            if(pkg.genCode)
                TSExportBinder.Export(pkg);
        }
    }

    private ExportTSExportGuiPackageNames()
    {

        TSExportGuiPackageNames.Export(this.packageList);
    }

    private ExportTSExportGuiBinderList()
    {

        TSExportGuiBinderList.Export(this.packageList);
    }

    private ExportTSExportSoundKey()
    {
        let sound: Package = this.GetPackageByName(Setting.Options.soundPackageName);
        if(sound != null)
        {
            TSExportSoundKey.Export(sound);
        }
    }
}