import { render } from "@testing-library/react";
import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport
} from "./ScrollArea";

describe("<ScrollArea />", () => {
  it(`GIVEN a <ScrollArea />
      WHEN render is called
      THEN should render a <ScrollArea />`, () => {
    const rendered = render(
      <ScrollArea type="always">
        <ScrollAreaViewport>
          {Array.from({ length: 50 }).map((_, i, a) => (
            <p key={`v1.2.0-beta.${a.length - i}`}>{`v1.2.0-beta.${
              a.length - i
            }`}</p>
          ))}
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <ScrollArea />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ScrollArea.toString()).toBe(".octo-UI-c-ipNenM");
  });

  it(`GIVEN a <ScrollAreaViewport />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ScrollAreaViewport.toString()).toBe(".octo-UI-c-CnFzT");
  });

  it(`GIVEN a <ScrollAreaScrollbar />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ScrollAreaScrollbar.toString()).toBe(".octo-UI-c-dDCVUb");
  });

  it(`GIVEN a <ScrollAreaThumb />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ScrollAreaThumb.toString()).toBe(".octo-UI-c-hTfRLm");
  });

  it(`GIVEN a <ScrollAreaCorner />
      WHEN toString is called
      THEN return a string`, () => {
    expect(ScrollAreaCorner.toString()).toBe(".octo-UI-c-jMaIDO");
  });
});
