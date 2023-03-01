import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("<Container />", () => {
  it(`GIVEN a <Container />
      WHEN render is called
      THEN should render a <Container />`, () => {
    const rendered = render(<Container />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Container />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Container.toString()).toBe(".octo-UI-c-fEDgXe");
  });
});
