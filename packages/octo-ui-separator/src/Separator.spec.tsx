import { render } from "@testing-library/react";
import { Separator } from "./Separator";

describe("<Separator />", () => {
  it(`GIVEN a <Separator />
      WHEN render is called
      THEN should render a <Separator />`, () => {
    const rendered = render(<Separator />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Separator />
      WHEN render is called
      THEN should render a <Separator />`, () => {
    const rendered = render(<Separator color="$colors$primary9" />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Separator />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Separator.toString()).toBe(".octo-UI-c-hxgBlx");
  });
});
