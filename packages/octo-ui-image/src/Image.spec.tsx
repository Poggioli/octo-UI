import { render } from "@testing-library/react";
import { Image } from "./Image";

describe("<Image />", () => {
  it(`GIVEN a <Image />
      WHEN render is called
      THEN should render a <Image />`, () => {
    const rendered = render(
      <Image
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
        ratio={16 / 9}
      />
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Image />
      WHEN render is called
      THEN should render a <Image />`, () => {
    const rendered = render(
      <Image
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Image />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Image.toString()).toBe(".octo-UI-c-kxYyuZ");
  });
});
