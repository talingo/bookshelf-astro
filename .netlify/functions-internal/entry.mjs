import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.3424cfa2.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.c723f173.mjs');
const _page1  = () => import('./chunks/404@_@astro.a556f43b.mjs');
const _page2  = () => import('./chunks/_book_@_@astro.82fdece8.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/404.astro", _page1],["src/pages/[book].astro", _page2]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.f80a9834.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.f80a9834.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.f80a9834.css"}],"routeData":{"route":"/[book]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"book","dynamic":true,"spread":false}]],"params":["book"],"component":"src/pages/[book].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://talingo.github.io","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/Lautaro/Desktop/midudev/library-project/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Lautaro/Desktop/midudev/library-project/src/pages/[book].astro",{"propagation":"none","containsHead":true}],["C:/Users/Lautaro/Desktop/midudev/library-project/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.33a7d832.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.c723f173.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.a556f43b.mjs","\u0000@astro-page:src/pages/[book]@_@astro":"chunks/_book_@_@astro.82fdece8.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.76f88837.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.f80a9834.css","/favicon.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
