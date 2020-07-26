"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
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
        if (os_1.default.platform() == "darwin") {
            mgr.LoadProject('/Users/jay/projects/client/arts_project/Game-FGUI');
            // mgr.LoadProject('./bin/');
        }
        else
            mgr.LoadProject('E:\\workspace\\JJSGDNF\\client\\arts_project\\Game-FGUI');
        mgr.ExportTS();
        // let src = "./bin/assets/Component~NCode/GoButton.xml";
        // let exist = FS.Exists(src);
        // console.log(exist)
    }
}
exports.default = Main;
new Main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLHlFQUFpRDtBQUVqRCxNQUFxQixJQUFJO0lBQ3JCO1FBRUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJO1FBQ0EsaUVBQWlFO1FBQ2pFLHNEQUFzRDtRQUN0RCxvQkFBb0I7UUFDcEIsdUNBQXVDO1FBQ3ZDLCtDQUErQztRQUMvQyxpRkFBaUY7UUFDakYsc0ZBQXNGO1FBQ3RGLHNGQUFzRjtRQUN0RixpR0FBaUc7UUFDakcseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUV6QixJQUFJLEdBQUcsR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztRQUM3QixJQUFJLFlBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxRQUFRLEVBQUU7WUFDM0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1lBQ3JFLDZCQUE2QjtTQUNoQzs7WUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFDL0UsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWYseURBQXlEO1FBQ3pELDhCQUE4QjtRQUM5QixxQkFBcUI7SUFDekIsQ0FBQztDQUdKO0FBakNELHVCQWlDQztBQUVELElBQUksSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT1MgZnJvbSAnb3MnO1xyXG5pbXBvcnQgRmFpcnlNYW5hZ2VyIGZyb20gJy4vcmVhZGVyL0ZhaXJ5TWFuYWdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIC8vIGxldCBwYWNrYWdlc1BhdGhzID0gRlMuR2V0RGlyZWN0b3JpZXMoQ29uZmlnLkZHVUlfQVNTRVRfUEFUSCk7XHJcbiAgICAgICAgLy8gbGV0IGxpc3QgPSBGaWxlU3lzdGVtLlJlYWRkaXJTeW5jKHBhY2thZ2VzUGF0aHNbMF0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdClcclxuICAgICAgICAvLyBDb2RlR2VuZXJhdG9yLkxhdW5jaChwYWNrYWdlc1BhdGhzKTtcclxuICAgICAgICAvLyBQYWNrYWdlSW5mb01nci5JbnN0YW5jZS5Jbml0KHBhY2thZ2VzUGF0aHMpO1xyXG4gICAgICAgIC8vIGxldCBmaWxlID0gcmVhZEZpbGVTeW5jKCcuL3Rlc3QvTW9kZWxTZWN0aW9uL3BhY2thZ2UueG1sJyx7ZW5jb2Rpbmc6ICd1dGYtOCd9KVxyXG4gICAgICAgIC8vIGxldCBmaWxlID0gcmVhZEZpbGVTeW5jKCcuL3Rlc3QvTW9kZWxTZWN0aW9uL0RldGFpbHNQYW5lbC54bWwnLHtlbmNvZGluZzogJ3V0Zi04J30pXHJcbiAgICAgICAgLy8gbGV0IGZpbGUgPSByZWFkRmlsZVN5bmMoJy4vYmluL2Fzc2V0cy9Nb2R1bGVMb2dpbi9wYWNrYWdlLnhtbCcse2VuY29kaW5nOiAndXRmLTgnfSlcclxuICAgICAgICAvLyBsZXQgZmlsZSA9IHJlYWRGaWxlU3luYygnLi9iaW4vYXNzZXRzL0NvbW1vbkJhc2UvQnV0dG9uL0NvbW1vbkJ1dHRvbi54bWwnLHtlbmNvZGluZzogJ3V0Zi04J30pXHJcbiAgICAgICAgLy8gUGFyc2VyLlBhcnNlWG1sKGZpbGUpO1xyXG4gICAgICAgIC8vIFBhcnNlci5QYXJzZVhtbChmaWxlKTtcclxuXHJcbiAgICAgICAgbGV0IG1nciA9IG5ldyBGYWlyeU1hbmFnZXIoKTtcclxuICAgICAgICBpZiAoT1MucGxhdGZvcm0oKSA9PSBcImRhcndpblwiKSB7XHJcbiAgICAgICAgICAgIG1nci5Mb2FkUHJvamVjdCgnL1VzZXJzL2pheS9wcm9qZWN0cy9jbGllbnQvYXJ0c19wcm9qZWN0L0dhbWUtRkdVSScpO1xyXG4gICAgICAgICAgICAvLyBtZ3IuTG9hZFByb2plY3QoJy4vYmluLycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBtZ3IuTG9hZFByb2plY3QoJ0U6XFxcXHdvcmtzcGFjZVxcXFxKSlNHRE5GXFxcXGNsaWVudFxcXFxhcnRzX3Byb2plY3RcXFxcR2FtZS1GR1VJJyk7XHJcbiAgICAgICAgbWdyLkV4cG9ydFRTKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCBzcmMgPSBcIi4vYmluL2Fzc2V0cy9Db21wb25lbnR+TkNvZGUvR29CdXR0b24ueG1sXCI7XHJcbiAgICAgICAgLy8gbGV0IGV4aXN0ID0gRlMuRXhpc3RzKHNyYyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXhpc3QpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubmV3IE1haW4oKTsiXX0=