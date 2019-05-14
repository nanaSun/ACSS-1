[点我看demo](https://nanasun.github.io/ACSS-1/dist/)

## ACSS命名规则

* 首字母命名，如遇“-”，加上“-”后面单词的首字母。
    *  属性首字母+属性值首字母：e.g:`display:block`，此处取`display`的`d`和`block`的`b`也就是`.db{ display:block; }`。
    *  属性带有“-”的，取属性首字母+每个“-”后面的首字母+属性值首字母：e.g:`vertical-align: middle`，此处取`vertical-align`的`v`和`a`，以及`middle`的`m`也就是`.vam{ vertical-align: middle}`。
    *  属性值带有“-”的，取属性首字母+属性值首字母+每个“—”后面的首字母：e.g:`word-wrap: break-word`，此处取`word-wrap`的`w`和`w`，以及`break-word`的`b`和`w`也就是`.wwbw{ word-wrap: break-word}`。
 
* 颜色命名，属性首字母+“_”+颜色值
    * e.g:`color:#000`，此处取`color`的`c`和颜色的值`000`即`c_100{color:#000}`。
    * e.g:`background-color:#000`，此处取`background-color`的`b`和`c`和颜色的值`000`即`bc_100{background-color:#000}`。

* 数值命名，属性首字母+数值
    * e.g:`font-weight:700`，此出取`font-weight`的`f`和`w`，以及数值`700`，也就是`fw700{font-weight:700}`。

* 单位命名，如遇单位为百分比（%）属性首字母+数值+p（percent）
    * e.g:`width:100%` ，此出取`width`的`w`，以及数值`100`，也就是`.w100p{width:100%}`。

* 小数点命名，只需将`.`替换成`d`
    * e.g:`line-height:1.2` ，此出取`line-height`的`l`和`h`，以及数值`1d2`加，也就是`.lh1d2{line-height:1.2}`。ß

### 自定义class

|类名|作用|
|:--:|:--:|
|.auto|block居中对齐|
|.clearfix|清除float浮动|
|.ell|单行结尾省略号|
|.ell2row|2行结尾省略号|
|.ell2row.lh1d5|line-height:1.5的限高|
|.ell2row.lh1d8|line-height:1.8的限高|
|.i|字段前标签|
|.trans|过度时间300ms|

block居中对齐，example:
```
<body>
    <!--block居中对齐-->
    <div class="w50p auto">auto</div>
<body>
```

清除float浮动，example:
```
<!--清除float浮动-->
<div class="clearfix">
    <div class="fl">float left</div>
    <div class="fr">float right</div>
</div>
```

单行结尾省略号，example:
```
<!--单行结尾省略号-->
<div style="width:10rem" class="ell">带省略号：ell ell ell ell ell ell ell  ell ell ell ell</div>
```

两行结尾省略号，example:
```
<!--两行结尾省略号-->
 <div style="width:10rem" class="ell2row">ell2row ell2row ell2row ell2row ell2row ell2row ell2row</div>
```

line-height:1.5的限高，example:
```
<!--line-height:1.5的限高-->
 <div style="width:10rem" class="ell2row lh1d5 lh24">ell2row ell2row ell2row ell2row ell2row ell2row ell2row</div>
```

line-height:1.8的限高，example:
```
<!--line-height:1.8的限高-->
 <div style="width:10rem" class="ell2row lh1d5 lh24">ell2row ell2row ell2row ell2row ell2row ell2row ell2row</div>
```

.i字段前标签
```
 <p><i class="i" style="background:url(pic.png);width: 1rem; height: 1rem;"></i><span>字段前标签</span></p>
```

过度时间300ms
```
<p class="trans" onclick="if(this.className==='trans'){this.className='trans c_primary'}else{this.className='trans'}">点我变色trans</p>
```
<iframe src="./dist/index.html" frameborder="0" height="400" width="100%"></iframe>