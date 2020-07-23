var str = `<?xml version="1.0" encoding="utf-8"?>
<component size="1334,750" designImage="ui://vdfkrc9uwz4wv" designImageAlpha="0">
  <displayList>
    <image id="n18_ycyv" name="n18" src="fy392c" fileName="_images_ui/未标题-1_0004_70%.png" pkg="wvnubgws" xy="-145,0" size="1624,750" alpha="0.8">
      <relation target="" sidePair="width-width,height-height"/>
    </image>
    <image id="n16_ycyv" name="n16" src="wz4w5" fileName="_images_pic/地下城关卡选择界面2(切图)_0037_图层-1918.png" xy="13,1" size="396,747">
      <relation target="" sidePair="height-height,left-left"/>
    </image>
    <image id="n8_ycyv" name="n8" src="wz4w1c" fileName="_images_ui/地下城关卡选择界面2(切图)_0033_图层-1932.png" pkg="wxpfc60t" xy="36,152">
      <relation target="" sidePair="left-left,top-top"/>
    </image>
    <image id="n21_ycyv" name="n21" src="wz4w1a" fileName="_images_pic/地下城关卡选择界面2(切图)_0036_组-9.png" xy="430,605" size="904,145">
      <relation target="" sidePair="left-left,top-top,rightext-right"/>
    </image>
    <image id="n6_ycyv" name="n6" src="wz4w1c" fileName="_images_ui/地下城关卡选择界面2(切图)_0032_图层-1938.png" xy="442,114" group="n19_ycyv"/>
    <image id="n7_ycyv" name="n7" src="wz4w1b" fileName="_images_ui/地下城关卡选择界面2(切图)_0034_图层-1931.png" pkg="wxpfc60t" xy="442,152" group="n19_ycyv"/>
    <image id="n9_ycyv" name="n9" src="wz4w1d" fileName="_images_ui/地下城关卡选择界面2(切图)_0031_难度选择-.png" xy="446,121" group="n19_ycyv"/>
    <group id="n19_ycyv" name="n19" xy="442,114" size="387,40" advanced="true">
      <relation target="" sidePair="left-left,top-top"/>
    </group>
    <image id="n10_ycyv" name="n10" src="wz4w1c" fileName="_images_ui/地下城关卡选择界面2(切图)_0032_图层-1938.png" xy="442,396" group="n20_ycyv"/>
    <image id="n11_ycyv" name="n11" src="wz4w1b" fileName="_images_ui/地下城关卡选择界面2(切图)_0034_图层-1931.png" pkg="wxpfc60t" xy="442,434" group="n20_ycyv"/>
    <image id="n13_ycyv" name="n13" src="wz4w20" fileName="_images_ui/地下城关卡选择界面2(切图)_0007_可能掉落.png" xy="446,405" group="n20_ycyv"/>
    <group id="n20_ycyv" name="n20" xy="442,396" size="387,40" advanced="true">
      <relation target="" sidePair="left-left,top-top"/>
    </group>
    <list id="n0_wz4w" name="listLevel" xy="35,163" size="350,545" overflow="scroll" lineGap="16" defaultItem="ui://vdfkrc9ufy392j" align="center">
      <relation target="" sidePair="left-left,top-top,bottomext-bottom"/>
      <item controllers="State,1"/>
      <item controllers="State,2"/>
      <item/>
      <item/>
    </list>
    <list id="n5_ycyv" name="listDifficult" xy="448,162" size="857,217" layout="row" colGap="20" defaultItem="ui://vdfkrc9ufy392a">
      <relation target="" sidePair="left-left,top-top"/>
      <item/>
      <item/>
      <item/>
      <item/>
    </list>
    <list id="n14_ycyv" name="listDrop" xy="446,449" size="858,158" layout="row" overflow="scroll" colGap="6" defaultItem="ui://wvnubgwsrb732o">
      <relation target="" sidePair="left-left,top-top"/>
      <item/>
      <item/>
      <item/>
    </list>
    <loader id="n1_wz4w" name="imgName" xy="204,122" pivot="0.5,0.5" anchor="true" size="114,40" url="ui://vdfkrc9uwz4w1b" autoSize="true" clearOnPublish="true">
      <relation target="" sidePair="left-left,bottom-top"/>
    </loader>
    <loader id="n9_ycyv" name="imgMap" xy="-145,0" size="1624,750" url="ui://vdfkrc9uwz4w3" align="center" vAlign="middle" fill="scaleFree" clearOnPublish="true">
      <gearDisplay controller="TabCtrl" pages="0,1,6"/>
      <relation target="" sidePair="width-width,height-height,center-center,middle-middle"/>
    </loader>
    <component id="n4_wz4w" name="btnNext" src="wz4wf" fileName="Button/NextButton.xml" pkg="wxpfc60t" xy="127,653">
      <relation target="" sidePair="left-left,bottom-bottom"/>
    </component>
    <component id="n15_ycyv" name="btnStart" src="bp1a2" fileName="Button/CommonButton.xml" pkg="wxpfc60t" xy="1078,651">
      <relation target="" sidePair="left-left,top-top"/>
      <Button title="进入关卡"/>
    </component>
    <text id="n22_hy4v" name="n22" xy="453,617" size="103,22" fontSize="18" color="#ffffff" text="经验加成："/>
    <text id="n23_hy4v" name="n23" xy="629,617" size="103,22" fontSize="18" color="#ffffff" text="掉落加成："/>
    <text id="n24_hy4v" name="labExpAdd" xy="556,617" size="25,22" fontSize="18" color="#92ec51" autoClearText="true" text="0%"/>
    <text id="n25_hy4v" name="labDropAdd" xy="732,617" size="23,22" fontSize="18" color="#92ec51" autoClearText="true" text="0%"/>
  </displayList>
</component>`;
let reg = /pkg="\w{8}"/g;
let res = str.match(reg);
console.log(res);
