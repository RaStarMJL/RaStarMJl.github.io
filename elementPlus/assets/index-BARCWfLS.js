import{_ as f,r as u,c as k,b as a,w as d,a as o,i as V,j as x,o as g,d as r,k as w}from"./index-DaRJWKqE.js";/* empty css                     *//* empty css                 */const b={class:"demo-date-picker"},D={class:"block"},T={class:"block"},y={__name:"index",setup(z){const s=u<"default"|"large"|!0,i=u(""),m=u(""),_=[{text:"Today",value:new Date},{text:"Yesterday",value:()=>{const t=new Date;return t.setTime(t.getTime()-3600*1e3*24),t}},{text:"A week ago",value:()=>{const t=new Date;return t.setTime(t.getTime()-3600*1e3*24*7),t}}],c=t=>t.getTime()>Date.now();return(t,e)=>{const n=w,v=V,p=x;return g(),k("div",null,[a(v,{modelValue:s,"onUpdate:modelValue":e[0]||(e[0]=l=>s=l),"aria-label":"size control"},{default:d(()=>[a(n,{value:"large"},{default:d(()=>e[3]||(e[3]=[r("large")])),_:1}),a(n,{value:"default"},{default:d(()=>e[4]||(e[4]=[r("default")])),_:1}),a(n,{value:"small"},{default:d(()=>e[5]||(e[5]=[r("small")])),_:1})]),_:1}),o("div",b,[o("div",D,[e[6]||(e[6]=o("span",{class:"demonstration"},"Default",-1)),a(p,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l),type:"date",placeholder:"Pick a day",size:s},null,8,["modelValue"])]),o("div",T,[e[7]||(e[7]=o("span",{class:"demonstration"},"Picker with quick options",-1)),a(p,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),type:"date",placeholder:"Pick a day","disabled-date":c,shortcuts:_,size:s},null,8,["modelValue"])])])])}}},N=f(y,[["__scopeId","data-v-94509a0d"]]);export{N as default};
