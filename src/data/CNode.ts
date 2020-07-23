import Setting from "../Setting";
import ResourceComponent from "./ResourceComponent";
import {fgui} from "./FguiComponentType";

export default class CNode {

    constructor(name: string, type: string, pkg: string = "", src: string = "") {
        this.name = name;
        this.type = type;
    }
    
    public name: string = "";
    public type: string = "";

    public pkg: string = "";
    public src: string = "";

    private _fieldName: string = "";
    public get fieldName(): string {
        if(!this._fieldName)
            this._fieldName = Setting.Options.codeMemberNamePrefix + name;
        return this._fieldName;
    }

    static IgnoreRegex: RegExp = new RegExp(/^n[0-9]+$/);

    public get isIgnore(): boolean {
        if(Setting.Options.codeIgnoreNoname) {
            if(this.name.startsWith('_')) 
                return true;
            return CNode.IgnoreRegex.test(this.name);
        }
        return false;
    }
}

export class ComponentNode extends CNode {
    public parent: ResourceComponent;
    public resourceComponent: ResourceComponent;

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
                return resourceComponent.extendClassName;
            }
        }
    }
}