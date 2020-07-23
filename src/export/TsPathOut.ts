import Setting from "../Setting";

export default class TsPathOut
{
    public static get ComponentStruct(): string
    {
        return Setting.Options.codePath + "/TS/Generates/{0}/{1}Struct.ts";
    }

    public static get ComponentExtend(): string
    {
        return Setting.Options.codePath + "/TS/Extends/{0}/{1}.ts";
    }

    public static get Binder(): string
    {
        return Setting.Options.codePath + "/TS/Generates/{0}/{1}.ts";
    }

    public static get GuiPackageNames(): string
    {
        return Setting.Options.codePath + "/TS/Generates/GuiPackageNames.ts";
    }

    public static get GuiBinderList(): string
    {
        return Setting.Options.codePath + "/TS/Generates/GuiBinderList.ts";
    }

    public static get SoundKey(): string
    {
        return Setting.Options.codePath + "/TS/Generates/SoundKey.ts";
    }
}