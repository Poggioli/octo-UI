import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("teste", () => {
  it("test", () => {
    const rendered = render(<Button />);
    expect(rendered).toBeTruthy();
  });
});
