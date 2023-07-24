"use strict";(self.webpackChunksyksy_web=self.webpackChunksyksy_web||[]).push([[185],{85107:function(e,t,a){a.r(t);a(59496);var n=a(64993),r=a(43057),c=a(4637);t.default=function(){return(0,c.jsx)(n.ZP,{children:(0,c.jsx)(r.Z,{children:"欢迎使用轻舟平台支撑系统！"})})}},43057:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(82269),r=a(62081),c=a(59496),l=a(19803),o=a.n(l),i=a(64972),s=a(2331),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},m=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,i=void 0===l||l,m=d(e,["prefixCls","className","hoverable"]);return c.createElement(s.C,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=o()("".concat(l,"-grid"),a,(0,n.Z)({},"".concat(l,"-grid-hoverable"),i));return c.createElement("div",(0,r.Z)({},m,{className:s}))}))},p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},u=function(e){return c.createElement(s.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,l=e.className,i=e.avatar,s=e.title,d=e.description,m=p(e,["prefixCls","className","avatar","title","description"]),u=a("card",n),v=o()("".concat(u,"-meta"),l),b=i?c.createElement("div",{className:"".concat(u,"-meta-avatar")},i):null,f=s?c.createElement("div",{className:"".concat(u,"-meta-title")},s):null,y=d?c.createElement("div",{className:"".concat(u,"-meta-description")},d):null,E=f||y?c.createElement("div",{className:"".concat(u,"-meta-detail")},f,y):null;return c.createElement("div",(0,r.Z)({},m,{className:v}),b,E)}))},v=a(37188),b=a(72708),f=a(96453),y=a(5340),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var Z=c.forwardRef((function(e,t){var a,l,d,p=c.useContext(s.E_),u=p.getPrefixCls,Z=p.direction,g=c.useContext(y.Z),h=e.prefixCls,O=e.className,x=e.extra,N=e.headStyle,C=void 0===N?{}:N,w=e.bodyStyle,P=void 0===w?{}:w,j=e.title,k=e.loading,S=e.bordered,T=void 0===S||S,K=e.size,z=e.type,A=e.cover,B=e.actions,I=e.tabList,_=e.children,L=e.activeTabKey,G=e.defaultActiveTabKey,M=e.tabBarExtraContent,R=e.hoverable,q=e.tabProps,D=void 0===q?{}:q,F=E(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),H=u("card",h),J=0===P.padding||"0px"===P.padding?{padding:24}:void 0,Q=c.createElement("div",{className:"".concat(H,"-loading-block")}),U=c.createElement("div",{className:"".concat(H,"-loading-content"),style:J},c.createElement(b.Z,{gutter:8},c.createElement(f.Z,{span:22},Q)),c.createElement(b.Z,{gutter:8},c.createElement(f.Z,{span:8},Q),c.createElement(f.Z,{span:15},Q)),c.createElement(b.Z,{gutter:8},c.createElement(f.Z,{span:6},Q),c.createElement(f.Z,{span:18},Q)),c.createElement(b.Z,{gutter:8},c.createElement(f.Z,{span:13},Q),c.createElement(f.Z,{span:9},Q)),c.createElement(b.Z,{gutter:8},c.createElement(f.Z,{span:4},Q),c.createElement(f.Z,{span:3},Q),c.createElement(f.Z,{span:16},Q))),V=void 0!==L,W=(0,r.Z)((0,r.Z)({},D),(a={},(0,n.Z)(a,V?"activeKey":"defaultActiveKey",V?L:G),(0,n.Z)(a,"tabBarExtraContent",M),a)),X=I&&I.length?c.createElement(v.Z,(0,r.Z)({size:"large"},W,{className:"".concat(H,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),I.map((function(e){return c.createElement(v.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(j||x||X)&&(d=c.createElement("div",{className:"".concat(H,"-head"),style:C},c.createElement("div",{className:"".concat(H,"-head-wrapper")},j&&c.createElement("div",{className:"".concat(H,"-head-title")},j),x&&c.createElement("div",{className:"".concat(H,"-extra")},x)),X));var Y,$=A?c.createElement("div",{className:"".concat(H,"-cover")},A):null,ee=c.createElement("div",{className:"".concat(H,"-body"),style:P},k?U:_),te=B&&B.length?c.createElement("ul",{className:"".concat(H,"-actions")},function(e){return e.map((function(t,a){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c.createElement("span",null,t))}))}(B)):null,ae=(0,i.Z)(F,["onTabChange"]),ne=K||g,re=o()(H,(l={},(0,n.Z)(l,"".concat(H,"-loading"),k),(0,n.Z)(l,"".concat(H,"-bordered"),T),(0,n.Z)(l,"".concat(H,"-hoverable"),R),(0,n.Z)(l,"".concat(H,"-contain-grid"),(c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===m&&(Y=!0)})),Y)),(0,n.Z)(l,"".concat(H,"-contain-tabs"),I&&I.length),(0,n.Z)(l,"".concat(H,"-").concat(ne),ne),(0,n.Z)(l,"".concat(H,"-type-").concat(z),!!z),(0,n.Z)(l,"".concat(H,"-rtl"),"rtl"===Z),l),O);return c.createElement("div",(0,r.Z)({ref:t},ae,{className:re}),d,$,ee,te)}));Z.Grid=m,Z.Meta=u;var g=Z}}]);