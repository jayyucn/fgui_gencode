import Package from "../data/Package";
import XmlNode,{ComponentNode} from "../data/XmlNode";
import FS from "../FS";
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

    public GetRescoureComponent(nodeOrId: string | ComponentNode,resId?: string): ResourceComponent
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
            return null;
        }
        let packageId = nodeOrId;
        let pkg: Package = this.GetPackage(packageId);
        if(pkg != null)
        {
            return pkg.GetResource(resId);
        }
        return null;
    }

    public  LoadProject(projectPath: string)
    {
        let root = projectPath + "/assets";
        let dirs: string[] = FS.GetDirectories(root);

        for(let i = 0;i < dirs.length;i++)
        {
            let packageXmlPath = dirs[i] + "/package.xml";
            if(FS.Exists(packageXmlPath))
            {
                let pkg: Package = PackageReader.Load(packageXmlPath);
                this.AddPackage(pkg);
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
                    node.resourceComponent = this.GetRescoureComponent(node);
                    if(node.resourceComponent == null)
                    {
                        console.warn(`没有找到 resourceComponent  packagename= ${node.parent.package.name} comname= ${node.parent.name} nodename=${node.name}`);
                    }
                    else
                    {
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