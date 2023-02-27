import { render } from "@testing-library/react";
import { Text } from "./Text";

describe("<Text />", () => {
  it(`GIVEN a <Text />
      WHEN size props is not setted
      THEN should render a <Text /> using size 3`, () => {
    const rendered = render(<Text>Text</Text>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Text />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Text.toString()).toBe(".octo-UI-c-gWerhV");
  });

  describe("Size props", () => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((size) => {
      it(`GIVEN a <Text /> with size props
        WHEN size props is ${size}
        THEN should render a <Text /> using size ${size}`, () => {
        const rendered = render(<Text size={size as any}>Text</Text>);
        expect(rendered.container).toMatchSnapshot();
      });
    });
  });

  describe("color props", () => {
    it(`GIVEN a <Text />
        WHEN color props is $grey11
        THEN should render a <Text /> $grey11 as color`, () => {
      const rendered = render(<Text color="$grey11">Text</Text>);
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
