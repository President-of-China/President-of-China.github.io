(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdc177c6"],{"0f47":function(n,t,e){"use strict";e("ff03")},e5ee:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.isLoading,expression:"isLoading"}],staticClass:"index-page"},[t("HeaderNav"),t("div",{staticClass:"vditor",attrs:{id:"vditor"}})],1)},o=[],i=e("ff41"),r=e.n(i),s=e("eb11"),d={backgroundColor:"#212121",title:{text:"「晚晴幽草轩」访问来源",subtext:"2019 年 6 月份",x:"center",textStyle:{color:"#f2f2f2"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["搜索引擎","直接访问","推荐","其他","社交平台"],textStyle:{color:"#f2f2f2"}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:10440,name:"搜索引擎",itemStyle:{color:"#ef4136"}},{value:4770,name:"直接访问"},{value:2430,name:"推荐"},{value:342,name:"其他"},{value:18,name:"社交平台"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},c=JSON.stringify(d,null,2),l='# 欢迎使用 `Arya` 在线 Markdown 编辑器\n\n[Arya](https://markdown.lovejade.cn/?utm_source=markdown.lovejade.cn)，是一款基于 `Vue`、`Vditor`，为未来而构建的在线 Markdown 编辑器；轻量且强大：内置粘贴 HTML 自动转换为 Markdown，支持流程图、甘特图、时序图、任务列表，可导出携带样式的图片、PDF、微信公众号特制的 HTML 等等。\n\n---\n\n## 如何使用\n\n**微注**：清空目前这份默认文档，即处于可使用态。[Arya](https://markdown.lovejade.cn/?utm_source=markdown.lovejade.cn) 另一大优点在于：编辑内容只会在您本地进行保存，不会上传您的数据至服务器，**绝不窥测用户个人隐私，可放心使用**；Github 源码：[markdown-online-editor](https://github.com/nicejade/markdown-online-editor)，部分功能仍在开发🚧，敬请期待。\n\n默认为[所见即所得](https://hacpai.com/article/1577370404903?utm_source=github.com)模式，可通过 `⌘-⇧-M`（`Ctrl-⇧-M`）进行切换；或通过以下方式：\n- 所见即所得：`⌘-⌥-7`（`Ctrl-alt-7`）；\n- 即时渲染：`⌘-⌥-8`（`Ctrl-alt-8`）；\n- 分屏渲染：`⌘-⌥-9`（`Ctrl-alt-9`）；\n\n### PPT 预览\n\n如果您用作 `PPT` 预览（入口在`设置`中），需要注意，这里暂还不能支持各种图表的渲染；您可以使用 `---` 来定义水平方向上幻灯片，用 `--` 来定义垂直幻灯片；更多设定可以参见 [RevealJs 文档](https://github.com/hakimel/reveal.js#table-of-contents)。\n\n\n---\n\n## 什么是 Markdown\n\n[Markdown](https://nicelinks.site/tags/Markdown/?utm_source=markdown.lovejade.cn) 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号，以最小的输入代价，生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体**、*斜体* 或者[超文本链接](https://vue-cli3.lovejade.cn/explore/)，更棒的是，它还可以：\n\n---\n\n### 1. 制作待办事宜 `Todo` 列表\n\n- [x] 🎉 通常 `Markdown` 解析器自带的基本功能；\n- [x] 🍀 支持**流程图**、**甘特图**、**时序图**、**任务列表**；\n- [x] 🏁 支持粘贴 HTML 自动转换为 Markdown；\n- [x] 💃🏻 支持插入原生 Emoji、设置常用表情列表；\n- [x] 🚑 支持编辑内容保存**本地存储**，防止意外丢失；\n- [x] 📝 支持**实时预览**，主窗口大小拖拽，字符计数；\n- [x] 🛠 支持常用快捷键(**Tab**)，及代码块添加复制\n- [x] ✨ 支持**导出**携带样式的 PDF、PNG、JPEG 等；\n- [x] ✨ 升级 Vditor，新增对 `echarts` 图表的支持；\n- [x] 👏 支持检查并格式化 Markdown 语法，使其专业；\n- [x] 🦑 支持五线谱、及[部分站点、视频、音频解析](https://github.com/b3log/vditor/issues/117?utm_source=hacpai.com#issuecomment-526986052)；\n- [x] 🌟 增加对**所见即所得**编辑模式的支持(`⌘-⇧-M`)；\n\n---\n\n### 2. 书写一个质能守恒公式[^LaTeX]\n\n$$\nE=mc^2\n$$\n\n---\n\n### 3. 高亮一段代码[^code]\n\n```js\n// 给页面里所有的 DOM 元素添加一个 1px 的描边（outline）;\n[].forEach.call($$("*"),function(a){\n  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);\n})\n```\n\n### 4. 高效绘制[流程图](https://github.com/knsv/mermaid#flowchart)\n\n```mermaid\ngraph TD;\n  A--\x3eB;\n  A--\x3eC;\n  B--\x3eD;\n  C--\x3eD;\n```\n\n### 5. 高效绘制[序列图](https://github.com/knsv/mermaid#sequence-diagram)\n\n```mermaid\nsequenceDiagram\n  participant Alice\n  participant Bob\n  Alice->John: Hello John, how are you?\n  loop Healthcheck\n      John->John: Fight against hypochondria\n  end\n  Note right of John: Rational thoughts <br/>prevail...\n  John--\x3eAlice: Great!\n  John->Bob: How about you?\n  Bob--\x3eJohn: Jolly good!\n```\n\n### 6. 高效绘制[甘特图](https://github.com/knsv/mermaid#gantt-diagram)\n\n>**甘特图**内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示活动（项目），线条表示在整个期间上计划和实际的活动完成情况。它直观地表明任务计划在什么时候进行，及实际进展与计划要求的对比。\n\n```mermaid\ngantt\n  title 项目开发流程\n  section 项目确定\n    需求分析       :a1, 2019-06-22, 3d\n    可行性报告     :after a1, 5d\n    概念验证       : 5d\n  section 项目实施\n    概要设计      :2019-07-05  , 5d\n    详细设计      :2019-07-08, 10d\n    编码          :2019-07-15, 10d\n    测试          :2019-07-22, 5d\n  section 发布验收\n    发布: 2d\n    验收: 3d\n```\n\n### 7. 支持图表\n\n```echarts\n'.concat(c,"\n```\n\n>**备注**：上述 echarts 图表📈，其数据，须使用严格的 **JSON** 格式；您可使用 JSON.stringify(data)，将对象传换从而得标准数据，即可正常使用。\n\n### 8. 绘制表格\n\n| 作品名称        | 在线地址   |  上线日期  |\n| :--------  | :-----  | :----:  |\n| 倾城之链 | [https://nicelinks.site](https://nicelinks.site/??utm_source=markdown.lovejade.cn) |2017-09-20|\n| 晚晴幽草轩 | [https://jeffjade.com](https://jeffjade.com/??utm_source=markdown.lovejade.cn) |2014-09-20|\n| 静轩之别苑 | [http://quickapp.lovejade.cn](http://quickapp.lovejade.cn/??utm_source=markdown.lovejade.cn) |2019-01-12|\n\n### 9. 更详细语法说明\n\n想要查看更详细的语法说明，可以参考这份 [Markdown 资源列表](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/markdown-tutorial.md)，涵盖入门至进阶教程，以及资源、平台等信息，能让您对她有更深的认知。\n\n总而言之，不同于其它*所见即所得*的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 `GitHub` 和 技术问答网站 `StackOverFlow` 的御用书写格式，而且越发流行，正在在向各行业渗透。\n\n最新更新于 2019.08.21\n"),u={name:"index-page",data:function(){return{isLoading:!0,isMobile:window.innerWidth<=960,vditor:null}},created:function(){console.log("%c 倾城之链：倾心缔造，痴心为你。 https://nicelinks.site/","font-size:2.113em;color: #2edfa3"),this.setDefaultText(),console.log=function(){}},components:{HeaderNav:s["a"]},mounted:function(){var n=this;this.initVditor(),this.$nextTick((function(){n.isLoading=!1}))},methods:{initVditor:function(){var n=this,t={width:this.isMobile?"100%":"80%",height:"0",tab:"\t",counter:"999999",typewriterMode:!0,mode:"sv",preview:{delay:100,show:!this.isMobile},outline:!0,upload:{max:5242880,handler:function(t){var e=new FormData;for(var a in t)e.append("smfile",t[a]);var o=new XMLHttpRequest;o.open("POST","https://sm.ms/api/upload"),o.onload=n.onloadCallback,o.send(e)}}};this.vditor=new r.a("vditor",t),this.vditor.focus()},onloadCallback:function(n){var t=n.currentTarget;if(200!==t.status)return this.$message({type:"error",message:t.status+" "+t.statusText});var e=JSON.parse(t.response),a="";if("invalid_source"===e.code)return this.$message({type:"error",message:e.message});"image_repeated"===e.code?a="![](".concat(e.images,")"):("success"===e.code||e.success)&&(a="![".concat(e.data.filename,"](").concat(e.data.url,")")),this.vditor.insertValue(a)},setDefaultText:function(){var n=localStorage.getItem("vditorvditor")||"";n.trim()||localStorage.setItem("vditorvditor",l)}}},m=u,h=(e("0f47"),e("0c7c")),p=Object(h["a"])(m,a,o,!1,null,null,null);t["default"]=p.exports},ff03:function(n,t,e){}}]);