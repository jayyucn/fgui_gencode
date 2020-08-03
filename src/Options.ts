export default class Options {
    codeMemberNamePrefix: string = "m_";
    codeIgnoreNoname: boolean = true; 
    codeIgnorIllegalClassName: boolean =   true;
    codeIgnorNoExported: boolean = true;
    codeExportDepend: boolean = true;
    codeNamespace: string = "fgui";
    codeUseOtherPkgType: boolean = false;
    codePath: string = "../../_gen/_genCode";
    codeTmp: string = "../../_gen/"
    codeOutPut: string = "";
    soundPackageName: string = "Sound";

    templateDir: string = "./template";

    ignorePathPrefix: string = "_";

    fguiFileExtension: string = "bin";
    fguiExportJsonPath: string = this.codePath +"/Json/fgui.json"
    constructor() {
        let dir = __dirname.replace(/\\/g, "/");
        dir = dir.substring(0, dir.lastIndexOf('/bundle'));
        this.templateDir = `${dir}/template`;
    }
}