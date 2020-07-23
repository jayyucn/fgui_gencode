export module fgui {
    export class NodeName
    {
        static readonly controller = "controller";
        static readonly transition = "transition";
        static readonly displayList = "displayList";
        static readonly image = "image";
        static readonly text = "text";
        static readonly richtext = "richtext";
        static readonly graph = "graph";
        static readonly group = "group";
        static readonly loader = "loader";
        static readonly list = "list";
        static readonly movieclip = "movieclip";
        static readonly component = "component";
    }

    export class ExtendType
    {
        // 按钮
        public static readonly  Button = "Button";
        // 下拉框
        public static readonly  ComboBox = "ComboBox";
        // 标签
        public static readonly  Label = "Label";
        // 进度条
        public static readonly  ProgressBar = "ProgressBar";
        // 滚动条
        public static readonly  ScrollBar = "ScrollBar";
        // 滑动条
        public static readonly  Slider = "Slider";
        // 组件
        public static readonly  Component = "Component";

        public static GetExtendClass(name: string)
        {
            let cls: string = CommonName.GComponent;
            switch(name)
            {
                case ExtendType.Button:
                    cls = CommonName.GButton;
                    break;
                case ExtendType.ComboBox:
                    cls = CommonName.GComboBox;
                    break;
                case ExtendType.Label:
                    cls = CommonName.GLabel;
                    break;
                case ExtendType.ProgressBar:
                    cls = CommonName.GProgressBar;
                    break;
                case ExtendType.ScrollBar:
                    cls = CommonName.GScrollBar;
                    break;
                case ExtendType.Slider:
                    cls = CommonName.GSlider;
                    break;
            }
            return cls;
        }
    }

    export class CommonName
    {
        // 对象
        public static readonly GObject: string = "fairygui.GObject";
        // 组件
        public static readonly GComponent: string = "fairygui.GComponent";
        // 控制器
        public static readonly Controller: string = "fairygui.Controller";
        // 动效
        public static readonly Transition: string = "fairygui.Transition";
        // 图片
        public static readonly GImage: string = "fairygui.GImage";
        // 文本
        public static readonly GTextField: string = "fairygui.GTextField";
        // 文本输入
        public static readonly GTextInput: string = "fairygui.GTextInput";
        // 富文本
        public static readonly GRichTextField: string = "fairygui.GRichTextField";
        // 图形
        public static readonly GGraph: string = "fairygui.GGraph";
        // 组
        public static readonly GGroup: string = "fairygui.GGroup";
        // 装载器
        public static readonly GLoader: string = "fairygui.GLoader";
        // 列表
        public static readonly GList: string = "fairygui.GList";
        // 序列帧动画
        public static readonly GMovieClip: string = "fairygui.GMovieClip";
        // 按钮
        public static readonly GButton: string = "fairygui.GButton";
        // 下拉框
        public static readonly GComboBox: string = "fairygui.GComboBox";
        // 标签
        public static readonly GLabel: string = "fairygui.GLabel";
        // 进度条
        public static readonly GProgressBar: string = "fairygui.GProgressBar";
        // 滚动条
        public static readonly GScrollBar: string = "fairygui.GScrollBar";
        // 滑动条
        public static readonly GSlider: string = "fairygui.GSlider";
    }

    export class ButtonType
    {
        // 普通
        public static readonly Normal: string = "";
        // 多选
        public static readonly Check: string = "Check";
        // 单选
        public static readonly Radio: string = "Radio";
    }
    export class TextType
    {
        // 普通
        public static readonly Normal: string = "Radio";
        // 输入
        public static readonly Input: string = "input";
    }

}