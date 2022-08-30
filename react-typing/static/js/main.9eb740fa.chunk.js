(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},21:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(7),i=a.n(n),o=(a(21),a(10)),l=a(2),c=a(3),d=a(5),h=a(4),m=a(6),u=a(1),p=a(8),y=a.n(p),b=(a(23),a(12)),f=a.n(b),g=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},r.a.createElement("span",{className:"header__boldText"},"Typing")," practicer"),r.a.createElement("div",{className:"header__options",onClick:function(){return e.props.handleToggleMenu()}},r.a.createElement(f.a,{className:"header__options__icon"})))}}]),t}(s.Component)),w=a(13),v=a.n(w),_=a(14),k=a.n(_),E=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showStats,a=e.accuracy,s=e.incorrectArr,n=e.wpm,i=e.currentCount,o=e.inputSelected,l=e.incorrectWordsArr,c=e.displayText;return r.a.createElement("div",{className:"stats "+(!0===t?"statsCompleted":"")},r.a.createElement("div",{className:"resultsTitleHidden "+(!0===t?"resultsTitleShow":"")},"Results"),r.a.createElement("div",{className:"statbox"},r.a.createElement("p",{className:"statbox__title"},"Accuracy"),r.a.createElement("p",{className:"statbox__value"},a),r.a.createElement("p",{className:"statbox__unit"},"%")),r.a.createElement("div",{className:"statbox"},r.a.createElement("p",{className:"statbox__title"},"Typos"),r.a.createElement("p",{className:"statbox__value"},s.length)),r.a.createElement("div",{className:"statbox"},r.a.createElement("p",{className:"statbox__title"},"Speed"),r.a.createElement("p",{className:"statbox__value"},n),r.a.createElement("p",{className:"statbox__unit"},"wpm")),r.a.createElement("div",{className:"statbox"},r.a.createElement("p",{className:"statbox__title"},"Time"),r.a.createElement("p",{className:"statbox__value"},i),r.a.createElement("p",{className:"statbox__unit"},"sec")),r.a.createElement("div",{className:"resultsOptionsHidden "+(!0===t?"resultsOptionsShow":"")},r.a.createElement("div",{className:"results__options__box",onClick:function(){return c("redoText",!0)}},r.a.createElement(v.a,null)),r.a.createElement("div",{className:null!==o?"results__options__box":"results__options__boxUnavailable",onClick:function(){null!==o&&c("nextText",!0)}},r.a.createElement(k.a,null)),r.a.createElement("div",{className:0===s.length&&!0===t?"results__options__boxUnavailable":"results__options__box",onClick:function(){0!==s.length&&c("redoLetters",!0)}},"A"),r.a.createElement("div",{className:s.length>0&&!0===t&&("text"===o||"gen"===o||null===o)?"results__options__box":"results__options__boxUnavailable",onClick:function(){0===l.length||"text"!==o&&"gen"!==o&&null!==o||c("redoWords",!0)}},"ABC")))}}]),t}(s.Component)),N=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setScrollPosition",value:function(){var e=Object(n.findDOMNode)(this.refs.progressMarker),t=Object(n.findDOMNode)(this.refs.screenRef),a=e.offsetTop;t.scrollTop=a-140}},{key:"render",value:function(){var e=this.props,t=e.screenFade,a=e.inputSelected,s=e.completedText,n=e.inputText,i=e.remainingText;return r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:!0===t?"screen__inner__wrapperFadeIn":"screen__inner__wrapper",ref:"screenRef"},r.a.createElement("div",{className:"num"===a?"screen__inner__num":"sym"===a?"screen__inner__sym":""},r.a.createElement("span",{className:"completedText"},s),r.a.createElement("span",{className:"sym"===a?"progressMarker progressMarkerSym":"num"===a?"progressMarker progressMarkerNum":"progressMarker",ref:"progRef"}),r.a.createElement("span",{ref:"progressMarker",className:"remainingText"},i)),r.a.createElement("div",{className:"progressMeter"},(s.length/n.length*100).toFixed(0)+"%")))}}]),t}(s.Component)),C=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleKeyClass",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r="keyboard__key "+a+" ",n=this.props,i=n.keyCode,o=n.showStats,l=n.incorrect,c=n.correctLetter,d=n.remainingText,h=n.inputSelected,m=n.correctLetterCase,u=n.caps,p=n.incorrectArr;return!0!==o&&(i===e&&!0===l&&(r+="keyboard__highlightedKey "),c===t&&!1===s&&""!==d?r+="keyboard__correctKey":t.includes(c)&&!0===s&&""!==d&&(r+="keyboard__correctKey"),"num"===h&&" "===c&&"Enter"===t&&(r+="keyboard__correctKey"),"uppercase"!==m||"ShiftLeft"!==e&&"ShiftRight"!==e||"keyboard__key keyboard__width-threeQuarts"!==u||(r+="keyboard__correctKey"),"lowercase"!==m||"ShiftLeft"!==e&&"ShiftRight"!==e||"keyboard__key keyboard__width-threeQuarts keyboard__capsOn"!==u||(r+="keyboard__correctKey")),"Enter"!==t&&"ShiftLeft"!==t&&"ShiftRight"!==t&&"Caps"!==t&&"Tab"!==t&&"Backspace"!==t&&(p.includes(t.toLowerCase()[0])||p.includes(t.toLowerCase()[1]))&&!0===o&&(r+="keyboard__capsOn"),r}},{key:"render",value:function(){var e=this.props,t=e.keyboardScaler,a=e.caps;return r.a.createElement("div",{className:"keyboard",style:{zoom:t}},r.a.createElement("div",{className:this.handleKeyClass(192,"`~","",!0)},"`"),r.a.createElement("div",{className:this.handleKeyClass(49,"1!","",!0)},"1"),r.a.createElement("div",{className:this.handleKeyClass(50,"2@","",!0)},"2"),r.a.createElement("div",{className:this.handleKeyClass(51,"3#","",!0)},"3"),r.a.createElement("div",{className:this.handleKeyClass(52,"4$","",!0)},"4"),r.a.createElement("div",{className:this.handleKeyClass(53,"5%","",!0)},"5"),r.a.createElement("div",{className:this.handleKeyClass(54,"6^","",!0)},"6"),r.a.createElement("div",{className:this.handleKeyClass(55,"7&","",!0)},"7"),r.a.createElement("div",{className:this.handleKeyClass(56,"8*","",!0)},"8"),r.a.createElement("div",{className:this.handleKeyClass(57,"9(","",!0)},"9"),r.a.createElement("div",{className:this.handleKeyClass(48,"0)","",!0)},"0"),r.a.createElement("div",{className:this.handleKeyClass(189,"-_","",!0)},"-"),r.a.createElement("div",{className:this.handleKeyClass(187,"=+","",!0)},"="),r.a.createElement("div",{className:this.handleKeyClass(8,"Backspace","keyboard__width-plusHalf",!1)},"\u2190"),r.a.createElement("div",{className:this.handleKeyClass(9,"Tab","keyboard__width-plusHalf",!1)},"tab"),r.a.createElement("div",{className:this.handleKeyClass(81,"q")},"Q"),r.a.createElement("div",{className:this.handleKeyClass(87,"w")},"W"),r.a.createElement("div",{className:this.handleKeyClass(69,"e")},"E"),r.a.createElement("div",{className:this.handleKeyClass(82,"r")},"R"),r.a.createElement("div",{className:this.handleKeyClass(84,"t")},"T"),r.a.createElement("div",{className:this.handleKeyClass(89,"y")},"Y"),r.a.createElement("div",{className:this.handleKeyClass(85,"u")},"U"),r.a.createElement("div",{className:this.handleKeyClass(73,"i")},"I"),r.a.createElement("div",{className:this.handleKeyClass(79,"o")},"O"),r.a.createElement("div",{className:this.handleKeyClass(80,"p")},"P"),r.a.createElement("div",{className:this.handleKeyClass(219,"[{","",!0)},"["),r.a.createElement("div",{className:this.handleKeyClass(221,"]}","",!0)},"]"),r.a.createElement("div",{className:this.handleKeyClass(220,"\\|","",!0)},"\\"),r.a.createElement("div",{className:a},"CAPS"),r.a.createElement("div",{className:this.handleKeyClass(65,"a")},"A"),r.a.createElement("div",{className:this.handleKeyClass(83,"s")},"S"),r.a.createElement("div",{className:this.handleKeyClass(68,"d")},"D"),r.a.createElement("div",{className:this.handleKeyClass(70,"f")},"F"),r.a.createElement("div",{className:this.handleKeyClass(71,"g")},"G"),r.a.createElement("div",{className:this.handleKeyClass(72,"h")},"H"),r.a.createElement("div",{className:this.handleKeyClass(74,"j")},"J"),r.a.createElement("div",{className:this.handleKeyClass(75,"k")},"K"),r.a.createElement("div",{className:this.handleKeyClass(76,"l")},"L"),r.a.createElement("div",{className:this.handleKeyClass(186,";:","",!0)},";"),r.a.createElement("div",{className:this.handleKeyClass(222,"'\"","",!0)},"`"),r.a.createElement("div",{className:this.handleKeyClass(13,"Enter","keyboard__width-threeQuarts")},"ENTER"),r.a.createElement("div",{className:this.handleKeyClass("ShiftLeft",'~!@#$%^&*()_+{}|:"<>?',"keyboard__width-plusOne",!0)},"SHIFT"),r.a.createElement("div",{className:this.handleKeyClass(90,"z")},"Z"),r.a.createElement("div",{className:this.handleKeyClass(88,"x")},"X"),r.a.createElement("div",{className:this.handleKeyClass(67,"c")},"C"),r.a.createElement("div",{className:this.handleKeyClass(86,"v")},"V"),r.a.createElement("div",{className:this.handleKeyClass(66,"b")},"B"),r.a.createElement("div",{className:this.handleKeyClass(78,"n")},"N"),r.a.createElement("div",{className:this.handleKeyClass(77,"m")},"M"),r.a.createElement("div",{className:this.handleKeyClass(188,",<","",!0)},","),r.a.createElement("div",{className:this.handleKeyClass(190,".>","",!0)},"."),r.a.createElement("div",{className:this.handleKeyClass(191,"/?","",!0)},"/"),r.a.createElement("div",{className:this.handleKeyClass("ShiftRight",'~!@#$%^&*()_+{}|:"<>?',"keyboard__width-plusOne",!0)},"SHIFT"),r.a.createElement("div",{className:this.handleKeyClass(32," ","keyboard__spacebar")}))}}]),t}(s.Component)),x=(a(36),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.showMenu,s=t.displayText,i=t.genFocus,o=t.genBlur;return r.a.createElement("div",{className:a?"rightsideShow":"rightside"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__box"},r.a.createElement("div",{className:"sidebar__title"},r.a.createElement("h1",{className:"sidebar__tile__h1"},"Lessons")),r.a.createElement("div",{className:"sidebar__item",onClick:function(){return s("text")}},r.a.createElement("p",{className:"sidebar__item__p"},"Text")),r.a.createElement("div",{className:"sidebar__item",onClick:function(){return s("num")}},r.a.createElement("p",{className:"sidebar__item__p"},"Numbers")),r.a.createElement("div",{className:"sidebar__item",onClick:function(){return s("sym")}},r.a.createElement("p",{className:"sidebar__item__p"},"Symbols"))),r.a.createElement("div",{className:"sidebar__box"},r.a.createElement("div",{className:"sidebar__title"},r.a.createElement("h1",{className:"sidebar__tile__h1"},"Typing Test")),r.a.createElement("div",{className:"sidebar__switch"},r.a.createElement("div",{className:"sidebar__switch__option",onClick:function(){return s("test1")}},r.a.createElement("p",null,"1min")),r.a.createElement("div",{className:"sidebar__switch__option",onClick:function(){return s("test3")}},r.a.createElement("p",null,"3min")),r.a.createElement("div",{className:"sidebar__switch__option",onClick:function(){return s("test5")}},r.a.createElement("p",null,"5min")))),r.a.createElement("div",{className:"sidebar__box"},r.a.createElement("div",{className:"sidebar__title"},r.a.createElement("h1",{className:"sidebar__tile__h1"},"Generator")),r.a.createElement("div",{className:"sidebar__generator"},r.a.createElement("input",{type:"text",className:"sidebar__generator__input",placeholder:"add characters here",ref:"genInput",onFocus:i,onBlur:o}),r.a.createElement("button",{className:"sidebar__generator__button",ref:"genBtn",onClick:function(){return""!==Object(n.findDOMNode)(e.refs.genInput).value?s("gen"):""}},"+")))))}}]),t}(s.Component)),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={inputText:"Welcome to typing practicer",keyPressed:null,keyCode:null,progress:0,incorrectArr:[],remainingText:"Welcome to typing practicer",completedText:"",accuracy:100,incorrect:!1,wordCount:0,wpm:0,currentCount:0,intervalId:null,timeIncreasing:!1,correctLetter:"w",correctLetterCase:"uppercase",inputSelected:null,showStats:!1,generatorFocus:!1,keyboardScaler:"100%",incorrectWordsArr:[],incorrectWordCurrent:!1,screenFade:!0,caps:"keyboard__key keyboard__width-threeQuarts",showMenu:!1},a.genFocus=a.genFocus.bind(Object(u.a)(Object(u.a)(a))),a.genBlur=a.genBlur.bind(Object(u.a)(Object(u.a)(a))),a.handleKeyboardScale=a.handleKeyboardScale.bind(Object(u.a)(Object(u.a)(a))),a.handleToggleMenu=a.handleToggleMenu.bind(Object(u.a)(Object(u.a)(a))),a.displayText=a.displayText.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){e.handleKeyPress(t)}),window.addEventListener("resize",function(){return e.handleKeyboardScale()}),this.handleKeyboardScale()}},{key:"displayText",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s="",r="",i=!1;if("nextText"===e&&(i=!0,e=this.state.inputSelected),"text"===e)s=y.a.books[Math.floor(Math.random()*y.a.books.length)];else if("num"===e||"sym"===e||"redoLetters"===e){"num"===e?(s="",r="0123456789"):"sym"===e?r="~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?":"redoLetters"===e&&(r=this.state.incorrectArr.join(""),e=this.state.inputSelected);for(var o=1;o<100;o++)s+=o%5===0?" ":r.charAt(Math.floor(Math.random()*r.length))}else"redoText"===e&&(s=this.state.inputText,e=this.state.inputSelected);for(;!0===i&&s===this.state.inputText&&"text"===e;)s=y.a.books[Math.floor(Math.random()*y.a.books.length)],i=!1;if("test1"===e||"test3"===e||"test5"===e){!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=[e[a],e[t]];e[t]=s[0],e[a]=s[1]}}(y.a.words),s=y.a.words.join(" ")}if("redoWords"===e){for(var l=0;l<19;l++)s+=this.state.incorrectWordsArr[Math.floor(Math.random()*this.state.incorrectWordsArr.length)]+" ";s+=this.state.incorrectWordsArr[Math.floor(Math.random()*this.state.incorrectWordsArr.length)]}if("gen"===e){var c=Object(n.findDOMNode)(this.refs.sidebar.refs.genInput);s="";for(var d=1;d<100;d++)s+=d%5===0?" ":c.value.charAt(Math.floor(Math.random()*c.value.length));c.blur(),c.value=""}this.setState({inputText:s,remainingText:s,completedText:"",progress:0,incorrectArr:[],accuracy:100,incorrect:!1,currentCount:0,wordCount:0,wpm:0,timeIncreasing:!1,correctLetter:s.charAt(0).toLowerCase(),correctLetterCase:s.charAt(0)!==s.charAt(0).toLowerCase()?"uppercase":"lowercase",inputSelected:e,showStats:!1,incorrectWordsArr:[],incorrectWordCurrent:!1,screenFade:!1,showMenu:!1}),clearInterval(this.intervalId),setTimeout(function(){return t.refs.screen.setScrollPosition()},0);var h=1;h=a?1e3:1,setTimeout(function(){return t.setState({screenFade:!0})},h)}},{key:"handleKeyPress",value:function(e){if("Tab"!==e.key&&"CapsLock"!==e.key&&"Shift"!==e.key&&"Control"!==e.key&&"Backspance"!==e.key&&!1===this.state.showStats&!1===this.state.generatorFocus){var t=this.state,a=t.inputText,s=t.progress,r=t.completedText,i=t.remainingText,l=t.incorrectArr,c=t.timeIncreasing;0===s&&!1===c&&(this.intervalId=setInterval(function(){var e=this.state,t=e.currentCount,a=e.inputSelected;this.setState({currentCount:t+1}),(59===t&&"test1"===a||179===t&&"test3"===a||299===t&&"test5"===a)&&(clearInterval(this.intervalId),this.setState({showStats:!0}))}.bind(this),1e3),this.setState({timeIncreasing:!0}));var d=a.charAt(s);"num"===this.state.inputSelected?this.setState({keyPressed:"Shift"===e.key?e.code:"Enter"===e.key?" ":e.key,keyCode:e.keyCode}):this.setState({keyPressed:"Shift"===e.key?e.code:e.key,keyCode:e.keyCode});var h=this.state.keyPressed;h===d?(this.setState({completedText:r+i.charAt(0),remainingText:i.slice(1),correctLetter:a.charAt(s+1).toLowerCase(),correctLetterCase:a.charAt(s+1)!==a.charAt(s+1).toLowerCase()?"uppercase":"lowercase",progress:s+1}),this.setState({accuracy:String((this.state.completedText.length/(this.state.completedText.length+this.state.incorrectArr.length)*100).toFixed(0)),incorrect:!1})," "===a.charAt(s+1)&&this.handleWordEnd()," "===h&&this.refs.screen.setScrollPosition(),""!==this.state.remainingText&&" "!==this.state.remainingText||(clearInterval(this.intervalId),this.handleWordEnd(),this.setState({showStats:!0}))):(this.setState({incorrectArr:Object(o.a)(l).concat([d]),incorrect:!0,incorrectWordCurrent:!0}),this.setState({accuracy:String((this.state.completedText.length/(this.state.completedText.length+this.state.incorrectArr.length)*100).toFixed(0))}))}e.getModifierState&&e.getModifierState("CapsLock")?this.setState({caps:"keyboard__key keyboard__width-threeQuarts keyboard__capsOn"}):this.setState({caps:"keyboard__key keyboard__width-threeQuarts"}),!0===this.state.generatorFocus&&"Enter"===e.key&&""!==Object(n.findDOMNode)(this.refs.sidebar.refs.genInput).value&&this.displayText("gen")}},{key:"genFocus",value:function(){this.setState({generatorFocus:!0})}},{key:"genBlur",value:function(){this.setState({generatorFocus:!1})}},{key:"handleKeyboardScale",value:function(){var e=100*Math.min(Object(n.findDOMNode)(this.refs.main).clientWidth/744,1)+"%";this.setState({keyboardScaler:e})}},{key:"handleWordEnd",value:function(){if(!0===this.state.incorrectWordCurrent){var e=this.state.completedText.split(" ").splice(-1)[0];this.setState(function(t){return{incorrectWordsArr:Object(o.a)(t.incorrectWordsArr).concat([e])}})}this.setState({wpm:this.state.currentCount>0?((this.state.wordCount+1)/(this.state.currentCount/60)).toFixed(0):0,wordCount:this.state.wordCount+1,incorrectWordCurrent:!1})}},{key:"handleToggleMenu",value:function(){this.setState(function(e){return{showMenu:!e.showMenu}})}},{key:"render",value:function(){var e=this.state,t=e.accuracy,a=e.showStats,s=e.incorrectArr,n=e.wpm,i=e.currentCount,o=e.inputSelected,l=e.incorrectWordsArr,c=e.screenFade,d=e.completedText,h=e.inputText,m=e.remainingText,u=e.keyCode,p=e.incorrect,y=e.correctLetter,b=e.correctLetterCase,f=e.caps,w=e.keyboardScaler,v=e.showMenu;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{handleToggleMenu:this.handleToggleMenu}),r.a.createElement("div",{className:"main",ref:"main"},r.a.createElement(E,{accuracy:t,showStats:a,incorrectArr:s,wpm:n,currentCount:i,inputSelected:o,incorrectWordsArr:l,displayText:this.displayText}),r.a.createElement(N,{screenFade:c,inputSelected:o,completedText:d,inputText:h,remainingText:m,ref:"screen"}),r.a.createElement(C,{keyCode:u,showStats:a,incorrect:p,correctLetter:y,remainingText:m,inputSelected:o,correctLetterCase:b,caps:f,incorrectArr:s,keyboardScaler:w})),r.a.createElement(x,{showMenu:v,displayText:this.displayText,genBlur:this.genBlur,genFocus:this.genFocus,ref:"sidebar"}))}}]),t}(s.Component);i.a.render(r.a.createElement(S,null),document.getElementById("root"))},8:function(e,t){t.books=["The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn","\"Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don't tell me that this means war, if you still try to defend the infamies and horrors perpetrated by that Antichrist I really believe he is Antichrist","Happy families are all alike; every unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same","Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego.","Someone must have been telling lies about Josef K., he knew he had done nothing wrong but, one morning, he was arrested. Every day at eight in the morning he was brought his breakfast by Mrs. Grubach's cook - Mrs. Grubach was his landlady - but today she didn't come. That had never happened before.","It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us","On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge. He had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high, five-storied house and was more like a cupboard than a room.","The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed","The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide.","To the door of an inn in the provincial town of N. there drew up a smart britchka-a light spring-carriage of the sort affected by bachelors, retired lieutenant-colonels, staff-captains, land-owners possessed of about a hundred souls, and, in short, all persons who rank as gentlemen of the intermediate category."],t.words=["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","hot","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"]}},[[15,2,1]]]);
//# sourceMappingURL=main.9eb740fa.chunk.js.map