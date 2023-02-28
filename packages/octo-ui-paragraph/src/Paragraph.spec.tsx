import { render } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("<Paragraph />", () => {
  it(`GIVEN a <Paragraph />
      WHEN screen is small than 900px
      THEN should render a <Paragraph /> using size 3
      AND lineHeight 25px`, () => {
    global.innerWidth = 768;
    const rendered = render(<Paragraph>Paragraph</Paragraph>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Paragraph />
      WHEN screen is equal or greater than 900px
      THEN should render a <Paragraph /> using size 4
      AND lineHeight 27px`, () => {
    global.innerWidth = 900;
    const rendered = render(<Paragraph>Paragraph</Paragraph>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Paragraph />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Paragraph.toString()).toBe(".octo-UI-c-gWerhV");
  });

  describe("color props", () => {
    it(`GIVEN a <Paragraph />
        WHEN color props is not setted
        THEN should render a <Paragraph /> $grey11 as color`, () => {
      const rendered = render(<Paragraph>Paragraph</Paragraph>);
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Paragraph />
        WHEN color props is $grey10
        THEN should render a <Paragraph /> $grey10 as color`, () => {
      const rendered = render(<Paragraph color="$grey10">Paragraph</Paragraph>);
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
