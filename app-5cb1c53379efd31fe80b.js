webpackJsonp([6],{"./.cache/api-runner-browser.js":function(e,n,t){"use strict";var o=[{plugin:t("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}},{plugin:t("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-22787959-1"}}];e.exports=function(e,n,t){var s=o.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:t?[t]:[]}},"./.cache/async-requires.js":function(e,n,t){"use strict";n.components={"page-component---node-modules-gatsby-plugin-offline-app-shell-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"page-component---src-pages-index-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},n.json={"offline-plugin-app-shell-fallback.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json"),"index.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json")},n.layouts={index:t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/babel-runtime/helpers/extends.js"),a=o(s),r=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=o(r),u=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=o(u),c=t("./node_modules/babel-runtime/helpers/createClass.js"),d=o(c),f=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=o(f),m=t("./node_modules/babel-runtime/helpers/inherits.js"),g=o(m),h=t("./node_modules/react/react.js"),v=o(h),b=t("./.cache/loader.js"),j=o(b),y=t("./.cache/emitter.js"),_=o(y),x=function(e){function n(e){(0,l.default)(this,n);var t=(0,p.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return t.state={location:e.location,pageResources:j.default.getResourcesForPathname(e.location.pathname)},t}return(0,g.default)(n,e),(0,d.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=j.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):j.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}}},{key:"componentDidMount",value:function(){var e=this;_.default.on("onPostLoadPageResources",function(n){n.page.path===j.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||this.state.pageResources.json!==n.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,a.default)({},this.props,this.state.pageResources.json)):null}}]),n}(v.default.Component);n.default=x},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/mitt/dist/mitt.js"),a=o(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=t.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,o.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(4,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/babel-runtime/core-js/get-iterator.js"),a=o(s),r=t("./.cache/find-page.js"),i=o(r),u=t("./.cache/emitter.js"),l=o(u),c=void 0,d={},f={},p={},m={},g={},h=[],v=[],b={},j=[],y={},_=function(e){return e&&e.default||e},x=void 0,R=!0;x=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){j=j.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var w=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},k=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){t(null,m[e])});else{var o="page-c"===e.slice(0,6)?f.components[e]:f.json[e];o(function(n,o){m[e]=o,t(n,o)})}},E=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P(e,function(n,o){if(n)t(n);else{var s=_(o());g[e]=s,t(n,s)}})},N=1,O={empty:function(){v=[],b={},y={},j=[],h=[]},addPagesArray:function(e){h=e;var n="";c=(0,i.default)(e,n)},addDevRequires:function(e){d=e},addProdRequires:function(e){f=e},dequeue:function(e){return v.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/N;N+=1,b[e]?b[e]+=1:b[e]=1,O.has(e)||v.unshift(e),v.sort(k);var t=c(e);return t.jsonName&&(y[t.jsonName]?y[t.jsonName]+=1+n:y[t.jsonName]=1+n,j.indexOf(t.jsonName)!==-1||m[t.jsonName]||j.unshift(t.jsonName)),t.componentChunkName&&(y[t.componentChunkName]?y[t.componentChunkName]+=1+n:y[t.componentChunkName]=1+n,j.indexOf(t.componentChunkName)!==-1||m[t.jsonName]||j.unshift(t.componentChunkName)),j.sort(w),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:y}},getPages:function(){return{pathArray:v,pathCount:b}},getPage:function(e){return c(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,t=!1,o=void 0;try{for(var s,r=(0,a.default)(e);!(n=(s=r.next()).done);n=!0){var i=s.value;i.unregister()}}catch(e){t=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(t)throw o}}window.location.reload()})),R=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),l.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];l.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,i=function(){if(s&&r){p[e]={component:s,json:r};var n={component:s,json:r};t(n),l.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return E(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),s=n,i()}),void E(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),r=n,i()})},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};e.exports=O}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---node-modules-gatsby-plugin-offline-app-shell-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],s=[],a=function(){var e=n();e&&(s.push(e),t(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:s}},empty:function(){o=[],s=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,l.default)("onRouteUpdate",{location:e,action:n})}))}function a(e,n){var t=n.location.pathname,o=(0,l.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var s=e.location.pathname;if(s===t)return!1}return!0}var r=t("./node_modules/babel-runtime/helpers/extends.js"),i=o(r),u=t("./.cache/api-runner-browser.js"),l=o(u),c=t("./node_modules/react/react.js"),d=o(c),f=t("./node_modules/react-dom/index.js"),p=o(f),m=t("./node_modules/react-router-dom/index.js"),g=t("./node_modules/react-router-scroll/lib/index.js"),h=t("./node_modules/history/createBrowserHistory.js"),v=o(h),b=t("./.cache/emitter.js"),j=o(b),y=t("./.cache/pages.json"),_=o(y),x=t("./.cache/component-renderer.js"),R=o(x),w=t("./.cache/async-requires.js"),k=o(w),P=t("./.cache/loader.js"),E=o(P);window.___emitter=j.default,E.default.addPagesArray(_.default),E.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=E.default,window.matchPath=m.matchPath,(0,l.default)("onClientEntry"),(0,l.default)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var N=function(e){function n(o){o.page.path===E.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=N;var O=(0,v.default)();(0,l.default)("onRouteUpdate",{location:O.location,action:O.action});var T=(0,l.default)("replaceRouterComponent",{history:O})[0],C=function(e){var n=e.children;return d.default.createElement(m.BrowserRouter,{history:O},n)},S=function(e){k.default.layouts.index?k.default.layouts.index(function(n,t){var o=t();e(o)}):e(function(e){return d.default.createElement("div",null,e.children())})};S(function(e){E.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,c.createElement)(T?T:C,null,(0,c.createElement)(g.ScrollContext,{shouldUpdateScroll:a},(0,c.createElement)((0,m.withRouter)(e),{children:function(e){return(0,c.createElement)(m.Route,{render:function(n){s(n.history);var t=e?e:n;return E.default.getPage(t.location.pathname)?(0,c.createElement)(R.default,(0,i.default)({},t)):(0,c.createElement)(R.default,{location:{pathname:"/404.html"}})}})}})))},t=(0,l.default)("wrapRootComponent",{Root:n},n)[0];p.default.render(d.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./.cache/emitter.js"),a=o(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(ga("set","page",(n||{}).pathname),ga("send","pageview"))}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),s=t.e,a=t.s;t.e=function(o,r){var i=!1,u=!0,l=function(e){r&&(r(t,e),r=null)};return!a&&n&&n[o]?void l(!0):(s(o,function(){i||(i=!0,u?setTimeout(function(){l()}):l())}),void(i||(u=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),l(!0))}))))}}o()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},s="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,n,a){if("string"!=typeof n){var r=Object.getOwnPropertyNames(n);s&&(r=r.concat(Object.getOwnPropertySymbols(n)));for(var i=0;i<r.length;++i)if(!(t[r[i]]||o[r[i]]||a&&a[r[i]]))try{e[r[i]]=n[r[i]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(c===setTimeout)return setTimeout(e,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function r(){g&&p&&(g=!1,p.length?m=p.concat(m):h=-1,m.length&&i())}function i(){if(!g){var e=s(r);g=!0;for(var n=m.length;n;){for(p=m,m=[];++h<n;)p&&p[h].run();h=-1,n=m.length}p=null,g=!1,a(e)}}function u(e,n){this.fun=e,this.array=n}function l(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(e){c=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,m=[],g=!1,h=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new u(e,n)),1!==m.length||g||s(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/kevinto/development/git/kevinto.me/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-env/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-stage-0/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/kevinto/development/git/kevinto.me/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-env/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-stage-0/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-5cb1c53379efd31fe80b.js.map