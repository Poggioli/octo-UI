import { render } from "@testing-library/react";
import { Badge } from "./Badge";

describe("<Badge />", () => {
  it(`GIVEN a <Badge /> component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Badge count={10}>
        <button>Button badge</button>
      </Badge>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Badge /> component
      WHEN toString is called
      THEN return a string`, () => {
    expect(Badge.toString()).toBe("octo-UI-c-dqSAaa");
  });

  describe("dot props", () => {
    it(`GIVEN a <Badge /> component
        WHEN dot props is false
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={10} dot={false}>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("10");
      expect(badgeCount).toBeVisible();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Badge /> component
        WHEN dot props is true
        THEN should NOT show the count value`, () => {
      const rendered = render(
        <Badge count={10} dot>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.queryByText("10");
      expect(badgeCount).toBeNull();
      expect(rendered.container).toMatchSnapshot();
    });
  });

  describe("showZero props", () => {
    it(`GIVEN a <Badge /> component with count 0
        WHEN showZero props is false
        THEN should NOT show the count value`, () => {
      const rendered = render(
        <Badge count={0} showZero={false}>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.queryByText("0");
      expect(badgeCount).toBeNull();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Badge /> component with count 0
        AND showZero props is true
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={0} showZero>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("0");
      expect(badgeCount).toBeVisible();
      expect(rendered.container).toMatchSnapshot();
    });
  });

  describe("maxCount props", () => {
    it(`GIVEN a <Badge /> component
        WHEN maxCount is equal to 99 
        AND count props is less than 99
        THEN should show the count value`, () => {
      const rendered = render(
        <Badge count={3} showZero>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("3");
      expect(badgeCount).toBeVisible();
      expect(rendered.container).toMatchSnapshot();
    });

    it(`GIVEN a <Badge /> component
      WHEN maxCount is equal to 99 
      AND count props is greater than 99
      THEN should render the "99+"`, () => {
      const rendered = render(
        <Badge count={100} showZero>
          <button>Button badge</button>
        </Badge>
      );

      const badgeCount = rendered.getByText("99+");
      expect(badgeCount).toBeVisible();
      expect(rendered.container).toMatchSnapshot();
    });
  });
});
