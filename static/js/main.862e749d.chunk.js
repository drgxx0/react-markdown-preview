(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(15),n(1)),l=n(2),c=n(4),d=n(3),u=n(5),h=(n(17),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={window:!1,style:{}},n.expand=function(){n.state.window?n.setState({window:!1,style:{}}):n.setState({window:!0,style:{width:"800px",height:"600px"}})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.input;return r.a.createElement("div",{className:"editorBox",style:this.state.style},r.a.createElement("div",{className:"editorHeader"},"Editor ",r.a.createElement("i",{className:"fas fa-expand-arrows-alt",onClick:this.expand})),r.a.createElement("textarea",{id:"editor",onChange:t,style:this.state.style,value:n}))}}]),t}(a.Component)),m=n(9),w=n.n(m),f=(n(19),function(e){var t=e.input;return r.a.createElement("div",{className:"previewBox"},r.a.createElement("div",{className:"previewHeader"},"Preview"),r.a.createElement("div",{id:"preview",className:"previewContent",dangerouslySetInnerHTML:{__html:w()(t,{gfm:!0,breaks:!0})}}))}),p=(n(21),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**...\n\n whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"},n.handleChange=function(e){var t=e.target.value;n.setState({input:t})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.input;return r.a.createElement("div",{className:"App"},r.a.createElement(h,{input:e,handleChange:this.handleChange}),r.a.createElement(f,{input:e}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.862e749d.chunk.js.map