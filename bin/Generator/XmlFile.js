"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeName = void 0;
var NodeName;
(function (NodeName) {
    NodeName["controller"] = "controller";
    NodeName["transition"] = "transition";
    NodeName["displayList"] = "displayList";
    // 图片
    NodeName["image"] = "image";
    // 文本
    NodeName["text"] = "text";
    // 富文本
    NodeName["richtext"] = "richtext";
    // 图形
    NodeName["graph"] = "graph";
    // 组
    NodeName["group"] = "group";
    // 装载器
    NodeName["loader"] = "loader";
    // 列表
    NodeName["list"] = "list";
    // 序列帧动画
    NodeName["movieclip"] = "movieclip";
    // 组件
    NodeName["component"] = "component";
})(NodeName = exports.NodeName || (exports.NodeName = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWG1sRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HZW5lcmF0b3IvWG1sRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFpRUEsSUFBWSxRQXNCWDtBQXRCRCxXQUFZLFFBQVE7SUFDaEIscUNBQXlCLENBQUE7SUFDekIscUNBQXlCLENBQUE7SUFDekIsdUNBQTJCLENBQUE7SUFDM0IsS0FBSztJQUNMLDJCQUFlLENBQUE7SUFDZixLQUFLO0lBQ0wseUJBQWEsQ0FBQTtJQUNiLE1BQU07SUFDTixpQ0FBcUIsQ0FBQTtJQUNyQixLQUFLO0lBQ0wsMkJBQWUsQ0FBQTtJQUNmLElBQUk7SUFDSiwyQkFBZSxDQUFBO0lBQ2YsTUFBTTtJQUNOLDZCQUFpQixDQUFBO0lBQ2pCLEtBQUs7SUFDTCx5QkFBYSxDQUFBO0lBQ2IsUUFBUTtJQUNSLG1DQUF1QixDQUFBO0lBQ3ZCLEtBQUs7SUFDTCxtQ0FBdUIsQ0FBQTtBQUMzQixDQUFDLEVBdEJXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBc0JuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvdXJjZUNvbXBvbmVudCBmcm9tIFwiLi4vZGF0YS9SZXNvdXJjZUNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWG1sRG9jdW1lbnQge1xyXG4gICAgcGFja2FnZURlc2NyaXB0aW9uOiBJcGFja2FnZURlc2NyaXB0aW9uO1xyXG4gICAgY29tcG9uZW50OiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElwYWNrYWdlRGVzY3JpcHRpb24ge1xyXG4gICAgcmVzb3VyY2VzOiBJcmVzb3VyY2VzO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHB1Ymxpc2g/OklQdWJsaXNoO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVB1Ymxpc2gge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZ2VuQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElyZXNvdXJjZXMge1xyXG4gICAgaW1hZ2U6IElOb2RlIHwgSU5vZGVbXTtcclxuICAgIGNvbXBvbmVudDogSU5vZGUgfCBJTm9kZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOb2Rle1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIGV4cG9ydGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQge1xyXG4gICAgdHJhbnNpdGlvbjogYW55O1xyXG4gICAgY29udHJvbGxlcj86IGFueTtcclxuICAgIGV4dGVudGlvbjogc3RyaW5nO1xyXG4gICAgZGlzcGxheUxpc3Q6IElEaXNwbGF5TGlzdFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDTm9kZSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5TGlzdCB7XHJcbiAgICBpbWFnZTogSUltYWdlfElJbWFnZVtdXHJcbiAgICBncm91cD86IGFueSB8IGFueVtdO1xyXG4gICAgY29tcG9uZW50OiBJQ29tcG9uZW50IHwgSUNvbXBvbmVudFtdO1xyXG4gICAgdGV4dDogYW55XHJcbiAgICB0cmFuc2l0aW9uPzogYW55XHJcbiAgICBsb2FkZXI/OiBhbnkgfCBhbnlbXVxyXG4gICAgbGlzdD86IGFueSB8IGFueVtdXHJcbiAgICBtb3ZpZWNsaXA/OiBhbnkgfCBhbnlbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZSB7XHJcbiAgICBpZDogc3RyaW5nOy8vICduNV94eTM4JyxcclxuICAgIG5hbWU6IHN0cmluZzsvLyduNScsXHJcbiAgICBzcmM6IHN0cmluZzsvLyc3bTl5MCcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nOy8vICdfaW1hZ2VzX3VpL+aMiemSrjEucG5nJyxcclxuICAgIHBrZz86IHN0cmluZzsvLyd3dm51Ymd3cycsXHJcbiAgICB4eT86IHN0cmluZzsvLycwLDAnLFxyXG4gICAgZ3JvdXA/OiBzdHJpbmc7Ly8nbjE5X3ljeXYnXHJcbiAgICBzaXplPzogc3RyaW5nOy8vJzE4NCw1MydcclxuICAgIGFscGhhPzogc3RyaW5nOy8vMC44XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE5vZGVOYW1lIHtcclxuICAgIGNvbnRyb2xsZXIgPSBcImNvbnRyb2xsZXJcIixcclxuICAgIHRyYW5zaXRpb24gPSBcInRyYW5zaXRpb25cIixcclxuICAgIGRpc3BsYXlMaXN0ID0gXCJkaXNwbGF5TGlzdFwiLFxyXG4gICAgLy8g5Zu+54mHXHJcbiAgICBpbWFnZSA9IFwiaW1hZ2VcIixcclxuICAgIC8vIOaWh+acrFxyXG4gICAgdGV4dCA9IFwidGV4dFwiLFxyXG4gICAgLy8g5a+M5paH5pysXHJcbiAgICByaWNodGV4dCA9IFwicmljaHRleHRcIixcclxuICAgIC8vIOWbvuW9olxyXG4gICAgZ3JhcGggPSBcImdyYXBoXCIsXHJcbiAgICAvLyDnu4RcclxuICAgIGdyb3VwID0gXCJncm91cFwiLFxyXG4gICAgLy8g6KOF6L295ZmoXHJcbiAgICBsb2FkZXIgPSBcImxvYWRlclwiLFxyXG4gICAgLy8g5YiX6KGoXHJcbiAgICBsaXN0ID0gXCJsaXN0XCIsXHJcbiAgICAvLyDluo/liJfluKfliqjnlLtcclxuICAgIG1vdmllY2xpcCA9IFwibW92aWVjbGlwXCIsXHJcbiAgICAvLyDnu4Tku7ZcclxuICAgIGNvbXBvbmVudCA9IFwiY29tcG9uZW50XCIsXHJcbn1cclxuIl19