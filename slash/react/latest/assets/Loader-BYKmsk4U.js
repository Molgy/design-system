import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{g as d}from"./getComponentClassName-C7V7Z2-u.js";import"./index-CTjT7uj6.js";const u=r=>{switch(r){case"get":return"Chargement en cours";case"post":return"Sauvegarde en cours";case"delete":return"Suppression en cours";case"update":return"Mise à jour en cours";case"error":return"Une erreur est survenue lors du chargement du composant";default:return""}},m=({className:r,text:o,children:i,classModifier:l,mode:a="none"})=>{const s=d(r,l,"af-loader"),n=o||u(a),c=a!=="none",t=a==="error";return e.jsxs("div",{className:s,children:[i,c&&e.jsx("div",{className:`${s} af-loader-on`,children:e.jsxs("div",{className:"af-spinner",role:"alert","aria-live":"assertive","aria-busy":!t,"aria-label":n,children:[!t&&e.jsx("div",{className:"af-spinner__animation"}),e.jsx("div",{className:"af-spinner__caption",children:n})]})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"none" | "get" | "post" | "delete" | "update" | "error"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"get"'},{name:"literal",value:'"post"'},{name:"literal",value:'"delete"'},{name:"literal",value:'"update"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};export{m as L};
