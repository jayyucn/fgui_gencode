import {parse as Parse} from "fast-xml-parser";
import {XmlDocument} from './XmlFile';

export default class Parser
{
    static options = {
        attributeNamePrefix: "",
        // attrNodeName: "attr", //default is 'false'
        // textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: false, //"strict"
        // attrValueProcessor: (val,attrName) => He.decode(val,{isAttributeValue: true}),//default is a=>a
        // tagValueProcessor: (val,tagName) => He.decode(val), //default is a=>a
        stopNodes: ["parse-me-as-string"]
    };

    static ParseXml(xmlString: string): XmlDocument {
            let file: XmlDocument = Parse(xmlString,Parser.options);
            // console.log('parseXml-> file = ', file)
            return file;
    }


   
}