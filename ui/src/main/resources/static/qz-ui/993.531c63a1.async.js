"use strict";(self.webpackChunksyksy_web=self.webpackChunksyksy_web||[]).push([[993],{75790:function(e,t,n){var r=(0,n(59496).createContext)({});t.Z=r},64993:function(e,t,n){n.d(t,{ZP:function(){return Oe}});n(84701);var r=n(62081),a=n(82269),o=n(57642),i=n(73287),c=n(22595),l=n(74374),s=n(31307),u=n(59496),f=n(19803),d=n.n(f),v=n(64972),p=n(22087),m=n(2331),h=n(86298),b=n(11653);function y(){return function(e,t,n){var r=n.value,a=!1;return{configurable:!0,get:function(){if(a||this===e.prototype||this.hasOwnProperty(t))return r;var n=function(e){var t,n=function(n){return function(){t=null,e.apply(void 0,(0,h.Z)(n))}},r=function(){if(null==t){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];t=(0,b.Z)(n(r))}};return r.cancel=function(){b.Z.cancel(t),t=null},r}(r.bind(this));return a=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),a=!1,n}}}}var g=n(69095);function x(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Z(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function E(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var C=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],w=[];function k(e,t){if(e){var n=w.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},w.push(n),C.forEach((function(t){n.eventHandlers[t]=(0,g.Z)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function N(e){var t=w.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(w=w.filter((function(e){return e!==t})),C.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var P,R=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":(0,s.Z)(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};function T(){return"undefined"!=typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(P||(P={}));var S=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).state={status:P.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offsetBottom,r=t.offsetTop;return void 0===n&&void 0===r?0:r},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,a=e.props.onChange,o=e.getTargetFunc();if(n===P.Prepare&&e.fixedNode&&e.placeholderNode&&o){var i=e.getOffsetTop(),c=e.getOffsetBottom(),l=o();if(l){var s={status:P.None},u=x(l),f=x(e.placeholderNode),d=Z(f,u,i),v=E(f,u,c);void 0!==d?(s.affixStyle={position:"fixed",top:d,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}):void 0!==v&&(s.affixStyle={position:"fixed",bottom:v,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}),s.lastAffix=!!s.affixStyle,a&&r!==s.lastAffix&&a(s.lastAffix),e.setState(s)}}},e.prepareMeasure=function(){e.setState({status:P.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e}return(0,i.Z)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||T}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){k(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),r=(null==n?void 0:n())||null;t!==r&&(N(this),r&&(k(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),N(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),a=e();if(a&&this.placeholderNode){var o=x(a),i=x(this.placeholderNode),c=Z(i,o,n),l=E(i,o,r);if(void 0!==c&&t.top===c||void 0!==l&&t.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var e=this,t=this.state,n=t.affixStyle,o=t.placeholderStyle,i=this.props,c=i.affixPrefixCls,l=i.children,s=d()((0,a.Z)({},c,!!n)),f=(0,v.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return u.createElement(p.Z,{onResize:function(){e.updatePosition()}},u.createElement("div",(0,r.Z)({},f,{ref:this.savePlaceholderNode}),n&&u.createElement("div",{style:o,"aria-hidden":"true"}),u.createElement("div",{className:s,ref:this.saveFixedNode,style:n},u.createElement(p.Z,{onResize:function(){e.updatePosition()}},l))))}}]),n}(u.Component);S.contextType=m.E_,R([y()],S.prototype,"updatePosition",null),R([y()],S.prototype,"lazyUpdatePosition",null);var j=u.forwardRef((function(e,t){var n=e.prefixCls,a=(0,u.useContext(m.E_).getPrefixCls)("affix",n),o=(0,r.Z)((0,r.Z)({},e),{affixPrefixCls:a});return u.createElement(S,(0,r.Z)({},o,{ref:t}))})),O=n(24572),I=(n(77178),n(57500)),M=(n(28471),n(81),n(63998),n(34940),n(38619)),A=n(33298),B=n(84045),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},D=n(38119),_=function(e,t){return u.createElement(D.Z,(0,B.Z)((0,B.Z)({},e),{},{ref:t,icon:L}))};_.displayName="ArrowLeftOutlined";var H=u.forwardRef(_),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},F=function(e,t){return u.createElement(D.Z,(0,B.Z)((0,B.Z)({},e),{},{ref:t,icon:z}))};F.displayName="ArrowRightOutlined";var K=u.forwardRef(F),W=n(79014),U=n(1618),V=n(11611),G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Y=function(e){var t,n,a=e.prefixCls,o=e.separator,i=void 0===o?"/":o,c=e.children,l=e.overlay,s=e.dropdownProps,f=G(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,u.useContext(m.E_).getPrefixCls)("breadcrumb",a);return t="href"in f?u.createElement("a",(0,r.Z)({className:"".concat(d,"-link")},f),c):u.createElement("span",(0,r.Z)({className:"".concat(d,"-link")},f),c),n=t,t=l?u.createElement(V.Z,(0,r.Z)({overlay:l,placement:"bottom"},s),u.createElement("span",{className:"".concat(d,"-overlay-link")},n,u.createElement(U.Z,null))):n,c?u.createElement("li",null,t,i&&u.createElement("span",{className:"".concat(d,"-separator")},i)):null};Y.__ANT_BREADCRUMB_ITEM=!0;var X=Y,q=function(e){var t=e.children,n=(0,u.useContext(m.E_).getPrefixCls)("breadcrumb");return u.createElement("span",{className:"".concat(n,"-separator")},t||"/")};q.__ANT_BREADCRUMB_SEPARATOR=!0;var J=q,Q=n(2698),$=n(68494),ee=n(58535),te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function ne(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?u.createElement("span",null,o):u.createElement("a",{href:"#/".concat(r.join("/"))},o)}var re=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},ae=function(e,t,n){var r=(0,h.Z)(e),a=re(t||"",n);return a&&r.push(a),r},oe=function(e){var t,n=e.prefixCls,o=e.separator,i=void 0===o?"/":o,c=e.style,l=e.className,s=e.routes,f=e.children,v=e.itemRender,p=void 0===v?ne:v,h=e.params,b=void 0===h?{}:h,y=te(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),g=u.useContext(m.E_),x=g.getPrefixCls,Z=g.direction,E=x("breadcrumb",n);if(s&&s.length>0){var C=[];t=s.map((function(e){var t,n=re(e.path,b);return n&&C.push(n),e.children&&e.children.length&&(t=u.createElement(Q.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:p(e,b,s,ae(C,e.path,b))}}))})),u.createElement(X,{overlay:t,separator:i,key:n||e.breadcrumbName},p(e,b,s,C))}))}else f&&(t=(0,W.Z)(f).map((function(e,t){return e?((0,$.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,ee.Tm)(e,{separator:i,key:t})):e})));var w=d()(E,(0,a.Z)({},"".concat(E,"-rtl"),"rtl"===Z),l);return u.createElement("nav",(0,r.Z)({className:w,style:c},y),u.createElement("ol",null,t))};oe.Item=X,oe.Separator=J;var ie=oe,ce=n(19941),le=n(6825),se=n(14965),ue=n(60640),fe=function(e,t,n){return t&&n?u.createElement(ue.Z,{componentName:"PageHeader"},(function(r){var a=r.back;return u.createElement("div",{className:"".concat(e,"-back")},u.createElement(se.Z,{onClick:function(e){null==n||n(e)},className:"".concat(e,"-back-button"),"aria-label":a},t))})):null},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?u.createElement(K,null):u.createElement(H,null)},ve=function(e){var t=(0,A.Z)(!1),n=(0,M.Z)(t,2),r=n[0],o=n[1],i=function(e){var t=e.width;o(t<768,!0)};return u.createElement(m.C,null,(function(t){var n,o,c=t.getPrefixCls,l=t.pageHeader,s=t.direction,f=e.prefixCls,v=e.style,m=e.footer,h=e.children,b=e.breadcrumb,y=e.breadcrumbRender,g=e.className,x=!0;"ghost"in e?x=e.ghost:l&&"ghost"in l&&(x=l.ghost);var Z=c("page-header",f),E=(null==b?void 0:b.routes)?function(e){return u.createElement(ie,e)}(b):null,C=b&&"props"in b,w=null!==(o=null==y?void 0:y(e,E))&&void 0!==o?o:E,k=C?b:w,N=d()(Z,g,(n={"has-breadcrumb":!!k,"has-footer":!!m},(0,a.Z)(n,"".concat(Z,"-ghost"),x),(0,a.Z)(n,"".concat(Z,"-rtl"),"rtl"===s),(0,a.Z)(n,"".concat(Z,"-compact"),r),n));return u.createElement(p.Z,{onResize:i},u.createElement("div",{className:N,style:v},k,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=t.title,a=t.avatar,o=t.subTitle,i=t.tags,c=t.extra,l=t.onBack,s="".concat(e,"-heading"),f=r||o||i||c;if(!f)return null;var d=de(t,n),v=fe(e,d,l),p=v||a||f;return u.createElement("div",{className:s},p&&u.createElement("div",{className:"".concat(s,"-left")},v,a&&u.createElement(ce.C,a),r&&u.createElement("span",{className:"".concat(s,"-title"),title:"string"==typeof r?r:void 0},r),o&&u.createElement("span",{className:"".concat(s,"-sub-title"),title:"string"==typeof o?o:void 0},o),i&&u.createElement("span",{className:"".concat(s,"-tags")},i)),c&&u.createElement("span",{className:"".concat(s,"-extra")},u.createElement(le.Z,null,c)))}(Z,e,s),h&&function(e,t){return u.createElement("div",{className:"".concat(e,"-content")},t)}(Z,h),function(e,t){return t?u.createElement("div",{className:"".concat(e,"-footer")},t):null}(Z,m)))}))},pe=n(58733),me=n(75782),he=(n(73259),n(37188)),be=n(26143),ye=n(4637),ge=n(75790),xe=n(71770),Ze=["children","className","extra","style","renderContent"],Ee=function(e){var t=e.children,n=e.className,r=e.extra,a=e.style,o=e.renderContent,i=(0,pe.Z)(e,Ze),c=(0,u.useContext)(I.ZP.ConfigContext).getPrefixCls,l=e.prefixCls||c("pro"),s="".concat(l,"-footer-bar"),f=(0,u.useContext)(ge.Z),v=(0,u.useMemo)((function(){var e=f.hasSiderMenu,t=f.isMobile,n=f.siderWidth;if(e)return n?t?"100%":"calc(100% - ".concat(n,"px)"):"100%"}),[f.collapsed,f.hasSiderMenu,f.isMobile,f.siderWidth]),p=(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)("div",{className:"".concat(s,"-left"),children:r}),(0,ye.jsx)("div",{className:"".concat(s,"-right"),children:t})]});return(0,u.useEffect)((function(){return f&&(null==f?void 0:f.setHasFooterToolbar)?(null==f||f.setHasFooterToolbar(!0),function(){var e;null==f||null===(e=f.setHasFooterToolbar)||void 0===e||e.call(f,!1)}):function(){}}),[]),(0,ye.jsx)("div",(0,me.Z)((0,me.Z)({className:d()(n,"".concat(s)),style:(0,me.Z)({width:v},a)},(0,xe.Z)(i,["prefixCls"])),{},{children:o?o((0,me.Z)((0,me.Z)((0,me.Z)({},e),f),{},{leftWidth:v}),p):p}))},Ce=function(e){var t=(0,u.useContext)(ge.Z),n=e.children,r=e.contentWidth,a=e.className,o=e.style,i=(0,u.useContext)(I.ZP.ConfigContext).getPrefixCls,c=e.prefixCls||i("pro"),l=r||t.contentWidth,s="".concat(c,"-grid-content");return(0,ye.jsx)("div",{className:d()(s,a,{wide:"Fixed"===l}),style:o,children:(0,ye.jsx)("div",{className:"".concat(c,"-grid-content-children"),children:n})})},we=n(74596),ke=n(91600),Ne=function(e){var t=e.children,n=e.style,r=e.className,a=e.markStyle,o=e.markClassName,i=e.zIndex,c=void 0===i?9:i,l=e.gapX,s=void 0===l?212:l,f=e.gapY,v=void 0===f?222:f,p=e.width,m=void 0===p?120:p,h=e.height,b=void 0===h?64:h,y=e.rotate,g=void 0===y?-22:y,x=e.image,Z=e.content,E=e.offsetLeft,C=e.offsetTop,w=e.fontStyle,k=void 0===w?"normal":w,N=e.fontWeight,P=void 0===N?"normal":N,R=e.fontColor,T=void 0===R?"rgba(0,0,0,.15)":R,S=e.fontSize,j=void 0===S?16:S,O=e.fontFamily,M=void 0===O?"sans-serif":O,A=e.prefixCls,B=(0,(0,u.useContext)(I.ZP.ConfigContext).getPrefixCls)("pro-layout-watermark",A),L=d()("".concat(B,"-wrapper"),r),D=d()(B,o),_=(0,u.useState)(""),H=(0,ke.Z)(_,2),z=H[0],F=H[1];return(0,u.useEffect)((function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),r="".concat((s+m)*n,"px"),a="".concat((v+b)*n,"px"),o=E||s/2,i=C||v/2;if(e.setAttribute("width",r),e.setAttribute("height",a),t){t.translate(o*n,i*n),t.rotate(Math.PI/180*Number(g));var c=m*n,l=b*n;if(x){var u=new Image;u.crossOrigin="anonymous",u.referrerPolicy="no-referrer",u.src=x,u.onload=function(){t.drawImage(u,0,0,c,l),F(e.toDataURL())}}else if(Z){var f=Number(j)*n;t.font="".concat(k," normal ").concat(P," ").concat(f,"px/").concat(l,"px ").concat(M),t.fillStyle=T,Array.isArray(Z)?null==Z||Z.forEach((function(e,n){return t.fillText(e,0,50*n)})):t.fillText(Z,0,0),F(e.toDataURL())}}else console.error("当前环境不支持Canvas")}),[s,v,E,C,g,k,P,m,b,M,T,x,Z,j]),(0,ye.jsxs)("div",{style:(0,me.Z)({position:"relative"},n),className:L,children:[t,(0,ye.jsx)("div",{className:D,style:(0,me.Z)((0,me.Z)({zIndex:c,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(s+m,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},z?{backgroundImage:"url('".concat(z,"')")}:null),a)})]})},Pe=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Re=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];var Te=function(e){var t=e.tabList,n=e.tabActiveKey,r=e.onTabChange,a=e.tabBarExtraContent,o=e.tabProps,i=e.prefixedClassName;return Array.isArray(t)||a?(0,ye.jsx)(he.Z,(0,me.Z)((0,me.Z)({className:"".concat(i,"-tabs"),activeKey:n,onChange:function(e){r&&r(e)},tabBarExtraContent:a},o),{},{children:null==t?void 0:t.map((function(e,t){return(0,u.createElement)(he.Z.TabPane,(0,me.Z)((0,me.Z)({},e),{},{tab:e.tab,key:e.key||t}))}))})):null},Se=function(e,t,n){return e||t?(0,ye.jsx)("div",{className:"".concat(n,"-detail"),children:(0,ye.jsx)("div",{className:"".concat(n,"-main"),children:(0,ye.jsxs)("div",{className:"".concat(n,"-row"),children:[e&&(0,ye.jsx)("div",{className:"".concat(n,"-content"),children:e}),t&&(0,ye.jsx)("div",{className:"".concat(n,"-extraContent"),children:t})]})})}):null},je=function(e){var t,n=(0,u.useContext)(ge.Z),r=e.title,a=e.content,o=e.pageHeaderRender,i=e.header,c=e.prefixedClassName,l=e.extraContent,s=(e.style,e.prefixCls),f=e.breadcrumbRender,d=(0,pe.Z)(e,Pe),v=(0,u.useMemo)((function(){if(f)return f}),[f]);if(!1===o)return null;if(o)return(0,ye.jsxs)(ye.Fragment,{children:[" ",o((0,me.Z)((0,me.Z)({},e),n))]});var p=r;r||!1===r||(p=n.title);var m=(0,me.Z)((0,me.Z)((0,me.Z)({},n),{},{title:p},d),{},{footer:Te((0,me.Z)((0,me.Z)({},d),{},{breadcrumbRender:f,prefixedClassName:c}))},i),h=m.breadcrumb,b=!(h&&((null==h?void 0:h.itemRender)||(null==h||null===(t=h.routes)||void 0===t?void 0:t.length))||f);return["title","subTitle","extra","tags","footer","avatar","backIcon"].every((function(e){return!m[e]}))&&b&&!a&&!l?null:(0,ye.jsx)("div",{className:"".concat(c,"-warp"),children:(0,ye.jsx)(ve,(0,me.Z)((0,me.Z)({},m),{},{breadcrumb:!1===f?void 0:(0,me.Z)((0,me.Z)({},m.breadcrumb),n.breadcrumbProps),breadcrumbRender:v,prefixCls:s,children:(null==i?void 0:i.children)||Se(a,l,c)}))})},Oe=function(e){var t,n,r=e.children,a=e.loading,o=void 0!==a&&a,i=e.className,c=e.style,l=e.footer,s=e.affixProps,f=e.ghost,v=e.fixedHeader,p=e.breadcrumbRender,m=(0,pe.Z)(e,Re),h=(0,u.useContext)(ge.Z),b=(0,u.useContext)(I.ZP.ConfigContext).getPrefixCls,y=e.prefixCls||b("pro"),g="".concat(y,"-page-container"),x=d()(g,i,(t={},(0,O.Z)(t,"".concat(y,"-page-container-ghost"),f),(0,O.Z)(t,"".concat(y,"-page-container-with-footer"),l),t)),Z=(0,u.useMemo)((function(){return r?(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)("div",{className:"".concat(g,"-children-content"),children:r}),h.hasFooterToolbar&&(0,ye.jsx)("div",{style:{height:48,marginTop:24}})]}):null}),[r,g,h.hasFooterToolbar]),E=(0,u.useMemo)((function(){var e;return 0!=p&&(p||(null==m||null===(e=m.header)||void 0===e?void 0:e.breadcrumbRender))}),[p,null==m||null===(n=m.header)||void 0===n?void 0:n.breadcrumbRender]),C=(0,ye.jsx)(je,(0,me.Z)((0,me.Z)({},m),{},{breadcrumbRender:E,ghost:f,prefixCls:void 0,prefixedClassName:g})),w=(0,u.useMemo)((function(){if(u.isValidElement(o))return o;if("boolean"==typeof o&&!o)return null;var e=function(e){return"object"===(0,be.Z)(e)?e:{spinning:e}}(o);return e.spinning?(0,ye.jsx)(we.Z,(0,me.Z)({},e)):null}),[o]),k=(0,u.useMemo)((function(){var t=w||Z;if(e.waterMarkProps||h.waterMarkProps){var n=(0,me.Z)((0,me.Z)({},h.waterMarkProps),e.waterMarkProps);return(0,ye.jsx)(Ne,(0,me.Z)((0,me.Z)({},n),{},{children:t}))}return t}),[e.waterMarkProps,h.waterMarkProps,w,Z]);return(0,ye.jsxs)("div",{style:c,className:x,children:[v&&C?(0,ye.jsx)(j,(0,me.Z)((0,me.Z)({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},s),{},{children:C})):C,k&&(0,ye.jsx)(Ce,{children:k}),l&&(0,ye.jsx)(Ee,{prefixCls:y,children:l})]})}},74596:function(e,t,n){var r=n(75782),a=(n(99850),n(73180)),o=n(58733),i=n(4637),c=["isLoading","pastDelay","timedOut","error","retry"];t.Z=function(e){e.isLoading,e.pastDelay,e.timedOut,e.error,e.retry;var t=(0,o.Z)(e,c);return(0,i.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:(0,i.jsx)(a.Z,(0,r.Z)({size:"large"},t))})}},14965:function(e,t,n){var r=n(62081),a=n(59496),o=n(98593),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},c={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},l=a.forwardRef((function(e,t){var n=e.style,l=e.noStyle,s=e.disabled,u=i(e,["style","noStyle","disabled"]),f={};return l||(f=(0,r.Z)({},c)),s&&(f.pointerEvents="none"),f=(0,r.Z)((0,r.Z)({},f),n),a.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},u,{onKeyDown:function(e){e.keyCode===o.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===o.Z.ENTER&&r&&r()},style:f}))}));t.Z=l},28471:function(e,t,n){n(84701),n(7085)},37188:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(62081),a=n(82269),o=n(59496),i=n(51163),c=n(24572),l=n(91600),s=n(26143),u=n(58733),f=n(75782),d=n(19803),v=n.n(d),p=n(79014),m=n(64065),h=n(25725),b=n(49544),y=n(11653),g=n(22087);function x(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,y.Z.cancel(t.current)}}),[]),function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n.current||(y.Z.cancel(t.current),t.current=(0,y.Z)((function(){e.apply(void 0,a)})))}}var Z=n(98593);function E(e,t){var n,r=e.prefixCls,a=e.id,i=e.active,l=e.tab,s=l.key,u=l.tab,f=l.disabled,d=l.closeIcon,p=e.closable,m=e.renderWrapper,h=e.removeAriaLabel,b=e.editable,y=e.onClick,g=e.onRemove,x=e.onFocus,E=e.style,C="".concat(r,"-tab");o.useEffect((function(){return g}),[]);var w=b&&!1!==p&&!f;function k(e){f||y(e)}var N=o.createElement("div",{key:s,ref:t,className:v()(C,(n={},(0,c.Z)(n,"".concat(C,"-with-remove"),w),(0,c.Z)(n,"".concat(C,"-active"),i),(0,c.Z)(n,"".concat(C,"-disabled"),f),n)),style:E,onClick:k},o.createElement("div",{role:"tab","aria-selected":i,id:a&&"".concat(a,"-tab-").concat(s),className:"".concat(C,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[Z.Z.SPACE,Z.Z.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:x},u),w&&o.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),b.onEdit("remove",{key:s,event:t})}},d||b.removeIcon||"×"));return m?m(N):N}var C=o.forwardRef(E),w={width:0,height:0,left:0,top:0};var k={width:0,height:0,left:0,top:0,right:0};var N=n(61019),P=n(63062);function R(e,t){var n=e.prefixCls,r=e.editable,a=e.locale,i=e.style;return r&&!1!==r.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null==a?void 0:a.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var T=o.forwardRef(R);function S(e,t){var n=e.prefixCls,r=e.id,a=e.tabs,i=e.locale,s=e.mobile,u=e.moreIcon,f=void 0===u?"More":u,d=e.moreTransitionName,p=e.style,m=e.className,h=e.editable,b=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,x=e.onTabClick,E=(0,o.useState)(!1),C=(0,l.Z)(E,2),w=C[0],k=C[1],R=(0,o.useState)(null),S=(0,l.Z)(R,2),j=S[0],O=S[1],I="".concat(r,"-more-popup"),M="".concat(n,"-dropdown"),A=null!==j?"".concat(I,"-").concat(j):null,B=null==i?void 0:i.dropdownAriaLabel;var L=o.createElement(N.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;x(t,n),k(!1)},id:I,tabIndex:-1,role:"listbox","aria-activedescendant":A,selectedKeys:[j],"aria-label":void 0!==B?B:"expanded dropdown"},a.map((function(e){var t=h&&!1!==e.closable&&!e.disabled;return o.createElement(N.sN,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},o.createElement("span",null,e.tab),t&&o.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n,r;t.stopPropagation(),n=t,r=e.key,n.preventDefault(),n.stopPropagation(),h.onEdit("remove",{key:r,event:n})}},e.closeIcon||h.removeIcon||"×"))})));function D(e){for(var t=a.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===j}))||0,r=t.length,o=0;o<r;o+=1){var i=t[n=(n+e+r)%r];if(!i.disabled)return void O(i.key)}}(0,o.useEffect)((function(){var e=document.getElementById(A);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[j]),(0,o.useEffect)((function(){w||O(null)}),[w]);var _=(0,c.Z)({},y?"marginRight":"marginLeft",b);a.length||(_.visibility="hidden",_.order=1);var H=v()((0,c.Z)({},"".concat(M,"-rtl"),y)),z=s?null:o.createElement(P.Z,{prefixCls:M,overlay:L,trigger:["hover"],visible:w,transitionName:d,onVisibleChange:k,overlayClassName:H,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:_,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case Z.Z.UP:D(-1),e.preventDefault();break;case Z.Z.DOWN:D(1),e.preventDefault();break;case Z.Z.ESC:k(!1);break;case Z.Z.SPACE:case Z.Z.ENTER:null!==j&&x(j,e)}else[Z.Z.DOWN,Z.Z.SPACE,Z.Z.ENTER].includes(t)&&(k(!0),e.preventDefault())}},f));return o.createElement("div",{className:v()("".concat(n,"-nav-operations"),m),style:p,ref:t},z,o.createElement(T,{prefixCls:n,locale:i,editable:h}))}var j=o.memo(o.forwardRef(S),(function(e,t){return t.tabMoving})),O=(0,o.createContext)(null),I=Math.pow(.995,20);function M(e,t){var n=o.useRef(e),r=o.useState({}),a=(0,l.Z)(r,2)[1];return[n.current,function(e){var r="function"==typeof e?e(n.current):e;r!==n.current&&t(r,n.current),n.current=r,a({})}]}var A=function(e){var t,n=e.position,r=e.prefixCls,a=e.extra;if(!a)return null;var i={};return a&&"object"===(0,s.Z)(a)&&!o.isValidElement(a)?i=a:i.right=a,"right"===n&&(t=i.right),"left"===n&&(t=i.left),t?o.createElement("div",{className:"".concat(r,"-extra-content")},t):null};function B(e,t){var n,r,a=o.useContext(O),s=a.prefixCls,u=a.tabs,d=e.className,p=e.style,m=e.id,h=e.animated,Z=e.activeKey,E=e.rtl,N=e.extra,P=e.editable,R=e.locale,S=e.tabPosition,B=e.tabBarGutter,L=e.children,D=e.onTabClick,_=e.onTabScroll,H=(0,o.useRef)(),z=(0,o.useRef)(),F=(0,o.useRef)(),K=(0,o.useRef)(),W=(r=(0,o.useRef)(new Map),[function(e){return r.current.has(e)||r.current.set(e,o.createRef()),r.current.get(e)},function(e){r.current.delete(e)}]),U=(0,l.Z)(W,2),V=U[0],G=U[1],Y="top"===S||"bottom"===S,X=M(0,(function(e,t){Y&&_&&_({direction:e>t?"left":"right"})})),q=(0,l.Z)(X,2),J=q[0],Q=q[1],$=M(0,(function(e,t){!Y&&_&&_({direction:e>t?"top":"bottom"})})),ee=(0,l.Z)($,2),te=ee[0],ne=ee[1],re=(0,o.useState)(0),ae=(0,l.Z)(re,2),oe=ae[0],ie=ae[1],ce=(0,o.useState)(0),le=(0,l.Z)(ce,2),se=le[0],ue=le[1],fe=(0,o.useState)(null),de=(0,l.Z)(fe,2),ve=de[0],pe=de[1],me=(0,o.useState)(null),he=(0,l.Z)(me,2),be=he[0],ye=he[1],ge=(0,o.useState)(0),xe=(0,l.Z)(ge,2),Ze=xe[0],Ee=xe[1],Ce=(0,o.useState)(0),we=(0,l.Z)(Ce,2),ke=we[0],Ne=we[1],Pe=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),r=(0,l.Z)(n,2)[1],a=(0,o.useRef)("function"==typeof e?e():e),i=x((function(){var e=a.current;t.current.forEach((function(t){e=t(e)})),t.current=[],a.current=e,r({})}));return[a.current,function(e){t.current.push(e),i()}]}(new Map),Re=(0,l.Z)(Pe,2),Te=Re[0],Se=Re[1],je=function(e,t,n){return(0,o.useMemo)((function(){for(var n,r=new Map,a=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,o=a.left+a.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||w);var u=r.get(l)||(0,f.Z)({},s);u.right=o-u.left-u.width,r.set(l,u)}return r}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Te,oe),Oe="".concat(s,"-nav-operations-hidden"),Ie=0,Me=0;function Ae(e){return e<Ie?Ie:e>Me?Me:e}Y?E?(Ie=0,Me=Math.max(0,oe-ve)):(Ie=Math.min(0,ve-oe),Me=0):(Ie=Math.min(0,be-se),Me=0);var Be=(0,o.useRef)(),Le=(0,o.useState)(),De=(0,l.Z)(Le,2),_e=De[0],He=De[1];function ze(){He(Date.now())}function Fe(){window.clearTimeout(Be.current)}function Ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=je.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=J;E?t.right<J?n=t.right:t.right+t.width>J+ve&&(n=t.right+t.width-ve):t.left<-J?n=-t.left:t.left+t.width>-J+ve&&(n=-(t.left+t.width-ve)),ne(0),Q(Ae(n))}else{var r=te;t.top<-te?r=-t.top:t.top+t.height>-te+be&&(r=-(t.top+t.height-be)),Q(0),ne(Ae(r))}}!function(e,t){var n=(0,o.useState)(),r=(0,l.Z)(n,2),a=r[0],i=r[1],c=(0,o.useState)(0),s=(0,l.Z)(c,2),u=s[0],f=s[1],d=(0,o.useState)(0),v=(0,l.Z)(d,2),p=v[0],m=v[1],h=(0,o.useState)(),b=(0,l.Z)(h,2),y=b[0],g=b[1],x=(0,o.useRef)(),Z=(0,o.useRef)(),E=(0,o.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,r=t.screenY;i({x:n,y:r}),window.clearInterval(x.current)},onTouchMove:function(e){if(a){e.preventDefault();var n=e.touches[0],r=n.screenX,o=n.screenY;i({x:r,y:o});var c=r-a.x,l=o-a.y;t(c,l);var s=Date.now();f(s),m(s-u),g({x:c,y:l})}},onTouchEnd:function(){if(a&&(i(null),g(null),y)){var e=y.x/p,n=y.y/p,r=Math.abs(e),o=Math.abs(n);if(Math.max(r,o)<.1)return;var c=e,l=n;x.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(x.current):t(20*(c*=I),20*(l*=I))}),20)}},onWheel:function(e){var n=e.deltaX,r=e.deltaY,a=0,o=Math.abs(n),i=Math.abs(r);o===i?a="x"===Z.current?n:r:o>i?(a=n,Z.current="x"):(a=r,Z.current="y"),t(-a,-a)&&e.preventDefault()}},o.useEffect((function(){function t(e){E.current.onTouchMove(e)}function n(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(H,(function(e,t){function n(e,t){e((function(e){return Ae(e+t)}))}if(Y){if(ve>=oe)return!1;n(Q,e)}else{if(be>=se)return!1;n(ne,t)}return Fe(),ze(),!0})),(0,o.useEffect)((function(){return Fe(),_e&&(Be.current=window.setTimeout((function(){He(0)}),100)),Fe}),[_e]);var We=function(e,t,n,r,a){var i,c,l,s=a.tabs,u=a.tabPosition,f=a.rtl;["top","bottom"].includes(u)?(i="width",c=f?"right":"left",l=Math.abs(t.left)):(i="height",c="top",l=-t.top);var d=t[i],v=n[i],p=r[i],m=d;return v+p>d&&v<d&&(m=d-p),(0,o.useMemo)((function(){if(!s.length)return[0,0];for(var t=s.length,n=t,r=0;r<t;r+=1){var a=e.get(s[r].key)||k;if(a[c]+a[i]>l+m){n=r-1;break}}for(var o=0,u=t-1;u>=0;u-=1)if((e.get(s[u].key)||k)[c]<l){o=u+1;break}return[o,n]}),[e,l,m,u,s.map((function(e){return e.key})).join("_"),f])}(je,{width:ve,height:be,left:J,top:te},{width:oe,height:se},{width:Ze,height:ke},(0,f.Z)((0,f.Z)({},e),{},{tabs:u})),Ue=(0,l.Z)(We,2),Ve=Ue[0],Ge=Ue[1],Ye={};"top"===S||"bottom"===S?Ye[E?"marginRight":"marginLeft"]=B:Ye.marginTop=B;var Xe=u.map((function(e,t){var n=e.key;return o.createElement(C,{id:m,prefixCls:s,key:n,tab:e,style:0===t?void 0:Ye,closable:e.closable,editable:P,active:n===Z,renderWrapper:L,removeAriaLabel:null==R?void 0:R.removeAriaLabel,ref:V(n),onClick:function(e){D(n,e)},onRemove:function(){G(n)},onFocus:function(){Ke(n),ze(),H.current&&(E||(H.current.scrollLeft=0),H.current.scrollTop=0)}})})),qe=x((function(){var e,t,n,r,a,o,i=(null===(e=H.current)||void 0===e?void 0:e.offsetWidth)||0,c=(null===(t=H.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=K.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(r=K.current)||void 0===r?void 0:r.offsetHeight)||0;pe(i),ye(c),Ee(l),Ne(s);var f=((null===(a=z.current)||void 0===a?void 0:a.offsetWidth)||0)-l,d=((null===(o=z.current)||void 0===o?void 0:o.offsetHeight)||0)-s;ie(f),ue(d),Se((function(){var e=new Map;return u.forEach((function(t){var n=t.key,r=V(n).current;r&&e.set(n,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))})),Je=u.slice(0,Ve),Qe=u.slice(Ge+1),$e=[].concat((0,b.Z)(Je),(0,b.Z)(Qe)),et=(0,o.useState)(),tt=(0,l.Z)(et,2),nt=tt[0],rt=tt[1],at=je.get(Z),ot=(0,o.useRef)();function it(){y.Z.cancel(ot.current)}(0,o.useEffect)((function(){var e={};return at&&(Y?(E?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),it(),ot.current=(0,y.Z)((function(){rt(e)})),it}),[at,Y,E]),(0,o.useEffect)((function(){Ke()}),[Z,at,je,Y]),(0,o.useEffect)((function(){qe()}),[E,B,Z,u.map((function(e){return e.key})).join("_")]);var ct,lt,st,ut,ft=!!$e.length,dt="".concat(s,"-nav-wrap");return Y?E?(lt=J>0,ct=J+ve<oe):(ct=J<0,lt=-J+ve<oe):(st=te<0,ut=-te+be<se),o.createElement("div",{ref:t,role:"tablist",className:v()("".concat(s,"-nav"),d),style:p,onKeyDown:function(){ze()}},o.createElement(A,{position:"left",extra:N,prefixCls:s}),o.createElement(g.Z,{onResize:qe},o.createElement("div",{className:v()(dt,(n={},(0,c.Z)(n,"".concat(dt,"-ping-left"),ct),(0,c.Z)(n,"".concat(dt,"-ping-right"),lt),(0,c.Z)(n,"".concat(dt,"-ping-top"),st),(0,c.Z)(n,"".concat(dt,"-ping-bottom"),ut),n)),ref:H},o.createElement(g.Z,{onResize:qe},o.createElement("div",{ref:z,className:"".concat(s,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat(te,"px)"),transition:_e?"none":void 0}},Xe,o.createElement(T,{ref:K,prefixCls:s,locale:R,editable:P,style:(0,f.Z)((0,f.Z)({},0===Xe.length?void 0:Ye),{},{visibility:ft?"hidden":null})}),o.createElement("div",{className:v()("".concat(s,"-ink-bar"),(0,c.Z)({},"".concat(s,"-ink-bar-animated"),h.inkBar)),style:nt}))))),o.createElement(j,(0,i.Z)({},e,{removeAriaLabel:null==R?void 0:R.removeAriaLabel,ref:F,prefixCls:s,tabs:$e,className:!ft&&Oe,tabMoving:!!_e})),o.createElement(A,{position:"right",extra:N,prefixCls:s}))}var L=o.forwardRef(B);function D(e){var t=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,s=o.useContext(O),u=s.prefixCls,f=s.tabs,d=r.tabPane,p=f.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:v()("".concat(u,"-content-holder"))},o.createElement("div",{className:v()("".concat(u,"-content"),"".concat(u,"-content-").concat(a),(0,c.Z)({},"".concat(u,"-content-animated"),d)),style:p&&d?(0,c.Z)({},i?"marginRight":"marginLeft","-".concat(p,"00%")):null},f.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:u,tabKey:e.key,id:t,animated:d,active:e.key===n,destroyInactiveTabPane:l})}))))}function _(e){var t=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,i=e.id,c=e.active,s=e.animated,u=e.destroyInactiveTabPane,d=e.tabKey,p=e.children,m=o.useState(n),h=(0,l.Z)(m,2),b=h[0],y=h[1];o.useEffect((function(){c?y(!0):u&&y(!1)}),[c,u]);var g={};return c||(s?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),o.createElement("div",{id:i&&"".concat(i,"-panel-").concat(d),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(d),"aria-hidden":!c,style:(0,f.Z)((0,f.Z)({},g),a),className:v()("".concat(t,"-tabpane"),c&&"".concat(t,"-tabpane-active"),r)},(c||b||n)&&p)}var H=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],z=0;function F(e,t){var n,r,a=e.id,d=e.prefixCls,b=void 0===d?"rc-tabs":d,y=e.className,g=e.children,x=e.direction,Z=e.activeKey,E=e.defaultActiveKey,C=e.editable,w=e.animated,k=void 0===w?{inkBar:!0,tabPane:!1}:w,N=e.tabPosition,P=void 0===N?"top":N,R=e.tabBarGutter,T=e.tabBarStyle,S=e.tabBarExtraContent,j=e.locale,I=e.moreIcon,M=e.moreTransitionName,A=e.destroyInactiveTabPane,B=e.renderTabBar,_=e.onChange,F=e.onTabClick,K=e.onTabScroll,W=(0,u.Z)(e,H),U=function(e){return(0,p.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,f.Z)((0,f.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(g),V="rtl"===x;r=!1===k?{inkBar:!1,tabPane:!1}:!0===k?{inkBar:!0,tabPane:!0}:(0,f.Z)({inkBar:!0,tabPane:!1},"object"===(0,s.Z)(k)?k:{});var G=(0,o.useState)(!1),Y=(0,l.Z)(G,2),X=Y[0],q=Y[1];(0,o.useEffect)((function(){q((0,m.Z)())}),[]);var J=(0,h.Z)((function(){var e;return null===(e=U[0])||void 0===e?void 0:e.key}),{value:Z,defaultValue:E}),Q=(0,l.Z)(J,2),$=Q[0],ee=Q[1],te=(0,o.useState)((function(){return U.findIndex((function(e){return e.key===$}))})),ne=(0,l.Z)(te,2),re=ne[0],ae=ne[1];(0,o.useEffect)((function(){var e,t=U.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(re,U.length-1)),ee(null===(e=U[t])||void 0===e?void 0:e.key));ae(t)}),[U.map((function(e){return e.key})).join("_"),$,re]);var oe=(0,h.Z)(null,{value:a}),ie=(0,l.Z)(oe,2),ce=ie[0],le=ie[1],se=P;X&&!["left","right"].includes(P)&&(se="top"),(0,o.useEffect)((function(){a||(le("rc-tabs-".concat(z)),z+=1)}),[]);var ue,fe={id:ce,activeKey:$,animated:r,tabPosition:se,rtl:V,mobile:X},de=(0,f.Z)((0,f.Z)({},fe),{},{editable:C,locale:j,moreIcon:I,moreTransitionName:M,tabBarGutter:R,onTabClick:function(e,t){null==F||F(e,t);var n=e!==$;ee(e),n&&(null==_||_(e))},onTabScroll:K,extra:S,style:T,panes:g});return ue=B?B(de,L):o.createElement(L,de),o.createElement(O.Provider,{value:{tabs:U,prefixCls:b}},o.createElement("div",(0,i.Z)({ref:t,id:a,className:v()(b,"".concat(b,"-").concat(se),(n={},(0,c.Z)(n,"".concat(b,"-mobile"),X),(0,c.Z)(n,"".concat(b,"-editable"),C),(0,c.Z)(n,"".concat(b,"-rtl"),V),n),y)},W),ue,o.createElement(D,(0,i.Z)({destroyInactiveTabPane:A},fe,{animated:r}))))}var K=o.forwardRef(F);K.TabPane=_;var W=K,U=n(85210),V=n(81193),G=n(84053),Y=n(68494),X=n(2331),q=n(5340),J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Q(e){var t,n=e.type,i=e.className,c=e.size,l=e.onEdit,s=e.hideAdd,u=e.centered,f=e.addIcon,d=J(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=d.prefixCls,m=d.moreIcon,h=void 0===m?o.createElement(U.Z,null):m,b=o.useContext(X.E_),y=b.getPrefixCls,g=b.direction,x=y("tabs",p);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,r=t.event;null==l||l("add"===e?r:n,e)},removeIcon:o.createElement(G.Z,null),addIcon:f||o.createElement(V.Z,null),showAdd:!0!==s});var Z=y();return(0,Y.Z)(!("onPrevClick"in d)&&!("onNextClick"in d),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(q.Z.Consumer,null,(function(e){var l,s=void 0!==c?c:e;return o.createElement(W,(0,r.Z)({direction:g,moreTransitionName:"".concat(Z,"-slide-up")},d,{className:v()((l={},(0,a.Z)(l,"".concat(x,"-").concat(s),s),(0,a.Z)(l,"".concat(x,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(l,"".concat(x,"-editable-card"),"editable-card"===n),(0,a.Z)(l,"".concat(x,"-centered"),u),l),i),editable:t,moreIcon:h,prefixCls:x}))}))}Q.TabPane=_;var $=Q},73259:function(e,t,n){n(84701)}}]);