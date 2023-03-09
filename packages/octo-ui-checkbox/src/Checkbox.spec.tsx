import { render } from "@testing-library/react";
import {
  CheckboxGroup,
  CheckboxItem,
  CheckboxItemContainer,
  CheckboxItemLabel
} from "./Checkbox";

describe("<Checkbox />", () => {
  it(`GIVEN a <Checkbox />
      WHEN render is called
      THEN should render a <Checkbox />`, () => {
    const rendered = render(
      <CheckboxGroup>
        <CheckboxItemContainer>
          <CheckboxItem id="fish" name="animal" value="fish" />
          <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
        </CheckboxItemContainer>
      </CheckboxGroup>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Checkbox />
      WHEN it's not inside a <CheckboxGroup />
      THEN throw an error`, () => {
    expect(() =>
      render(
        <CheckboxItemContainer>
          <CheckboxItem id="fish" name="animal" value="fish" />
          <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
        </CheckboxItemContainer>
      )
    ).toThrowError("`CheckboxItem` must be used within `CheckboxGroup`");
  });

  it(`GIVEN a <CheckboxGroup />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CheckboxGroup.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <CheckboxItemContainer />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CheckboxItemContainer.toString()).toBe(".octo-UI-c-hrAFsB");
  });

  it(`GIVEN a <CheckboxItem />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CheckboxItem.toString()).toBe(".octo-UI-c-fwkXIE");
  });

  it(`GIVEN a <CheckboxItemLabel />
      WHEN toString is called
      THEN return a string`, () => {
    expect(CheckboxItemLabel.toString()).toBe(".octo-UI-c-gHWBzz");
  });

  describe("GIVEN a <CheckboxGroup/> whit disabled props", () => {
    it(`WHEN disabled is true
        THEN should disable all checkboxes`, () => {
      const rendered = render(
        <CheckboxGroup disabled>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeDisabled();
      expect(dogCheckbox).toBeDisabled();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN disabled is false
        AND fish checkbox is disabled
        THEN should render dog as enabled
        AND fish as disabled`, () => {
      const rendered = render(
        <CheckboxGroup disabled={false}>
          <CheckboxItemContainer>
            <CheckboxItem disabled id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeDisabled();
      expect(dogCheckbox).toBeEnabled();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN disabled is not setted
        THEN should enable all enabled`, () => {
      const rendered = render(
        <CheckboxGroup>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeEnabled();
      expect(dogCheckbox).toBeEnabled();
      expect(rendered.container).toMatchSnapshot();
    });
  });

  describe("GIVEN a <CheckboxGroup/> whit defaultValue props", () => {
    it(`WHEN defaultValue is undefined
        THEN all checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup defaultValue={undefined}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).not.toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN defaultValue has fish value
        THEN fish checkbox should be checked
        AND dog checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup defaultValue={["fish"]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN defaultValue has all values
        THEN all checkboxes should be checked`, () => {
      const rendered = render(
        <CheckboxGroup defaultValue={["fish", "dog"]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeChecked();
      expect(dogCheckbox).toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN defaultValue is empty
        THEN all checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup defaultValue={[]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).not.toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });
  });

  describe("GIVEN a <CheckboxGroup/> whit value props", () => {
    it(`WHEN value is undefined
        THEN all checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup value={undefined}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).not.toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN value has fish value
        THEN fish checkbox should be checked
        AND dog checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup value={["fish"]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN value has all values
        THEN all checkboxes should be checked`, () => {
      const rendered = render(
        <CheckboxGroup value={["fish", "dog"]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeChecked();
      expect(dogCheckbox).toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN value is empty
        THEN all checkbox should be unchecked`, () => {
      const rendered = render(
        <CheckboxGroup value={[]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).not.toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`WHEN defaultValue has dog checked
        AND value doesn't have dog checked 
        THEN dog checkbox should not be checked`, () => {
      const rendered = render(
        <CheckboxGroup defaultValue={["dog", "fish"]} value={["fish"]}>
          <CheckboxItemContainer>
            <CheckboxItem id="fish" name="fish" value="fish" />
            <CheckboxItemLabel htmlFor="fish">Fish</CheckboxItemLabel>
          </CheckboxItemContainer>
          <CheckboxItemContainer>
            <CheckboxItem id="dog" name="dog" value="dog" />
            <CheckboxItemLabel htmlFor="dog">Dog</CheckboxItemLabel>
          </CheckboxItemContainer>
        </CheckboxGroup>
      );
      const fishCheckbox = rendered.getByLabelText("Fish");
      const dogCheckbox = rendered.getByLabelText("Dog");

      expect(fishCheckbox).toBeChecked();
      expect(dogCheckbox).not.toBeChecked();
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
