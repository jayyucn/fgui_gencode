export default class Options {
    codeMemberNamePrefix: string = "";
    codeIgnoreNoname: boolean = true; 
    codeIgnorIllegalClassName: boolean =   false;
    codeIgnorNoExported: boolean = true;
    codeExportDepend: boolean = true;
    codeNamespace: string = "fgui";
    codeUseOtherPkgType: boolean = true;
    codePath: string = "../_genCode";
    soundPackageName: string = "Sound";

    templateDir: string = "./template";
}