import { render } from "@testing-library/react";
import { Flex } from "./Flex";

describe("<Flex />", () => {
  it(`GIVEN a <Flex />
      WHEN render is called
      THEN should render a <Flex />`, () => {
    const rendered = render(<Flex />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Flex />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Flex.toString()).toBe(".octo-UI-c-gqwkJN");
  });
});
