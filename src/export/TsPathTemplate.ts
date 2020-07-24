import Setting from "../Setting";

export default class TsPathTemplate
{
    public static get ComponentStruct(): string
    {
        return Setting.Options.templateDir + "/TS/ComponentStruct.txt";
    }

    public static get ComponentExtend(): string
    {
        return Setting.Options.templateDir + "/TS/ComponentExtend.txt";
    }

    public static get Binder(): string
    {
        return Setting.Options.templateDir + "/TS/Binder.txt";
    }

    public static get GuiPackageNames(): string
    {
        return Setting.Options.templateDir + "/TS/GuiPackageNames.txt";
    }

    public static get GuiBinderList(): string
    {
        return Setting.Options.templateDir + "/TS/GuiBinderList.txt";
    }


    public static get SoundKey(): string
    {
        return Setting.Options.templateDir + "/TS/SoundKey.txt";
    }
}