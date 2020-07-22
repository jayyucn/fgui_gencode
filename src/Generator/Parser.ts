import XmlParser2 from "fast-xml-parser";
// import XMLP from 'xml2js'
require('xml2js')
import He from 'he'
import XmlParser from 'xml2js'
import {IXmlFile} from './XmlFile';
import {WriteStream,writeSync,writeFile,writeFileSync} from 'fs';

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
        attrValueProcessor: (val,attrName) => He.decode(val,{isAttributeValue: true}),//default is a=>a
        tagValueProcessor: (val,tagName) => He.decode(val), //default is a=>a
        stopNodes: ["parse-me-as-string"]
    };

    static ParseXml2(xmlString: string) {
        let file: IXmlFile = XmlParser2.parse(xmlString,Parser.options)
        console.log(file);
    }

    static ParseXml(xmlPath: string, callback: {(err: Error, result: IXmlFile)})
    {
        let that = this;
        var xmlParser = new XmlParser.Parser();
        xmlParser.parseString(xmlPath,function(err,result)
        {
            let list = that.loadObj(result);
            callback(err,result);
            console.log(result);
            // picPreview.textInfo.nameCn = strings[0]._;
        });

    }

    static loadObj(obj: any)
    {
        let map = new Map<string, any>();
        if(!obj)
            return
        let keys = Object.keys(obj);
        for(const key of keys)
        {
            let child = obj[key];
            switch(typeof (child))
            {
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
        return map
    }
}