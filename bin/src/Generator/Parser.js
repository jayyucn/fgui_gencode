"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
// import XMLP from 'xml2js'
require('xml2js');
const he_1 = __importDefault(require("he"));
class Parser {
    static ParseXml(xmlString) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                let file = fast_xml_parser_1.default.parse(xmlString, Parser.options);
                console.log(file);
                resolve(file);
            });
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
    attrValueProcessor: (val, attrName) => he_1.default.decode(val, { isAttributeValue: true }),
    tagValueProcessor: (val, tagName) => he_1.default.decode(val),
    stopNodes: ["parse-me-as-string"]
};
