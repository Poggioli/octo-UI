import { render } from "@testing-library/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

describe("<HoverCard />", () => {
  it(`GIVEN a <HoverCard />
      WHEN render is called
      THEN should render a <HoverCard />`, () => {
    const rendered = render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>
          <button>Trigger</button>
        </HoverCardTrigger>
        <HoverCardContent>
          <h3>HoverCard content</h3>
        </HoverCardContent>
      </HoverCard>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <HoverCard />
      WHEN render is called
      THEN should render a <HoverCard />`, () => {
    const rendered = render(
      <HoverCard>
        <HoverCardTrigger>
          <button>Trigger</button>
        </HoverCardTrigger>
        <HoverCardContent>
          <h3>HoverCard content</h3>
        </HoverCardContent>
      </HoverCard>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  describe("hasArrow", () => {
    it(`GIVEN a <HoverCard />
        WHEN hasArrow props is false
        THEN should NOT render a <HoverCardArrow />`, () => {
      const rendered = render(
        <HoverCard defaultOpen>
          <HoverCardTrigger>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent hasArrow={false}>
            <h3>HoverCard content</h3>
          </HoverCardContent>
        </HoverCard>
      );
      const arrow = rendered.queryByTestId("arrow");
      expect(arrow).toBeNull();
    });

    it(`GIVEN a <HoverCard />
        WHEN hasArrow it's not setted
        THEN should render a <HoverCardArrow />`, () => {
      const rendered = render(
        <HoverCard defaultOpen>
          <HoverCardTrigger>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <h3>HoverCard content</h3>
          </HoverCardContent>
        </HoverCard>
      );
      const arrow = rendered.queryByTestId("arrow");
      expect(arrow).toBeTruthy();
    });
  });

  it(`GIVEN a <HoverCard />
      WHEN toString is called
      THEN return a string`, () => {
    expect(HoverCard.toString()).toBe(".octo-UI-c-PJLV");
  });

  it(`GIVEN a <HoverCardContent />
      WHEN toString is called
      THEN return a string`, () => {
    expect(HoverCardContent.toString()).toBe(".octo-UI-c-dsEMLZ");
  });

  it(`GIVEN a <HoverCardTrigger />
      WHEN toString is called
      THEN return a string`, () => {
    expect(HoverCardTrigger.toString()).toBe(".octo-UI-c-PJLV");
  });
});
