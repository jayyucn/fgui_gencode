"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
// import XMLP from 'xml2js'
require('xml2js');
const he_1 = __importDefault(require("he"));
const xml2js_1 = __importDefault(require("xml2js"));
class Parser {
    static ParseXml2(xmlString) {
        let file = fast_xml_parser_1.default.parse(xmlString, Parser.options);
        console.log(file);
    }
    static ParseXml(xmlPath) {
        let that = this;
        var xmlParser = new xml2js_1.default.Parser();
        xmlParser.parseString(xmlPath, function (err, result) {
            let list = that.loadObj(result);
            console.log(result);
            // picPreview.textInfo.nameCn = strings[0]._;
        });
    }
    static loadObj(obj) {
        let map = new Map();
        if (!obj)
            return;
        let keys = Object.keys(obj);
        for (const key of keys) {
            let child = obj[key];
            switch (typeof (child)) {
                case 'object':
                    let tmpList = this.loadObj(child);
                    map.set(key, tmpList);
                    break;
                default:
                    // console.log(child);
                    map.set(key, child);
                    break;
            }
        }
        return map;
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
    attrValueProcessor: (val, attrName) => he_1.default.decode(val, { isAttributeValue: true }),
    tagValueProcessor: (val, tagName) => he_1.default.decode(val),
    stopNodes: ["parse-me-as-string"]
};
