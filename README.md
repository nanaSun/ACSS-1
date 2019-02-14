
# Atomic best practice

```SASS
/* 规范定义的内间距 */
@include acss-padding((2, 4, 8, 12, 16, 20, 24, 32));

/* 规范定义的外间距 */
@include acss-margin((2, 4, 8, 12, 16, 20, 24, 32, 48));

/* 规范定义的字号 */
@include acss-font-size((0, 12, 14, 16, 18, 20, 24, 32));

/* 规范定义的行高 */
@include acss-line-height((16, 20, 24, 32));


/* 颜色 */
.c_l { color: $c_l; }
.c_m { color: $c_m; }
.c_s { color: $c_s; }
.c_xs { color: $c_xs; }
.c_success { color: $c_success; }
.c_danger { color: $c_danger; }
.c_warning { color: $c_warning; }
.c_primary { color: $c_primary; }
.c_fff { color: #fff; }
.c_000 { color: #000; }

/* display */
.di { display: inline; }
.db { display: block; }
.dn { display: none; }
.dib { display: inline-block; }

/* text-align */
.tar { text-align: right; }
.tac { text-align: center; }
.tal { text-align: left; }

/* float */
.fl { float: left; display: inline; }
.fr { float: right; }

/* vertical */
.vam { vertical-align: middle; }
.vat { vertical-align: top; }

/* 定位 */
.pr { position: relative; }
.pa { position: absolute; }
.t0 { top: 0; }
.r0 { right: 0; }
.b0 { bottom: 0; }
.l0 { left: 0; }
.t50p { top: 50%; }
.r50p { right: 50%; }
.r100p { right: 100%; }
.l50p { left: 50%; }
.l100p { left: 100%; }

/* 高宽 */
.w100p { width: 100%; }
.h100p { height: 100%; }

/* 文字相关 */
.fw400 { font-weight: 400; }
.fw600 { font-weight: 600; }
.fw700, .fwb { font-weight: 700; }
.fsi { font-style: italic; }
.wsn { white-space: nowrap; }
.wwbw { word-wrap: break-word; word-break: break-all; }

/* 文本转换 */
.ttu { text-transform: uppercase; }
.ttc { text-transform: capitalize; }
.ttn { text-transform: none; }
.ttl { text-transform: lowercase; }

/* 其它 */
.oh { overflow: hidden; }
.vh { visibility: hidden; }
.z1 { z-index: 1; }
.br3 { border-radius: px(3); }
.br100p { border-radius: 100%; }
```