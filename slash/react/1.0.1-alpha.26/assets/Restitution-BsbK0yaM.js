import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{ae as s,af as a}from"./index-D2yU0SMs.js";import{R as l,D as u}from"./Restitution.stories-D6B4Q0Ey.js";import"./index-CTjT7uj6.js";import"./iframe-ftST9Wrr.js";import"../sb-preview/runtime.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./RestitutionList-BavUYh03.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";function i(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(n.h2,{id:"restitution",children:"Restitution"}),`
`,t.jsxs(n.p,{children:[`The Restitution components are a group of related components that are used to display recapitulative data.
The main component is `,t.jsx(n.code,{children:"ArticleRestitution"})," which is a container for the other components."]}),`
`,t.jsxs(n.p,{children:["Then inside the ",t.jsx(n.code,{children:"ArticleRestitution"})," you can have a ",t.jsx(n.code,{children:"HeaderRestitution"}),` which is the header of the restitution.
The `,t.jsx(n.code,{children:"HeaderRestitution"})," can have a ",t.jsx(n.code,{children:"title"}),", a ",t.jsx(n.code,{children:"subtitle"})," and a ",t.jsx(n.code,{children:"rightTitle"})," which is a link to edit the restitution."]}),`
`,t.jsxs(n.p,{children:["Then you can have a ",t.jsx(n.code,{children:"SectionRestitution"})," which is a container for the ",t.jsx(n.code,{children:"SectionRestitutionRow"})," or ",t.jsx(n.code,{children:"SectionRestitutionColumn"}),`. These last two can include each other depending on the layout you want.
Finally you can have a `,t.jsx(n.code,{children:"Restitution"})," which is a label and a value, and a ",t.jsx(n.code,{children:"RestitutionList"})," which is a list of values."]}),`
`,t.jsx(n.h3,{id:"import",children:"Import"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
  RestitutionList,
} from "@axa-fr/design-system-react/agent";
`})}),`
`,t.jsx(n.h3,{id:"use",children:"Use"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={(e) => {
      console.log(e);
    }}
  >
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>
);

export const Restititution = () => (
  <ArticleRestitution classModifier="lg">
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle />}
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn classModifier="test">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">
            <span style={{ textDecoration: "underline" }}>EURO</span>
          </Restitution>
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow>
        <SectionRestitutionColumn title="Base de calcul des prestations">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn title="Base de calcul des prestations">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">
            <span style={{ textDecoration: "underline" }}>EURO</span>
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>
    </SectionRestitution>
  </ArticleRestitution>
);
`})}),`
`,t.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,t.jsx(a,{of:u})]})}function y(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{y as default};
