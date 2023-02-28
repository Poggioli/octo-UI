import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("<Heading />", () => {
  it(`GIVEN a <Heading />
      WHEN screen is small than 900px
      THEN should render a <Heading /> using size 3
      AND lineHeight 25px`, () => {
    global.innerWidth = 768;
    const rendered = render(<Heading>Heading</Heading>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Heading />
      WHEN screen is equal or greater than 900px
      THEN should render a <Heading /> using size 4
      AND lineHeight 27px`, () => {
    global.innerWidth = 900;
    const rendered = render(<Heading>Heading</Heading>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Heading />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Heading.toString()).toBe(".octo-UI-c-gWerhV");
  });

  describe("color props", () => {
    it(`GIVEN a <Heading />
        WHEN color props is not setted
        THEN should render a <Heading /> $grey11 as color`, () => {
      const rendered = render(<Heading>Heading</Heading>);
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Heading />
        WHEN color props is $grey10
        THEN should render a <Heading /> $grey10 as color`, () => {
      const rendered = render(<Heading color="$grey10">Heading</Heading>);
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
