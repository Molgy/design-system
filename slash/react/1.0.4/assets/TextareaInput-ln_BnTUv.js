import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-oX4yH2bX.js";import{ae as s,af as i,ag as p}from"./index-CZU2_GCj.js";import{T as m,a as n}from"./TextareaInput.stories-CGTXj1SD.js";import"./index-CTjT7uj6.js";import"./iframe-BW26-0SR.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./HelpMessage-B9HNfJNg.js";import"./getComponentClassName-BBtdTm69.js";import"./TextareaInput-BRMu8oFJ.js";/* empty css                 */import"./useInputClassModifier-B4SXY78l.js";import"./Textarea-CUwSUjbB.js";function a(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"textareainput",children:"TextareaInput"}),`
`,e.jsx(t.h3,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MessageTypes, TextareaInput } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(t.h3,{id:"use",children:"Use"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const TextareaInputReturn = () => (
  <form className="af-form" name="myform">
    <TextareaInput
      id="uniqueId"
      value=""
      onChange={(e) => {
        console.log(e);
      }}
      label="Place type"
      name="textareainputName"
      rows={6}
      cols={60}
      helpMessage="Enter the place type"
      messageType={MessageTypes.error}
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
export default TextareaInputReturn;
`})}),`
`,e.jsx(i,{of:n}),`
`,e.jsx(p,{of:n}),`
`,e.jsx(t.h2,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(t.code,{children:"required"})," prop to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsxs(t.p,{children:["Alternatively you can to add to the ",e.jsx(t.code,{children:"classModifier"})," the value ",e.jsx(t.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function X(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{X as default};
