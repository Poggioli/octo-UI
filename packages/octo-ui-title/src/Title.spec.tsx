import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("<Title />", () => {
  it(`GIVEN a <Title />
      WHEN screen is small than 900px
      THEN should render a <Title /> using size 8
      AND lineHeight 35px`, () => {
    global.innerWidth = 768;
    const rendered = render(<Title>Title</Title>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Title />
      WHEN screen is equal or greater than 900px
      THEN should render a <Title /> using size 9
      AND lineHeight 55px`, () => {
    global.innerWidth = 900;
    const rendered = render(<Title>Title</Title>);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Title />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Title.toString()).toBe(".octo-UI-c-gWerhV");
  });

  describe("color props", () => {
    it(`GIVEN a <Title />
        WHEN color props is not setted
        THEN should render a <Title /> $grey12 as color`, () => {
      const rendered = render(<Title>Title</Title>);
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Title />
        WHEN color props is $grey11
        THEN should render a <Title /> $grey11 as color`, () => {
      const rendered = render(<Title color="$grey11">Title</Title>);
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
