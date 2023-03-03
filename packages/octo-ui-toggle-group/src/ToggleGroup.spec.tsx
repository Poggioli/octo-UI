import { render } from "@testing-library/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

describe("<ToggleGroup />", () => {
  it(`GIVEN a <ToggleGroup />
      WHEN render is called
      THEN should render a <ToggleGroup />`, () => {
    const rendered = render(
      <ToggleGroup type="single" aria-label="Text alignment">
        {Array.from({ length: 3 }).map((_, index) => (
          <ToggleGroupItem
            key={index}
            value={`option-${index}`}
            aria-label={`Option ${index}`}
          >
            Option {index}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <ToggleGroup />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ToggleGroup.toString()).toBe(".octo-UI-c-eWctCk");
  });

  it(`GIVEN a <ToggleGroupItem />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ToggleGroupItem.toString()).toBe(".octo-UI-c-iYXamd");
  });
});
