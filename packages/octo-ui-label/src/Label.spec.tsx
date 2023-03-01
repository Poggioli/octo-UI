import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("<Label />", () => {
  it(`GIVEN a <Label />
      WHEN render is called
      THEN should render a <Label />`, () => {
    const rendered = render(<Label>Label</Label>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Label />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Label.toString()).toBe(".octo-UI-c-gHWBzz");
  });

  describe("color props", () => {
    it(`GIVEN a <Label />
        WHEN color props is not setted
        THEN should render a <Label /> $grey12 as color`, () => {
      const rendered = render(<Label>Label</Label>);
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Label />
        WHEN color props is $grey11
        THEN should render a <Label /> $grey11 as color`, () => {
      const rendered = render(<Label color="$grey11">Label</Label>);
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
