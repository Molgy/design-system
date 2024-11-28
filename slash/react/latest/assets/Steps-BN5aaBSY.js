import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{ae as p,af as s,ag as m}from"./index-SbjGe_co.js";import{S as a,N as o}from"./Steps.stories-IXdV-6Eb.js";import"./index-CTjT7uj6.js";import"./iframe-Cv_eWvdq.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./BooleanModal-IUCLoIZ3.js";/* empty css              */import"./Action-fIeEoHxC.js";/* empty css               */import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";import"./Alert-D2MQI0tE.js";import"./Badge-CAZ-Dv6m.js";import"./Button-BPtTpx5t.js";import"./CheckboxInput-qeY81rY_.js";import"./HelpMessage-Dma0IcN4.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-B6m0JZo2.js";import"./Choice-FDzcUUPM.js";import"./Radio-D02AoQTW.js";import"./RadioItem-RNtBv8XU.js";import"./RadioInput-Cd5a_y0p.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-Blh9E-5W.js";import"./DateInput-D6hN7UTu.js";import"./Date-CI641rXz.js";import"./FileInput-B02loNNJ.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-C2_84m_A.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-Npp7rSr4.js";/* empty css                 */import"./Number-WwFhZtHt.js";/* empty css             */import"./Select-C7bS84k5.js";import"./SelectInput-D7LLlJfU.js";import"./SliderInput-CmQO6REe.js";import"./TextInput-BCF70ddG.js";import"./Text-BENtgf5_.js";import"./TextareaInput-CQEnvWJX.js";import"./Textarea-CaJXX67o.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-BGmuWOFX.js";import"./Infos-7lKZNez9.js";import"./Name-CFpboyKI.js";import"./HeaderTitle-C1Bc2C2J.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Dp_UfuiD.js";/* empty css               */import"./NavBarItem-CQcEEDln.js";import"./RestitutionList-BavUYh03.js";import"./index-12yj6lRe.js";import"./Svg-DdivJcec.js";import"./Title-Cxy8eqVz.js";import"./Accordion-9xC_6UG_.js";import"./Popover-CVInVo-0.js";import"./index-BAAoBoSU.js";import"./Loader-BYKmsk4U.js";function n(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:a}),`
`,t.jsx(e.h1,{id:"steps",children:"Steps"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#import",children:"Import"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#steps-use",children:"Steps"})}),`
`]}),`
`,t.jsx(e.p,{children:"The component step can have multiple values for the mode props :"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`mode: "link" | "active" | "disabled";
`})}),`
`,t.jsx(e.h2,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`import { Steps, Step, StepBase } from "@axa-fr/design-system-slash-react";
`})}),`
`,t.jsx(e.h2,{id:"steps-use",children:"Steps use"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-javascript",children:`const MyComponent = () => (
  <Steps classModifier="" className="">
    <Step
      id="id1"
      href="/etape1"
      onClick={(e) => {
        console.log(e);
      }}
      number="1"
      mode="link"
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={(e) => {
        console.log(e);
      }}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="3"
      onClick={(e) => {
        console.log(e);
      }}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-step__label"
        href="#/"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <span className="af-steps-list-step__number">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-step__title">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode="disabled" />
  </Steps>
);
`})}),`
`,t.jsx(s,{of:o}),`
`,t.jsx(m,{of:o})]})}function _t(i={}){const{wrapper:e}={...r(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{_t as default};
