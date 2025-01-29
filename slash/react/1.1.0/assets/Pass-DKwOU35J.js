import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-Ch4n-_Zu.js";import{M as l,C as r,a as o}from"./index-XUrgFtkI.js";import{P as c,a as t}from"./Pass.stories-2bYeqezz.js";import{PassInputStory as i}from"./PassInput.stories-_YICVnig.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./Pass-MYMwzsS2.js";import"./getComponentClassName-CfMiunrP.js";import"./HelpMessage-D9o_4RmS.js";import"./PassInput-D3K5k_IG.js";import"./useInputClassModifier-B4SXY78l.js";function a(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"pass-field",children:"Pass field"}),`
`,e.jsx(n.p,{children:"The Pass field component exposes a native HTML password input, with a toggle to display in clear text the password, and a color system to evaluate the strength of the password."}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h2,{id:"pass",children:"Pass"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Pass } from "@axa-fr/design-system-slash-react";
`})}),`
`,e.jsx(n.h3,{id:"modifiers",children:"Modifiers"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"classModifiers"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{children:"bad"})}),e.jsx("tr",{children:e.jsx("td",{children:"okay"})}),e.jsx("tr",{children:e.jsx("td",{children:"good"})}),e.jsx("tr",{children:e.jsx("td",{children:"verygood"})}),e.jsx("tr",{children:e.jsx("td",{children:"excellent"})})]})]}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const PassInput = () => (
  <form className="af-form" name="myform">
    <Pass
      id="uniqueid"
      classModifier="good"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => {
        console.log('your function');
      }}
      name="password"
      type="password"
      value="your value"
    />
  </form>
);
`})}),`
`,e.jsx(n.h2,{id:"passinput",children:"PassInput"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NumberInput } from "@axa-fr/design-system";
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NumberInput } from "@axa-fr/design-system/client";
`})}),`
`,e.jsx(n.h3,{id:"use-1",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const PassInputReturn = () => (
  <form className="af-form" name="myform">
    <PassInput
      id="uniqueid"
      name="password"
      value=""
      label="Password"
      onChange={(e) => {
        console.log(e);
      }}
      onToggleType={() => console.log("onToggle")}
      helpMessage="8 characters minimum"
    >
      <Help mode={PopoverModes.click} placement={PopoverPlacements.right}>
        Choose a password
      </Help>
    </PassInput>
  </form>
);
export default PassInputReturn;
`})}),`
`,e.jsx(n.h3,{id:"passinput-required",children:"PassInput Required"}),`
`,e.jsxs(n.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(n.code,{children:"required"})," prop to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively you can to add to the ",e.jsx(n.code,{children:"classModifier"})," the value ",e.jsx(n.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]})]})}function T(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{T as default};
