import Package from './Package';
import XmlNode, {ComponentNode} from './XmlNode';
import Setting from '../Setting';
import Path from '../Path';
import StringUtils from '../StringUtils';
import {fgui} from './FguiComponentType';
import {ResourceComponentType} from './ResourceComponentType';
export default class ResourceComponent
{
    constructor(obj: Object) {
        let keys = Object.keys(obj);
        for(let key of keys) {
            this[key] = obj[key];
        }
    }
    
    public package: Package;
    public type: ResourceComponentType;
    public id: string;
    public name: string;
    public path: string;
    public exported: boolean = false;
    public extention: string;
    controllerList: XmlNode[] = new Array<XmlNode>();
    transitionList: XmlNode[] = new Array<XmlNode>();
    displayList: XmlNode[] = new Array<XmlNode>();
    componentNodeList: ComponentNode[] = new Array<ComponentNode>();
    dependPackageList: Package[] = new Array<Package>();
    beDependList: ResourceComponent[] = new Array<ResourceComponent>();

    public beenDependentorExtported: boolean = false;

    public AddDependPackage(pkg: Package)
    {
        if(this.dependPackageList.length == 0)
            this.dependPackageList.push(this.package);
        if(this.dependPackageList.findIndex(function(v){return v.id == pkg.id}) == -1)
            this.dependPackageList.push(pkg);
    }

    public AddNode(node: ComponentNode)
    {
        node.parent = this;
        this.componentNodeList.push(node);
    }

    public get URL(): string
    {
        return `ui://${this.package.id}${this.id}`;
    }
    static EnableRegex: RegExp = new RegExp(/^[A-Za-z_]+[A-Za-z0-9_]*/);

    public get classNameIsEnable(): boolean
    {
        return ResourceComponent.EnableRegex.test(this.className);
    }

    
    public get isIgnore(): boolean
    {
        if(!this.package.genCode)
            return true;
        if(this.name.startsWith('_'))
            return true;
        if(Setting.Options.codeIgnorNoExported)
        {
            if(!this.exported)
            {
                if(Setting.Options.codeExportDepend)
                {
                    if(!this.beenDependentorExtported)
                    {
                        return true;
                    }
                } else
                {
                    return true;
                }
            }
        }
        if(Setting.Options.codeIgnorIllegalClassName)
        {
            return !this.classNameIsEnable;
        } else
        {
            return false;
        }
    }

    private _className: string;
    public get className(): string
    {
        if(!this._className)
        {
            let clsName = Path.GetFileNameWithoutExtension(this.name);
            if(!Setting.Options.codeIgnorIllegalClassName)
                clsName = clsName.replace(/[^A-Za-z0-9_]/,"")
            this._className = StringUtils.FirstUpper(clsName);
        }
        return this._className;
    }
    public set className(name: string)
    {
        this._className = name;
    }

    private _structImports: any[];
    public get structImports(): any[]
    {
        if(!this._structImports)
        {
            this._structImports = [];
            this._structImports.push(Path.GetImportParams(this));
            
        }
        return this._structImports;
    }


    private _extendsImports: any[];
    public get extendsImports(): any[]
    {
        if(!this._extendsImports)
        {
            this._extendsImports = [Path.GetImportParams(this, true)];
            let clsName = [];
            for (const com of this.componentNodeList) {
                let res = com.resourceComponent;
                if(res && res.classNameExtend == "PlaneBg") {
                    console.log("------------qqq-----------------",res.isIgnore);
                    res.isIgnore
                }
                if(res && !com.isIgnore && clsName.indexOf(res.classNameExtend) == -1)
                {
                    this._extendsImports.push(Path.GetImportParams(res,true));
                    clsName.push(res.classNameExtend);
                }
            }
            
        }
        return this._extendsImports;
    }

    private _extendClassName: string;
    public get extendClassName(): string
    {
        if(!this._extendClassName)
        {
            this._extendClassName = fgui.ExtendType.GetExtendClass(this.extention);
        }
        return this._extendClassName;
    }
    public set extendClassName(name: string)
    {
        this._extendClassName = name;
    }

    public get packageName(): string 
    {
        return this.package.name;
    }

    public get nameSpace(): string 
    {
        return this.package.nameSpace;
    }

    public get classNameFGUI(): string 
    {
        return this.extendClassName;
    }

    public get classNameExtend(): string 
    {
        return this.className;
    }
    public get classNameStruct(): string 
    {
        return this.className + "Struct";
    }

    // 类全名,包含命名空间
    public get classNameFull(): string
    {
        return this.nameSpace + "." + this.classNameExtend;
    }
}