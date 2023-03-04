import { fireEvent, render } from "@testing-library/react";
import { Switch, SwitchContainer, SwitchLabel } from "./Switch";

describe("<Switch />", () => {
  it(`GIVEN a <Switch />
      WHEN render is called
      THEN should render a <Switch />`, () => {
    const rendered = render(<Switch />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Switch />, <SwitchLabel /> and <SwitchContainer />
      WHEN render it's enabled
      THEN should match to snapshot`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-label">Switch Label</SwitchLabel>
        <Switch id="switch-label" />
      </SwitchContainer>
    );

    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Switch />, <SwitchLabel /> and <SwitchContainer />
      WHEN render it's disabled
      THEN should match to snapshot`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-label">Switch Label</SwitchLabel>
        <Switch id="switch-label" disabled />
      </SwitchContainer>
    );

    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Switch />, <SwitchLabel /> and <SwitchContainer />
      WHEN render is called
      THEN should render a normaly`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-label">Switch Label</SwitchLabel>
        <Switch id="switch-label" />
      </SwitchContainer>
    );

    const switchComponent = rendered.getByRole("switch");
    const switchLabel = rendered.getByText("Switch Label");

    expect(switchComponent).toBeVisible();
    expect(switchLabel).toBeVisible();
  });

  it(`GIVEN a <SwitchLabel />
      WHEN user click in label
      THEN should toggle switch state`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-airplane">Switch Label</SwitchLabel>
        <Switch id="switch-airplane" />
      </SwitchContainer>
    );

    const switchLabel = rendered.getByText("Switch Label");
    fireEvent.click(switchLabel);

    const switchComponent = rendered.getByRole("switch", {
      checked: true,
    });

    expect(switchComponent).toBeVisible();
    expect(switchLabel).toBeVisible();
  });

  it(`GIVEN a <Switch />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Switch.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <SwitchContainer />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SwitchContainer.toString()).toBe(".octo-UI-c-iQGaKg");
  });

  it(`GIVEN a <SwitchLabel />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SwitchLabel.toString()).toBe(".octo-UI-c-gHWBzz");
  });
});
