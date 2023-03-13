import { render } from "@testing-library/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./Collapsible";

describe("<Collapsible />", () => {
  it(`GIVEN a <Collapsible />
      WHEN render is called
      THEN should render a <Collapsible />`, () => {
    const rendered = render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Trigger</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>Content p</p>
          <span>Content span</span>
        </CollapsibleContent>
      </Collapsible>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Collapsible />
      WHEN render is called
      THEN should render a <Collapsible />`, () => {
    const rendered = render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>
          <button>Trigger</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p>Content p</p>
          <span>Content span</span>
        </CollapsibleContent>
      </Collapsible>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Collapsible />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Collapsible.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <CollapsibleTrigger />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CollapsibleTrigger.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <CollapsibleContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CollapsibleContent.toString()).toBe(".octo-UI-c-buTLZQ");
  });
});
