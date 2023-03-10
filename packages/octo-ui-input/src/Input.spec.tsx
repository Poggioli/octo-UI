import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("<Input />", () => {
  it(`GIVEN a <Input />
      WHEN render is called
      THEN should render a <Input />`, () => {
    const rendered = render(<Input />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Input />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Input.toString()).toBe(".octo-UI-c-eQegQU");
  });
});
