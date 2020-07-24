"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PackageInfoMgr {
    constructor() {
        this.packages = [];
    }
    static get Instance() {
        if (!this._Instance)
            this._Instance = new PackageInfoMgr();
        return this._Instance;
    }
    Init(packagesPaths) {
        for (let path of packagesPaths) {
            // let pkg = new PackageReader(path);
            // this.packages.push(pkg);
        }
    }
}
exports.default = PackageInfoMgr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFja2FnZUluZm9NZ3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR2VuZXJhdG9yL1BhY2thZ2VJbmZvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBcUIsY0FBYztJQUFuQztRQVNJLGFBQVEsR0FBb0IsRUFBRSxDQUFDO0lBV25DLENBQUM7SUFqQkcsTUFBTSxLQUFLLFFBQVE7UUFDZixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFLTSxJQUFJLENBQUMsYUFBdUI7UUFDL0IsS0FBSSxJQUFJLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDM0IscUNBQXFDO1lBQ3JDLDJCQUEyQjtTQUM5QjtJQUNMLENBQUM7Q0FHSjtBQXBCRCxpQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFja2FnZVJlYWRlciBmcm9tICcuLi9yZWFkZXIvUGFja2FnZVJlYWRlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2thZ2VJbmZvTWdyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfSW5zdGFuY2U6IFBhY2thZ2VJbmZvTWdyO1xyXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZighdGhpcy5fSW5zdGFuY2UpXHJcbiAgICAgICAgICAgIHRoaXMuX0luc3RhbmNlID0gbmV3IFBhY2thZ2VJbmZvTWdyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwYWNrYWdlczogUGFja2FnZVJlYWRlcltdID0gW107XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdChwYWNrYWdlc1BhdGhzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGZvcihsZXQgcGF0aCBvZiBwYWNrYWdlc1BhdGhzKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBwa2cgPSBuZXcgUGFja2FnZVJlYWRlcihwYXRoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wYWNrYWdlcy5wdXNoKHBrZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=