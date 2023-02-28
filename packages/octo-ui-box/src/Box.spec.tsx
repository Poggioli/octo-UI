import { render } from "@testing-library/react";
import { Box } from "./Box";

describe("<Box />", () => {
  it(`GIVEN a <Box />
      WHEN render is called
      THEN should render a <Box />`, () => {
    const rendered = render(<Box />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Box />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Box.toString()).toBe(".octo-UI-c-lesPJm");
  });
});
