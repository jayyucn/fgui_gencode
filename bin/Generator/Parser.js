"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
class Parser {
    static ParseXml(xmlString) {
        let file = fast_xml_parser_1.default.parse(xmlString, Parser.options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dlbmVyYXRvci9QYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRUFBeUM7QUFHekMsTUFBcUIsTUFBTTtJQXFCdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFpQjtRQUN6QixJQUFJLElBQUksR0FBZ0IseUJBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsRSxPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDOztBQXhCTCx5QkE0QkM7QUExQlUsY0FBTyxHQUFHO0lBQ2IsbUJBQW1CLEVBQUUsRUFBRTtJQUN2Qiw2Q0FBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsc0JBQXNCLEVBQUUsS0FBSztJQUM3QixjQUFjLEVBQUUsSUFBSTtJQUNwQixtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixTQUFTLEVBQUUsS0FBSztJQUNoQixrR0FBa0c7SUFDbEcsd0VBQXdFO0lBQ3hFLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0NBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWG1sUGFyc2VyMiBmcm9tIFwiZmFzdC14bWwtcGFyc2VyXCI7XHJcbmltcG9ydCB7WG1sRG9jdW1lbnR9IGZyb20gJy4vWG1sRmlsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXJcclxue1xyXG4gICAgc3RhdGljIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYXR0cmlidXRlTmFtZVByZWZpeDogXCJcIixcclxuICAgICAgICAvLyBhdHRyTm9kZU5hbWU6IFwiYXR0clwiLCAvL2RlZmF1bHQgaXMgJ2ZhbHNlJ1xyXG4gICAgICAgIC8vIHRleHROb2RlTmFtZTogXCIjdGV4dFwiLFxyXG4gICAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IGZhbHNlLFxyXG4gICAgICAgIGlnbm9yZU5hbWVTcGFjZTogZmFsc2UsXHJcbiAgICAgICAgYWxsb3dCb29sZWFuQXR0cmlidXRlczogZmFsc2UsXHJcbiAgICAgICAgcGFyc2VOb2RlVmFsdWU6IHRydWUsXHJcbiAgICAgICAgcGFyc2VBdHRyaWJ1dGVWYWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdHJpbVZhbHVlczogdHJ1ZSxcclxuICAgICAgICBjZGF0YVRhZ05hbWU6IFwiX19jZGF0YVwiLCAvL2RlZmF1bHQgaXMgJ2ZhbHNlJ1xyXG4gICAgICAgIGNkYXRhUG9zaXRpb25DaGFyOiBcIlxcXFxjXCIsXHJcbiAgICAgICAgcGFyc2VUcnVlTnVtYmVyT25seTogZmFsc2UsXHJcbiAgICAgICAgYXJyYXlNb2RlOiBmYWxzZSwgLy9cInN0cmljdFwiXHJcbiAgICAgICAgLy8gYXR0clZhbHVlUHJvY2Vzc29yOiAodmFsLGF0dHJOYW1lKSA9PiBIZS5kZWNvZGUodmFsLHtpc0F0dHJpYnV0ZVZhbHVlOiB0cnVlfSksLy9kZWZhdWx0IGlzIGE9PmFcclxuICAgICAgICAvLyB0YWdWYWx1ZVByb2Nlc3NvcjogKHZhbCx0YWdOYW1lKSA9PiBIZS5kZWNvZGUodmFsKSwgLy9kZWZhdWx0IGlzIGE9PmFcclxuICAgICAgICBzdG9wTm9kZXM6IFtcInBhcnNlLW1lLWFzLXN0cmluZ1wiXVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgUGFyc2VYbWwoeG1sU3RyaW5nOiBzdHJpbmcpOiBYbWxEb2N1bWVudCB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlOiBYbWxEb2N1bWVudCA9IFhtbFBhcnNlcjIucGFyc2UoeG1sU3RyaW5nLFBhcnNlci5vcHRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICBcclxufSJdfQ==