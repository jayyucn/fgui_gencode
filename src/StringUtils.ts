export default class StringUtils {
    /** 首字母大写 */
    public static FirstUpper(str: string): string
    {
        return str[0].toUpperCase() + str.substr(1);
    }
}