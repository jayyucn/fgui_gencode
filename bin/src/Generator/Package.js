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
const FileSystem_1 = __importDefault(require("../FileSystem"));
const Config_1 = __importDefault(require("../Config"));
const Parser_1 = __importDefault(require("./Parser"));
class Package {
    constructor(path) {
        this.packageId = "";
        this.packageName = "";
        this.genCode = false;
        this.xmlList = [];
        this.xmlList = FileSystem_1.default.ReaddirSync(path, Config_1.default.INCLUDE_FILE_TYPES);
        //parse file list
        this.load();
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let xmlPath of this.xmlList) {
                console.log('xml path', xmlPath);
                if (xmlPath.endsWith('.package.xml')) {
                    let file = yield Parser_1.default.ParseXml(xmlPath);
                    let publish = file.packageDescription.publish;
                    this.packageId = file.packageDescription.id;
                    if (publish) {
                        this.packageName = publish.name;
                        this.genCode = Boolean(publish.genCode);
                    }
                    let nodeList = file.packageDescription.resources;
                    return;
                }
            }
        });
    }
    GetDependPackages() {
    }
}
exports.default = Package;
