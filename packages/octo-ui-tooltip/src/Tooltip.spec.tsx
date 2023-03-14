import { fireEvent, render } from "@testing-library/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

describe("<Tooltip />", () => {
  it(`GIVEN a <Tooltip />
      WHEN render is called
      THEN should render a <Tooltip />`, () => {
    const rendered = render(
      <Tooltip>
        <TooltipTrigger>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Tooltip />
      WHEN trigger is hovered
      THEN should render a tooltip role`, () => {
    const rendered = render(
      <Tooltip>
        <TooltipTrigger>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    );

    const triggerElement = rendered.getByText("Trigger");
    fireEvent.focus(triggerElement);

    const contentElement = rendered.getByRole("tooltip");
    expect(contentElement).toBeVisible();
    expect(rendered.baseElement).toMatchSnapshot();
  });

  it(`GIVEN a <Tooltip />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Tooltip.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <TooltipTrigger />
      WHEN toString is called
      THEN return a string`, () => {
    expect(TooltipTrigger.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <TooltipContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(TooltipContent.toString()).toBe(".octo-UI-c-cdrPBc");
  });
});
