"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FairyManager_1 = __importDefault(require("./reader/FairyManager"));
class Main {
    constructor() {
        this.Init();
    }
    Init() {
        // let packagesPaths = FS.GetDirectories(Config.FGUI_ASSET_PATH);
        // let list = FileSystem.ReaddirSync(packagesPaths[0])
        // console.log(list)
        // CodeGenerator.Launch(packagesPaths);
        // PackageInfoMgr.Instance.Init(packagesPaths);
        // let file = readFileSync('./test/ModelSection/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./test/ModelSection/DetailsPanel.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./bin/assets/ModuleLogin/package.xml',{encoding: 'utf-8'})
        // let file = readFileSync('./bin/assets/CommonBase/Button/CommonButton.xml',{encoding: 'utf-8'})
        // Parser.ParseXml(file);
        // Parser.ParseXml(file);
        let mgr = new FairyManager_1.default();
        mgr.LoadProject('./bin');
        mgr.ExportTS();
        // let src = "./bin/assets/Component~NCode/GoButton.xml";
        // let exist = FS.Exists(src);
        // console.log(exist)
    }
}
exports.default = Main;
new Main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEseUVBQWlEO0FBRWpELE1BQXFCLElBQUk7SUFDckI7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUk7UUFDQSxpRUFBaUU7UUFDakUsc0RBQXNEO1FBQ3RELG9CQUFvQjtRQUNwQix1Q0FBdUM7UUFDdkMsK0NBQStDO1FBQy9DLGlGQUFpRjtRQUNqRixzRkFBc0Y7UUFDdEYsc0ZBQXNGO1FBQ3RGLGlHQUFpRztRQUNqRyx5QkFBeUI7UUFDekIseUJBQXlCO1FBRXpCLElBQUksR0FBRyxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWYseURBQXlEO1FBQ3pELDhCQUE4QjtRQUM5QixxQkFBcUI7SUFDekIsQ0FBQztDQUdKO0FBNUJELHVCQTRCQztBQUVELElBQUksSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRlMgZnJvbSAnLi9GUyc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi9Db25maWcnO1xyXG5pbXBvcnQgQ29kZUdlbmVyYXRvciBmcm9tICcuL0dlbmVyYXRvci9Db2RlR2VuZXJhdG9yJztcclxuaW1wb3J0IFBhY2thZ2VJbmZvTWdyIGZyb20gJy4vR2VuZXJhdG9yL1BhY2thZ2VJbmZvTWdyJztcclxuaW1wb3J0IFBhcnNlciBmcm9tICcuL0dlbmVyYXRvci9QYXJzZXInO1xyXG5pbXBvcnQge3JlYWRGaWxlU3luY30gZnJvbSAnZnMnO1xyXG5pbXBvcnQgRmFpcnlNYW5hZ2VyIGZyb20gJy4vcmVhZGVyL0ZhaXJ5TWFuYWdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgLy8gbGV0IHBhY2thZ2VzUGF0aHMgPSBGUy5HZXREaXJlY3RvcmllcyhDb25maWcuRkdVSV9BU1NFVF9QQVRIKTtcclxuICAgICAgICAvLyBsZXQgbGlzdCA9IEZpbGVTeXN0ZW0uUmVhZGRpclN5bmMocGFja2FnZXNQYXRoc1swXSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgICAgIC8vIENvZGVHZW5lcmF0b3IuTGF1bmNoKHBhY2thZ2VzUGF0aHMpO1xyXG4gICAgICAgIC8vIFBhY2thZ2VJbmZvTWdyLkluc3RhbmNlLkluaXQocGFja2FnZXNQYXRocyk7XHJcbiAgICAgICAgLy8gbGV0IGZpbGUgPSByZWFkRmlsZVN5bmMoJy4vdGVzdC9Nb2RlbFNlY3Rpb24vcGFja2FnZS54bWwnLHtlbmNvZGluZzogJ3V0Zi04J30pXHJcbiAgICAgICAgLy8gbGV0IGZpbGUgPSByZWFkRmlsZVN5bmMoJy4vdGVzdC9Nb2RlbFNlY3Rpb24vRGV0YWlsc1BhbmVsLnhtbCcse2VuY29kaW5nOiAndXRmLTgnfSlcclxuICAgICAgICAvLyBsZXQgZmlsZSA9IHJlYWRGaWxlU3luYygnLi9iaW4vYXNzZXRzL01vZHVsZUxvZ2luL3BhY2thZ2UueG1sJyx7ZW5jb2Rpbmc6ICd1dGYtOCd9KVxyXG4gICAgICAgIC8vIGxldCBmaWxlID0gcmVhZEZpbGVTeW5jKCcuL2Jpbi9hc3NldHMvQ29tbW9uQmFzZS9CdXR0b24vQ29tbW9uQnV0dG9uLnhtbCcse2VuY29kaW5nOiAndXRmLTgnfSlcclxuICAgICAgICAvLyBQYXJzZXIuUGFyc2VYbWwoZmlsZSk7XHJcbiAgICAgICAgLy8gUGFyc2VyLlBhcnNlWG1sKGZpbGUpO1xyXG5cclxuICAgICAgICBsZXQgbWdyID0gbmV3IEZhaXJ5TWFuYWdlcigpO1xyXG4gICAgICAgIG1nci5Mb2FkUHJvamVjdCgnLi9iaW4nKTtcclxuICAgICAgICBtZ3IuRXhwb3J0VFMoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHNyYyA9IFwiLi9iaW4vYXNzZXRzL0NvbXBvbmVudH5OQ29kZS9Hb0J1dHRvbi54bWxcIjtcclxuICAgICAgICAvLyBsZXQgZXhpc3QgPSBGUy5FeGlzdHMoc3JjKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhleGlzdClcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxubmV3IE1haW4oKTsiXX0=