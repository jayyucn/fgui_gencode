"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
class Parser {
    static async ParseXml(xmlString) {
        return new Promise((resolve) => {
            let file = fast_xml_parser_1.default.parse(xmlString, Parser.options);
            console.log(file.packageDescription.resources);
            resolve(file);
        });
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
