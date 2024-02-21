"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[87909],{607423:(e,t,o)=>{o.d(t,{isNativeUIInteraction:()=>r});var n=o(591800);function i(e){if("INPUT"===e.tagName){const t=e.type;return"text"===t||"email"===t||"number"===t||"password"===t||"search"===t||"tel"===t||"url"===t}return"TEXTAREA"===e.tagName||e.isContentEditable}function r(e,t){if(!t)return!1;const o=255&e;if(27===o||o>>>4==7)return!1;switch(e^o){case n.Modifiers.Alt:return(38===o||40===o)&&"SELECT"===t.tagName||i(t);case n.Modifiers.Alt+n.Modifiers.Shift:return i(t);case n.Modifiers.Mod:if(67===o||!n.isMacKeyboard&&45===o){const e=t.ownerDocument&&t.ownerDocument.getSelection();if(e&&!e.isCollapsed)return!0}return i(t);case n.Modifiers.Mod+n.Modifiers.Shift:return o>=33&&o<=40&&i(t);case n.Modifiers.Shift:case 0:return 9===o?!(!t.ownerDocument||t===t.ownerDocument.body||t===t.ownerDocument.documentElement):(!function(e){if("BUTTON"===e.tagName)return!0;if("INPUT"===e.tagName){const t=e.type;if("submit"===t||"button"===t||"reset"===t||"checkbox"===t||"radio"===t)return!0}return!1}(t)||13===o||32===o||9===o)&&("form"in t||t.isContentEditable)}return!1}},745269:(e,t,o)=>{o.d(t,{color:()=>i,dur:()=>n});const n=350;const i={black70:"#4A4A4A",black80:"#535353"}},673747:(e,t,o)=>{o.d(t,{hide:()=>y,showOnElement:()=>d});var n=o(778785),i=o(112539),r=o(630112),s=o(650151),l=o(779527),c=o(799786);let a=!1,u=null,m=null;n.mobiletouch||document.addEventListener("mouseover",(function(e){var t;if(null===(t=e.sourceCapabilities)||void 0===t?void 0:t.firesTouchEvents)return;const o=e.target,n=e.currentTarget,i=function(e,t,o){const n=[];for(;e&&e!==t;)e.classList&&e.classList.contains(o)&&n.push(e),e=e.parentElement||_(e.parentNode);return n}(o,n,"apply-common-tooltip"),r=()=>{m&&(m.destroy(),m=null)};for(const t of i){if("buttons"in e){if(1&e.buttons)continue}else if(1===e.which)continue;const o=()=>d(t);if(o()){const e=e=>n(null,!0),n=(i,s=!1)=>{t.removeEventListener("common-tooltip-update",o),t.removeEventListener("mouseleave",n),t.removeEventListener("mousedown",n),document.removeEventListener("scroll",e,{capture:!0}),r(),y(s)};t.addEventListener("common-tooltip-update",o),t.addEventListener("mouseleave",n),t.addEventListener("mousedown",n),document.addEventListener("scroll",e,{capture:!0}),null===m&&(m=(0,c.createGroup)({desc:"Tooltip"}),m.add({desc:"Hide",hotkey:27,handler:n}));break}}}),!0);const h=new MutationObserver((()=>{if(u&&u.options.target){let e;e="isConnected"in u.options.target?u.options.target.isConnected:document.body.contains(u.options.target),e||y()}})),d=(e,t={})=>{const{content:o,...n}=b(t),i=l.getDataFromTarget(e),r=Object.assign(i,n);return"none"!==o.type&&(r.content=o),!("none"===r.content.type&&!r.hotkey)&&(r.target=e,p(r),!0)},p=e=>{const t=b(e),o=l.getTooltip(t);if(u={options:t,element:o},(0,r.setTooltip)(o),(0,i.clearSchedule)(),!a)return l.hideTooltip(o),void(0,i.scheduleRender)((()=>v(o)),function(e){return"number"!=typeof e.tooltipDelay||isNaN(e.tooltipDelay)?500:e.tooltipDelay}(t))
;const{tooltipDebounce:n}=e;"number"!=typeof n||isNaN(n)?v(o):(0,i.scheduleRender)((()=>v(o)),n)};function f(){(0,r.empty)(),a=!1,u=null}const y=e=>{if((0,i.clearSchedule)(),h.disconnect(),!u)return;if(!e&&!a)return;const{element:t,options:o}=u,n=()=>{t.removeEventListener("mouseleave",n),l.hideTooltip(t),e?f():(0,i.scheduleRemove)((()=>{f()}),250)};o.tooltipHideDelay?(0,i.scheduleHide)((()=>{t.querySelector(":hover")?t.addEventListener("mouseleave",n):n()}),o.tooltipHideDelay):n()};function v(e){const{options:t}=(0,s.ensureNotNull)(u);if(l.setStyle(e,t),l.showTooltip(e),h.observe(document,{childList:!0,subtree:!0}),a=!0,t.forceHideOnMove){const e=()=>{document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",e),y()};document.addEventListener("mousemove",e),document.addEventListener("touchmove",e)}}function _(e){return e&&(e.nodeType===Node.ELEMENT_NODE?e:null)}function b(e){if(function(e){return"content"in e}(e))return e;const{inner:t,html:o,text:n,...i}=e;let r={type:"none"};return t&&(r={type:"element",data:t}),n&&(r={type:o?"html":"text",data:n}),{content:r,...i}}},750532:(e,t,o)=>{var n=o(673747);function i(e,t="x"){let o=!1;return"x"!==t&&"both"!==t||(o=o||e.offsetWidth<e.scrollWidth),"y"!==t&&"both"!==t||(o=o||e.offsetHeight<e.scrollHeight),o}function r(e,t="x"){for(const o of Array.from(e.children))if(o instanceof HTMLElement&&(i(o,t)||r(o,t)))return!0;return!1}function s(e){let t="x";return e.matches(".apply-overflow-tooltip--direction_both")?t="both":e.matches(".apply-overflow-tooltip--direction_y")&&(t="y"),t}function l(e){const t=e.getAttribute("data-overflow-tooltip-text");let o="";return o=t||(e.matches&&e.matches(".apply-overflow-tooltip--allow-text")?e.textContent||"":Array.from(e.childNodes).reduce(((e,t)=>(t.nodeType===Node.TEXT_NODE&&e.push(t.textContent||""),e)),[]).join("").trim()),o}function c(e,t){let o=!1;const n=e.children;for(let e=0;e<n.length;e++){const r=n[e];if(r instanceof HTMLElement&&i(r,t)){o=!0;break}}return o}(0,o(49336).whenDocumentReady)((()=>{document.addEventListener("mouseenter",(e=>{const t=e.target;if(t instanceof HTMLElement&&t.matches(".apply-overflow-tooltip")){const e=s(t);if(t.matches(".apply-overflow-tooltip--check-children-recursively")){if(!r(t,e))return}else if(t.matches(".apply-overflow-tooltip--check-children")){if(!c(t,e))return}else if(!i(t,e))return;(0,n.showOnElement)(t,{text:l(t)});const o=()=>{(0,n.hide)(),["mouseleave","mousedown"].forEach((e=>t.removeEventListener(e,o)))};["mouseleave","mousedown"].forEach((e=>t.addEventListener(e,o)))}}),!0),document.addEventListener("focus",(e=>{const t=e.target;if(t instanceof HTMLElement&&(t.matches(".apply-overflow-tooltip-focus")||t.querySelector(".apply-overflow-tooltip-focus"))){const e=t.matches(".apply-overflow-tooltip")?t:t.querySelector(".apply-overflow-tooltip"),o=s(e);if(e.matches(".apply-overflow-tooltip--check-children-recursively")){if(!r(e,o))return}else if(e.matches(".apply-overflow-tooltip--check-children")){if(!c(e,o))return}else if(!i(e,o))return;(0,n.showOnElement)(t,{
text:l(e)});const a=()=>{(0,n.hide)(),t.removeEventListener("blur",a)};t.addEventListener("blur",a)}}),!0)}))},780237:(e,t,o)=>{o.d(t,{TickerItemAbstract:()=>u});o(750532);var n=o(201089),i=o(327034),r=o(903972),s=o(707957),l=o(31341),c=o(17966);const a=(0,n.getLogger)("WidgetTicker");class u{constructor(e,t,o){this.onInit=new s.Delegate,this.onComplete=new s.Delegate,this.onError=new s.Delegate,this._quoteTickerComplete=null,this._isRunning=!1,this._prevQuoteSymbol=null,this._el=t||document.createElement("a"),this._symbolData=e,this._options=o||{},(0,r.validateSymbolData)(e)?(this.render(),this.start()):a.logError("symbolData is not valid")}render(){this._el.classList.add(this._getClass()),this._el.innerHTML=this._getView(),this._setTitle(),this._setLink()}start(){this._isRunning||(this._startQuoteTicker(),this._isRunning=!0)}stop(){this._isRunning&&(this._stopQuoteTicker(),this._isRunning=!1)}getElement(){return this._el}changeSymbol(e){const t=e.includes(":")?{proName:e}:{shortName:e};this._prevQuoteSymbol=this._getSymbolName(),this._symbolData=t,this._setTitle(),this._setLink(),this.stop(),this.start()}quoteTicker(){return this._quoteTicker}_getElementClass(e){return this._getClass()+"__"+e}_getSymbolName(){return this._symbolData.proName||this._symbolData.shortName}_renderSymbolLogo(e,t){const o=this._el.querySelector(".js-header-icon"),n=0===e.length?this._getPlaceholderLetter():void 0;o&&this._setSymbolLogoHtml(o,e,t,n)}_getPlaceholderLetter(){const e=this._symbolData.proName,t=e&&e.split(":")[1];return(this._symbolData.title||this._symbolData.description||t||""||" ")[0]}_setSymbolLogoHtml(e,t,o,n){if(t.length>0||void 0!==n){const i=(0,c.getCircleLogoAnyHtml)({logoUrls:t,size:o,className:this._getElementClass("icon"),placeholderLetter:n});e.innerHTML=i}else e.innerHTML=""}_setTitle(){const e=this._getElTitle();if(!e)return;const t=this._symbolData.title||this._symbolData.description||""||this._symbolData.shortName||this._symbolData.proName||"",o=(0,l.detectAutoDirection)(t);o&&(e.dir=o),e.textContent=t}_setLink(){if(!(this._el instanceof HTMLAnchorElement))return;const e=this._symbolData.linkPage;e&&(this._el.href=e),this._options.isEmbedWidget&&(this._el.target="_blank",this._el.rel="external noopener")}_startQuoteTicker(){if(!this._quoteTicker)return void this._createQuoteTicker();const e=this._getSymbolName();this._prevQuoteSymbol!==e?(this._destroyQuoteTicker(),this._createQuoteTicker()):this._quoteTicker.enable()}_stopQuoteTicker(){this._quoteTicker&&(this._quoteTicker.disable(),this._quoteTickerComplete=null)}_createQuoteTicker(){const e=this._getSymbolName(),t=this._getTickerOptions(),o=t.initedHook,n=t.setStateHook;this._quoteTickerComplete=null,this._quoteTicker=new i.QuoteTicker(e,this._el,{noSuchSymbolHook:()=>this.onError.fire("no_symbol"),permissionDeniedHook:()=>this.onError.fire("permission_denied"),...t,initedHook:(...e)=>{null==o||o(...e),this.onInit.fire(...e)},setStateHook:(e,t,o)=>{null==n||n(e,t,o),o&&null===this._quoteTickerComplete&&(this._quoteTickerComplete=o,this.onComplete.fire())}})
}_destroyQuoteTicker(){this._stopQuoteTicker(),delete this._quoteTicker}_getElTitle(){return this._el.querySelector(`.${this._getElementClass("title")}`)}}},903972:(e,t,o)=>{function n(e){return Boolean(e)&&("string"==typeof e.proName||"string"==typeof e.shortName)}o.d(t,{validateSymbolData:()=>n})},626333:(e,t,o)=>{function n(e,t=window){const o="theme-"+e,n=t.document.documentElement.classList;for(const e of Array.from(n))e.startsWith("theme-")&&e!==o&&n.remove(e);n.add(o)}o.d(t,{applyTheme:()=>n})},331633:(e,t,o)=>{o.d(t,{setTheme:()=>s});var n=o(401580),i=o(626333);const r=new n.WatchedValue;function s(e){r.setValue(e)}r.subscribe((e=>{(0,i.applyTheme)(e,window)}))},31341:(e,t,o)=>{o.d(t,{detectAutoDirection:()=>u,forceLTRStr:()=>l,isRtl:()=>n,stripLTRMarks:()=>s});o(64531);const n=()=>"rtl"===window.document.dir,i="‬",r=new RegExp("‎|‪|‫|‬","g");function s(e){return""!==e&&n()&&null!=e?e.replace(r,""):e}function l(e){return""!==e&&n()&&null!=e?"‪"+e+i:e}const c=/[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,a=/[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;function u(e){const t=c.exec(e);return t?a.test(t[0])?"rtl":"ltr":""}},777466:(e,t,o)=>{function n(e){e.preventDefault()}o.d(t,{preventDefault:()=>n})},702269:(e,t,o)=>{function n(e){return e.replace("{{shortName}}","{tvsymbol}").replace("{{proName}}","{tvprosymbol}").replace("{{symbol}}","{tvsymbol}").replace("{{exchange}}","{tvexchange}")}o.d(t,{replaceOldPlaceholders:()=>n})},194058:(e,t,o)=>{o.d(t,{makeWidgetSymbolLink:()=>r});var n=o(702269),i=o(503344);function r(e){const{symbol:t,customUrl:o,utmInfo:r,path:s,typespecs:l}=e;let c,a;return t.includes(":")?[a,c]=t.split(":"):c=t,o?(0,i.makeTemplateSymbolUrl)((0,n.replaceOldPlaceholders)(o),{proName:t}):(0,i.makeSymbolPageUrl)({shortName:c,exchange:a,typespecs:l},r,void 0,s)}}}]);