(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{595:function(t,e,a){Promise.resolve().then(a.t.bind(a,7405,23)),Promise.resolve().then(a.t.bind(a,3362,23)),Promise.resolve().then(a.t.bind(a,1122,23)),Promise.resolve().then(a.t.bind(a,6383,23)),Promise.resolve().then(a.bind(a,3279))},125:function(t,e,a){"use strict";a.d(e,{H:function(){return u}});var n=a(488);a(636);var s=a(6707),r=a(8912),l=a(9329),i=a(2242),c=a(7875),o=a(9158);let u=t=>{let[e,a]=(0,r.useState)(""),{data:u}=(0,l.a)({queryKey:["waline-status"],queryFn:()=>fetch("".concat(i.s.comment.walineapi,"/api/comment")).then(t=>t.status)});return(0,r.useEffect)(()=>{o&&a(window.location.hostname)},[]),(0,n.jsxs)(n.Fragment,{children:[200!==u&&(0,n.jsx)("div",{className:"text-center mt-6 text-red-500 text-sm",children:"服务器不可用，评论处于只读状态，请联系 me@vaala.cat 修复该问题"}),(0,n.jsx)(s.WalineComponent,{path:t.path,locale:{placeholder:"说点什么吧"},imageUploader:!1,emoji:!1,search:!1,reaction:!1,serverURL:200===u||0===e.length?i.s.comment.walineapi:"https://".concat(e,"/comments/").concat(function(t){let e=t.endsWith(c.sep)?t.slice(0,-1):t;return c.basename(e)}(t.path))})]})}},2181:function(t,e,a){"use strict";a.d(e,{i:function(){return u}});var n=a(488),s=a(9614),r=a.n(s),l=a(7259),i=a.n(l),c=a(6845);let o={Image:r(),a:i()};function u(t){let{code:e}=t,a=(0,c.z)(e);return(0,n.jsx)(a,{className:"break-all",components:o})}},3279:function(t,e,a){"use strict";a.r(e),a.d(e,{PageContent:function(){return l}});var n=a(488),s=a(2181),r=a(125);let l=t=>{let{page:e}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"mb-2",children:e.title}),e.description&&(0,n.jsx)("p",{className:"text-xl mt-0 text-slate-700 dark:text-slate-200",children:e.description}),(0,n.jsx)("hr",{className:"my-4"}),(0,n.jsx)(s.i,{code:e.body.code}),(0,n.jsx)("div",{className:"text-sm w-full text-center text-slate-500 mt-6 mb-2",children:"- The End -"}),(0,n.jsx)("hr",{}),(0,n.jsx)(r.H,{path:"/".concat(e.slugAsParams,"/")})]})}},6707:function(t,e,a){"use strict";a.r(e),a.d(e,{WalineCommentCount:function(){return u},WalineComponent:function(){return o},WalineVisitCount:function(){return m}});var n=a(488),s=a(8912),r=a(1349);a(2547);var l=a(4194),i=a(9329),c=a(2242);let o=t=>{let{theme:e,systemTheme:a}=(0,l.F)(),i=(0,s.useRef)(null),c=s.createRef();return(0,s.useEffect)(()=>(i.current=(0,r.S1)({...t,dark:void 0===e||"system"===e?"dark"===a:"dark"===e,el:c.current,pageview:!0}),()=>{var t;return null===(t=i.current)||void 0===t?void 0:t.destroy()}),[c,e,a]),(0,s.useEffect)(()=>{var n;let s={...t,dark:void 0===e||"system"===e?"dark"===a:"dark"===e};null===(n=i.current)||void 0===n||n.update(s)},[t,e,a]),(0,n.jsx)("div",{ref:c})},u=t=>{let e=t.slugAsParams.split("/").pop(),a=encodeURIComponent("/posts/"+e+"/"),{data:s,isSuccess:r}=(0,i.a)({queryKey:["waline-comment-count",e],queryFn:()=>fetch("".concat(c.s.comment.walineapi,"/api/comment?type=count&url=").concat(a)).then(t=>{if(200!==t.status)throw Error(t.statusText);return t.json()})});return r&&s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mx-1 block text-xs text-gray-600 dark:text-gray-300",children:"|"}),(0,n.jsxs)("div",{className:"block text-xs text-gray-600 dark:text-gray-300",children:["Comments: ",(null==s?void 0:s.data)&&(null==s?void 0:s.data[0])?null==s?void 0:s.data[0]:0]})]})},m=t=>{let e=t.slugAsParams.split("/").pop(),a=encodeURIComponent("/posts/"+e+"/"),{data:s}=(0,i.a)({queryKey:["waline-visit-count",e],queryFn:()=>fetch("".concat(c.s.comment.walineapi,"/api/article?path=").concat(a)).then(t=>t.json())});return(0,n.jsxs)("div",{className:"block text-xs text-gray-600 dark:text-gray-300",children:["Visitors: ",s&&(null==s?void 0:s.data)&&(null==s?void 0:s.data[0].time)?null==s?void 0:s.data[0].time:0]})}},2242:function(t,e,a){"use strict";a.d(e,{s:function(){return n}});let n={title:"Vaala Cat",description:"Vaala Cat | 鲸喵",url:"https://vaala.cat",rss:{url:"https://vaala.cat/atom.xml",image_url:"https://vaala.cat/images/blog/avatar.png"},author:"Vaala Cat",comment:{walineapi:"https://comments.vaa.la",fallbackWaline:"/public/",artalkapi:"https://ak-gw.pk.vaa.la:30443/"},sitename:"Vaala 的博客"}},2547:function(){}},function(t){t.O(0,[460,788,741,914,886,534,397,704,744],function(){return t(t.s=595)}),_N_E=t.O()}]);