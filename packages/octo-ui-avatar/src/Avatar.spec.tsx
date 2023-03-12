import { render } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("<Avatar />", () => {
  it(`GIVEN a <Avatar />
      WHEN render is called
      THEN should render a <Avatar />`, () => {
    const rendered = render(
      <Avatar
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >
        NL
      </Avatar>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Avatar />
      WHEN render is fallback
      THEN should render a "NL" string`, () => {
    const rendered = render(
      <Avatar
        src="https://imagees.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >
        NL
      </Avatar>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Avatar />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Avatar.toString()).toBe(".octo-UI-c-lmFHv");
  });
});
