import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-C33_amOP.js";import{F as _,a as b,H as q}from"./HelpMessage-D9o_4RmS.js";import{u as v}from"./useInputClassModifier-B4SXY78l.js";import"./getComponentClassName-CfMiunrP.js";import{P as w}from"./Pass-MYMwzsS2.js";const C={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},S=e=>{if(e==null)return null;let s=Number(e)??0;return s>4&&(s=4),s<0&&(s=0),C[s]},E=({message:e,children:s,helpMessage:d,id:p,disabled:o=!1,label:f,messageType:u,isVisible:c,forceDisplayMessage:m,className:g,classModifier:x,classNameContainerLabel:M,classNameContainerInput:h,score:y,required:I,...j})=>{const P=S(y),i=[x??"",P??""].join(" "),[r,T]=l.useState("password"),a=l.useId(),F=p??a,{inputClassModifier:N,inputFieldClassModifier:n}=v(i,o,!!s,I);return t.jsx(_,{label:f,message:e,messageType:u,isVisible:c,forceDisplayMessage:m,className:g,id:F,classModifier:`${i} ${n}`,classNameContainerLabel:M,classNameContainerInput:h,children:t.jsxs(b,{className:"af-form__pass-container",classModifier:n,children:[t.jsx(w,{...j,type:r,id:a,disabled:o,classModifier:N,onToggleType:()=>T(r==="password"?"text":"password")}),s,t.jsx(q,{message:d,isVisible:!e})]})})};E.__docgenInfo={description:"",methods:[],displayName:"PassInput",props:{helpMessage:{required:!1,tsType:{name:"ReactNode"},description:""},score:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{E as P};
