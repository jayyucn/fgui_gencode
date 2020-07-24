"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
class Parser {
    static ParseXml(xmlString) {
        let file = fast_xml_parser_1.default.parse(xmlString, Parser.options);
        // console.log('parseXml-> file = ', file)
        return file;
    }
}
exports.default = Parser;
Parser.options = {
    attributeNamePrefix: "",
    // attrNodeName: "attr", //default is 'false'
    // textNodeName: "#text",
    ignoreAttributes: false,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata",
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false,
    // attrValueProcessor: (val,attrName) => He.decode(val,{isAttributeValue: true}),//default is a=>a
    // tagValueProcessor: (val,tagName) => He.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dlbmVyYXRvci9QYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRUFBeUM7QUFHekMsTUFBcUIsTUFBTTtJQXFCdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFpQjtRQUN6QixJQUFJLElBQUksR0FBZ0IseUJBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSwwQ0FBMEM7UUFDMUMsT0FBTyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7QUF6QkwseUJBNkJDO0FBM0JVLGNBQU8sR0FBRztJQUNiLG1CQUFtQixFQUFFLEVBQUU7SUFDdkIsNkNBQTZDO0lBQzdDLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLHNCQUFzQixFQUFFLEtBQUs7SUFDN0IsY0FBYyxFQUFFLElBQUk7SUFDcEIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixVQUFVLEVBQUUsSUFBSTtJQUNoQixZQUFZLEVBQUUsU0FBUztJQUN2QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsa0dBQWtHO0lBQ2xHLHdFQUF3RTtJQUN4RSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztDQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFhtbFBhcnNlcjIgZnJvbSBcImZhc3QteG1sLXBhcnNlclwiO1xyXG5pbXBvcnQge1htbERvY3VtZW50fSBmcm9tICcuL1htbEZpbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyXHJcbntcclxuICAgIHN0YXRpYyBvcHRpb25zID0ge1xyXG4gICAgICAgIGF0dHJpYnV0ZU5hbWVQcmVmaXg6IFwiXCIsXHJcbiAgICAgICAgLy8gYXR0ck5vZGVOYW1lOiBcImF0dHJcIiwgLy9kZWZhdWx0IGlzICdmYWxzZSdcclxuICAgICAgICAvLyB0ZXh0Tm9kZU5hbWU6IFwiI3RleHRcIixcclxuICAgICAgICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcclxuICAgICAgICBpZ25vcmVOYW1lU3BhY2U6IGZhbHNlLFxyXG4gICAgICAgIGFsbG93Qm9vbGVhbkF0dHJpYnV0ZXM6IGZhbHNlLFxyXG4gICAgICAgIHBhcnNlTm9kZVZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHBhcnNlQXR0cmlidXRlVmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHRyaW1WYWx1ZXM6IHRydWUsXHJcbiAgICAgICAgY2RhdGFUYWdOYW1lOiBcIl9fY2RhdGFcIiwgLy9kZWZhdWx0IGlzICdmYWxzZSdcclxuICAgICAgICBjZGF0YVBvc2l0aW9uQ2hhcjogXCJcXFxcY1wiLFxyXG4gICAgICAgIHBhcnNlVHJ1ZU51bWJlck9ubHk6IGZhbHNlLFxyXG4gICAgICAgIGFycmF5TW9kZTogZmFsc2UsIC8vXCJzdHJpY3RcIlxyXG4gICAgICAgIC8vIGF0dHJWYWx1ZVByb2Nlc3NvcjogKHZhbCxhdHRyTmFtZSkgPT4gSGUuZGVjb2RlKHZhbCx7aXNBdHRyaWJ1dGVWYWx1ZTogdHJ1ZX0pLC8vZGVmYXVsdCBpcyBhPT5hXHJcbiAgICAgICAgLy8gdGFnVmFsdWVQcm9jZXNzb3I6ICh2YWwsdGFnTmFtZSkgPT4gSGUuZGVjb2RlKHZhbCksIC8vZGVmYXVsdCBpcyBhPT5hXHJcbiAgICAgICAgc3RvcE5vZGVzOiBbXCJwYXJzZS1tZS1hcy1zdHJpbmdcIl1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIFBhcnNlWG1sKHhtbFN0cmluZzogc3RyaW5nKTogWG1sRG9jdW1lbnQge1xyXG4gICAgICAgICAgICBsZXQgZmlsZTogWG1sRG9jdW1lbnQgPSBYbWxQYXJzZXIyLnBhcnNlKHhtbFN0cmluZyxQYXJzZXIub3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXJzZVhtbC0+IGZpbGUgPSAnLCBmaWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICBcclxufSJdfQ==