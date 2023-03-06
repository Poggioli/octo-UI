import { render } from "@testing-library/react";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemContainer,
  RadioGroupItemLabel,
} from "./Radio";

describe("<Radio />", () => {
  const mount = () =>
    render(
      <RadioGroup defaultValue="comfortable" aria-label="View density">
        <RadioGroupItemContainer>
          <RadioGroupItem disabled value="default" id="r1" />
          <RadioGroupItemLabel htmlFor="r1">Default</RadioGroupItemLabel>
        </RadioGroupItemContainer>
        <RadioGroupItemContainer>
          <RadioGroupItem value="comfortable" id="r2" />
          <RadioGroupItemLabel htmlFor="r2">Comfortable</RadioGroupItemLabel>
        </RadioGroupItemContainer>
        <RadioGroupItemContainer>
          <RadioGroupItem value="compact" id="r3" />
          <RadioGroupItemLabel htmlFor="r3">Compact</RadioGroupItemLabel>
        </RadioGroupItemContainer>
      </RadioGroup>
    );

  it(`GIVEN a <Radio />
      WHEN render is called
      THEN should render a <Radio />`, () => {
    const rendered = mount();
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <RadioGroup />
      WHEN toString is called
      THEN return a string`, () => {
    expect(RadioGroup.toString()).toBe(".octo-UI-c-beTnUS");
  });

  it(`GIVEN a <RadioGroupItemContainer />
      WHEN toString is called
      THEN return a string`, () => {
    expect(RadioGroupItemContainer.toString()).toBe(".octo-UI-c-gyTDmN");
  });

  it(`GIVEN a <RadioGroupItem />
      WHEN toString is called
      THEN return a string`, () => {
    expect(RadioGroupItem.toString()).toBe(".octo-UI-c-opsBT");
  });

  it(`GIVEN a <RadioGroupItemLabel />
      WHEN toString is called
      THEN return a string`, () => {
    expect(RadioGroupItemLabel.toString()).toBe(".octo-UI-c-gHWBzz");
  });

  it(`GIVEN a <RadioGroupIndicator />
      WHEN toString is called
      THEN return a string`, () => {
    expect(RadioGroupIndicator.toString()).toBe(".octo-UI-c-deeeBS");
  });
});
