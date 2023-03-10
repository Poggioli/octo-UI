import { render } from "@testing-library/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabelGroup,
  SelectSeparator
} from "./Select";

describe("<Select />", () => {
  it(`GIVEN a <Select />
      WHEN render is called
      AND has selected value
      THEN should render a <Select />`, () => {
    const rendered = render(
      <Select value="apple" placeholder="Select a food">
        <SelectContent>
          <SelectGroup>
            <SelectLabelGroup>Fruits</SelectLabelGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem disabled value="banana">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabelGroup>Vegetables</SelectLabelGroup>
            <SelectItem value="lettuce">Lettuce</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Select />
      WHEN render is called
      AND has selected value
      AND it's disabled
      THEN should render a <Select />`, () => {
    const rendered = render(
      <Select disabled value="apple" placeholder="Select a food">
        <SelectContent>
          <SelectGroup>
            <SelectLabelGroup>Fruits</SelectLabelGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem disabled value="banana">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabelGroup>Vegetables</SelectLabelGroup>
            <SelectItem value="lettuce">Lettuce</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Select />
      WHEN render is called
      AND it's disabled
      THEN should render a <Select />`, () => {
    const rendered = render(
      <Select disabled placeholder="Select a food">
        <SelectContent>
          <SelectGroup>
            <SelectLabelGroup>Fruits</SelectLabelGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem disabled value="banana">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabelGroup>Vegetables</SelectLabelGroup>
            <SelectItem value="lettuce">Lettuce</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Select />
      WHEN render is called
      THEN should render a <Select />`, () => {
    const rendered = render(
      <Select placeholder="Select a food">
        <SelectContent>
          <SelectGroup>
            <SelectLabelGroup>Fruits</SelectLabelGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem disabled value="banana">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabelGroup>Vegetables</SelectLabelGroup>
            <SelectItem value="lettuce">Lettuce</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Select />
      WHEN render is called
      AND it's openned
      THEN should render a <Select />`, () => {
    const rendered = render(
      <Select defaultOpen value="apple" placeholder="Select a food">
        <SelectContent>
          <SelectGroup>
            <SelectLabelGroup>Fruits</SelectLabelGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem disabled value="banana">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabelGroup>Vegetables</SelectLabelGroup>
            <SelectItem value="lettuce">Lettuce</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <SelectGroup />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SelectGroup.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <SelectItem />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SelectItem.toString()).toBe(".octo-UI-c-gmtBZL");
  });

  it(`GIVEN a <SelectLabelGroup />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SelectLabelGroup.toString()).toBe(".octo-UI-c-gKmfoP");
  });

  it(`GIVEN a <Select />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Select.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <SelectSeparator />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SelectSeparator.toString()).toBe(".octo-UI-c-bkmZcV");
  });

  it(`GIVEN a <SelectContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SelectContent.toString()).toBe(".octo-UI-c-cjYrgy");
  });
});
