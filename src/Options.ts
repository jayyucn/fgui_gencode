export default class Options {
    codeMemberNamePrefix: string = "m_";
    codeIgnoreNoname: boolean = true; 
    codeIgnorIllegalClassName: boolean =   true;
    codeIgnorNoExported: boolean = true;
    codeExportDepend: boolean = true;
    codeNamespace: string = "fgui";
    codeUseOtherPkgType: boolean = false;
    codePath: string = "../_genCode";
    soundPackageName: string = "Sound";

    templateDir: string = "./template";

    ignorePathPrefix: string = "_";

    fguiFileExtension: string = "bin";
}