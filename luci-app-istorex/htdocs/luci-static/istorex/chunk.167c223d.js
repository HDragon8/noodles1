import{d as y,i as p,r as x,o as t,c as n,a as s,b as C,l as a,H as B,_ as D,p as $,q as I,u as S,F as _,E as k,m as v,e as h}from"./index.js?v=5b4be379";const b=e=>($("data-v-f0f8da84"),e=e(),I(),e),F={class:"disk-item"},E={class:"disk-item_contanier"},z={class:"disk-item_icon"},N={class:"disk-item_name"},w=b(()=>s("div",{class:"auto"},null,-1)),O={class:"disk-item_used"},V={key:0,class:"disk-item_info"},j={class:"label-msg.warning"},q={key:1,class:"disk-item_info"},M=b(()=>s("div",{class:"auto"},null,-1)),A=y({__name:"item",props:{disk:{type:Object,required:!0}},setup(e){const l=e;p(()=>{var o;return((o=l.disk.childrens)==null?void 0:o.length)||0}),p(()=>{var u,c;let o=0;return(c=(u=l.disk)==null?void 0:u.childrens)==null||c.forEach(i=>{if(!i.mountPoint){const r=Number(i.sizeInt),g=(1<<30)*2;r>g&&o++}}),o});const d=()=>{B.OpenDisk({disk:l.disk})};return(o,u)=>{const c=x("icon-disk");return t(),n("div",F,[s("div",E,[s("div",z,[C(c)]),s("div",N,[s("span",null,a(e.disk.name)+" \u3010"+a(e.disk.size)+"\u3011"+a(e.disk.venderModel),1)]),w,s("div",O,[s("span",null,a(e.disk.used)+" / "+a(e.disk.total),1)])]),e.disk.errorInfo?(t(),n("div",V,[s("span",j,a(e.disk.errorInfo),1)])):(t(),n("div",q,[s("span",null,a(e.disk.path),1),M,s("a",{onClick:u[0]||(u[0]=i=>d())}," \u67E5\u770B ")]))])}}});var m=D(A,[["__scopeId","data-v-f0f8da84"]]);const f=e=>($("data-v-bf0d8af0"),e=e(),I(),e),H={key:0,class:"ul-container"},L=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u7CFB\u7EDF\u78C1\u76D8")],-1)),P={class:"ul-container_body"},G={key:1,class:"ul-container"},J=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u5DF2\u6302\u8F7D\u78C1\u76D8")],-1)),K={class:"ul-container_body"},Q={key:2,class:"ul-container"},R=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u672A\u8BC6\u522B\u78C1\u76D8")],-1)),T={class:"ul-container_body"},U={key:3,class:"ul-container"},W=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"raid")],-1)),X={class:"ul-container_body"},Y=y({__name:"index",setup(e){const l=S(),d=p(()=>l.disk),o=p(()=>l.raid.disks);return(u,c)=>(t(),n("main",null,[d.value.rootDisks.length>0?(t(),n("ul",H,[L,s("div",P,[(t(!0),n(_,null,k(d.value.rootDisks,(i,r)=>(t(),h(m,{disk:i},null,8,["disk"]))),256))])])):v("",!0),d.value.mountedDisks.length>0?(t(),n("ul",G,[J,s("div",K,[(t(!0),n(_,null,k(d.value.mountedDisks,(i,r)=>(t(),h(m,{disk:i},null,8,["disk"]))),256))])])):v("",!0),d.value.errorDisks.length>0?(t(),n("ul",Q,[R,s("div",T,[(t(!0),n(_,null,k(d.value.errorDisks,(i,r)=>(t(),h(m,{disk:i},null,8,["disk"]))),256))])])):v("",!0),o.value.length>0?(t(),n("ul",U,[W,s("div",X,[(t(!0),n(_,null,k(o.value,(i,r)=>(t(),h(m,{disk:i},null,8,["disk"]))),256))])])):v("",!0)]))}});var ss=D(Y,[["__scopeId","data-v-bf0d8af0"]]);export{ss as default};
