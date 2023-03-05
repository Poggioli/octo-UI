import { render } from "@testing-library/react";
import { Slider, SliderRange, SliderThumb, SliderTrack } from "./Slider";

describe("<Slider />", () => {
  it(`GIVEN a <Slider />
      WHEN render is called
      THEN should render a <Slider />`, () => {
    const rendered = render(<Slider />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a <Slider />
      WHEN toString is called
      THEN return a string`, () => {
    expect(Slider.toString()).toBe(".octo-UI-c-eWmfpo");
  });

  it(`GIVEN a <SliderThumb />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SliderThumb.toString()).toBe(".octo-UI-c-iAtlAa");
  });

  it(`GIVEN a <SliderTrack />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SliderTrack.toString()).toBe(".octo-UI-c-gbhTzR");
  });

  it(`GIVEN a <SliderRange />
      WHEN toString is called
      THEN return a string`, () => {
    expect(SliderRange.toString()).toBe(".octo-UI-c-eFZlhW");
  });
});
