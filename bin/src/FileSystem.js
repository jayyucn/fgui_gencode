"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Config_1 = __importDefault(require("./Config"));
class FileSystem {
    static ReaddirSync(url, includeFileTypes = [], excludeFileTypes = []) {
        let list = [];
        let itemList = fs_1.readdirSync(url);
        for (let item of itemList) {
            let itemPath = url + '/' + item;
            let stat = fs_1.statSync(itemPath);
            if (stat.isDirectory()) {
                if (!item.startsWith(Config_1.default.IGNORE_PATH_PREFIX)) {
                    let newList = FileSystem.ReaddirSync(itemPath, includeFileTypes, excludeFileTypes);
                    list = list.concat(newList);
                }
            }
            else if (stat.isFile()) {
                for (let type of Config_1.default.INCLUDE_FILE_TYPES) {
                    if (item.endsWith('.' + type)) {
                        list.push(itemPath);
                        break;
                    }
                }
            }
        }
        return list;
    }
    static GetPackagePaths(assetPath) {
        let list = [];
        let itemList = fs_1.readdirSync(assetPath);
        for (let packageName of itemList) {
            let itemPath = assetPath + '/' + packageName;
            let stat = fs_1.statSync(itemPath);
            if (stat.isDirectory() && !packageName.startsWith(Config_1.default.IGNORE_PATH_PREFIX)) {
                list.push(itemPath);
            }
        }
        return list;
    }
}
exports.default = FileSystem;
