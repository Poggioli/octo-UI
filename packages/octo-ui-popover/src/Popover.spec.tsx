import { render } from "@testing-library/react";
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverCloseIcon,
  PopoverContent,
  PopoverTrigger,
} from "./Popover";

describe("<Popover />", () => {
  it(`GIVEN a <Popover />
      WHEN render is called
      THEN should render a <Popover />`, () => {
    const rendered = render(
      <Popover defaultOpen>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverAnchor>
          <button>Anchor</button>
        </PopoverAnchor>
        <PopoverContent>
          <h3>Popover content</h3>
          <PopoverClose>
            <button>Close</button>
          </PopoverClose>
          <PopoverCloseIcon />
        </PopoverContent>
      </Popover>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Popover />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Popover.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <PopoverAnchor />
      WHEN toString is called
      THEN return a string`, () => {
    expect(PopoverAnchor.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <PopoverClose />
      WHEN toString is called
      THEN return a string`, () => {
    expect(PopoverClose.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <PopoverCloseIcon />
      WHEN toString is called
      THEN return a string`, () => {
    expect(PopoverCloseIcon.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <PopoverContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(PopoverContent.toString()).toBe(".octo-UI-c-ewLfbo");
  });

  it(`GIVEN a <PopoverTrigger />
      WHEN toString is called
      THEN return a string`, () => {
    expect(PopoverTrigger.toString()).toBe(".octo-UI-c-PJLV");
  });
});
