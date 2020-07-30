import Setting from "../Setting";
import ResourceComponent from "./ResourceComponent";
import {fgui} from "./FguiComponentType";

export default class XmlNode {

    constructor(param: {
        name: string,
        type: string,
        pkg?: string, 
        src?: string
    }) {
        this.name = param.name;
        this.type = param.type;
        this.pkg = param.pkg?param.pkg:"";
        this.src = param.src?param.src:"";
    }
    
    public name: string = "";
    public type: string = "";

    public pkg: string = "";
    public src: string = "";

    private _fieldName: string = "";
    public get fieldName(): string {
        if(!this._fieldName)
            this._fieldName = Setting.Options.codeMemberNamePrefix + this.name;
        return this._fieldName;
    }

    static IgnoreRegex: RegExp = new RegExp(/^n[0-9]+$/);

    public get isIgnore(): boolean {
        if(!this.name)
            return true;
        if(Setting.Options.codeIgnoreNoname) {
            if(this.name.startsWith('_')) 
                return true;
            return XmlNode.IgnoreRegex.test(this.name);
        }
        return false;
    }
}

export class ComponentNode extends XmlNode{

    constructor(param:{
        name: string,
        type: string,
        pkg?: string, 
        src?: string
    }) {
        super(param);
    }

    
    public parent?: ResourceComponent;
    public resourceComponent?: ResourceComponent;

    public GetType(com: ResourceComponent) {
        let resourceComponent = this.resourceComponent;
        if(!resourceComponent) {
            return fgui.CommonName.GObject;
        }
        if(resourceComponent.isIgnore)
        {
            return resourceComponent.extendClassName;
        }

        if(com.package == resourceComponent.package)
        {
            return resourceComponent.classNameExtend;
        }
        else
        {
            if(Setting.Options.codeUseOtherPkgType)
            {
                return resourceComponent.classNameFull;
            }
            else
            {
                return resourceComponent.classNameExtend;
            }
        }
    }
}