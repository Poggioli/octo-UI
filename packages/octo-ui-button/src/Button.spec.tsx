import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  it(`GIVEN a <Button />
      WHEN render is called
      THEN should render a <Button />`, () => {
    const rendered = render(<Button>Button</Button>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Button />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Button.toString()).toBe(".octo-UI-c-fYBmDf");
  });
});
