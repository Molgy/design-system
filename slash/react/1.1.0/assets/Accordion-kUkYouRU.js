import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-C33_amOP.js";import{g as c}from"./getComponentClassName-CfMiunrP.js";const p=({children:a,ariaLabelledby:t})=>e.jsx("div",{className:"af-accordion__content","aria-labelledby":t,children:e.jsx("div",{children:a})});p.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabelledby:{required:!1,tsType:{name:"string"},description:""}}};const R="af-accordion__item-header",u=({children:a,className:t,classModifier:s,id:n})=>{const r=c(t,s,R);return e.jsxs("summary",{className:r,id:n,children:[e.jsx("h3",{className:"af-accordion__item-title",children:a}),e.jsx("span",{className:"glyphicon glyphicon-menu-down"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const g=({children:a,name:t,title:s,id:n,open:r,onToggle:o,className:l,classModifier:i=""})=>{const f=n;let d=r?"open":"";d+=` ${i}`;const y=c(l,d.trim(),"af-accordion__details");return e.jsxs("details",{open:r,name:t,className:y,onToggle:o,children:[e.jsx(u,{id:f,children:s}),e.jsx(p,{children:a})]})};g.__docgenInfo={description:"",methods:[],displayName:"CollapseCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onToggle:{required:!1,tsType:{name:'ReactDetailsHTMLAttributes["onToggle"]',raw:'React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"]'},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const T="af-accordion",N=({className:a,classModifier:t,children:s,onlyOne:n=!1})=>{const r=c(a,t,T),o=m.useId(),l=Array.isArray(s)?s:[s];return e.jsx("div",{className:r,children:l.map(i=>m.createElement(g,{...i.props,name:n?o:void 0,key:i.props.id},i.props.children))})};N.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{onlyOne:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:`| React.ReactElement<CollapseProps>[]
| React.ReactElement<CollapseProps>`,elements:[{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<CollapseProps>",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  name?: string;
  onToggle?: React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
  className?: string;
  classModifier?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"open",value:{name:"boolean",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"onToggle",value:{name:'ReactDetailsHTMLAttributes["onToggle"]',raw:'React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"]',required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"classModifier",value:{name:"string",required:!1}}]}}]}],raw:"React.ReactElement<CollapseProps>[]"},{name:"ReactReactElement",raw:"React.ReactElement<CollapseProps>",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  name?: string;
  onToggle?: React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
  className?: string;
  classModifier?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"ReactNode",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"open",value:{name:"boolean",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"onToggle",value:{name:'ReactDetailsHTMLAttributes["onToggle"]',raw:'React.DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"]',required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"classModifier",value:{name:"string",required:!1}}]}}]}]},description:""}}};export{N as A,g as C};
