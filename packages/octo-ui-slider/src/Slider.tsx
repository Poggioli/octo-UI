import { forwardRef } from "@octo-ui/core";
import {
  StyledSliderRange,
  StyledSliderRoot,
  StyledSliderThumb,
  StyledSliderTrack,
} from "./styles";
import {
  SliderProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
} from "./types";

const SliderThumb = forwardRef<typeof StyledSliderThumb, SliderThumbProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSliderThumb {...props} ref={forwardedRef} />;
  }
);
SliderThumb.toString = () => `.${StyledSliderThumb.className}`;

// ========================================================================= //

const SliderRange = forwardRef<typeof StyledSliderRange, SliderRangeProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSliderRange {...props} ref={forwardedRef} />;
  }
);
SliderRange.toString = () => `.${StyledSliderRange.className}`;

// ========================================================================= //

const SliderTrack = forwardRef<typeof StyledSliderTrack, SliderTrackProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSliderTrack {...props} ref={forwardedRef} />;
  }
);
SliderTrack.toString = () => `.${StyledSliderTrack.className}`;

// ========================================================================= //

const Slider = forwardRef<typeof StyledSliderRoot, SliderProps>(
  ({ thumbs = 1, ...props }, forwardedRef) => {
    return (
      <StyledSliderRoot {...props} ref={forwardedRef}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {Array.from({ length: thumbs }).map((_, index) => (
          <SliderThumb key={index} />
        ))}
      </StyledSliderRoot>
    );
  }
);
Slider.toString = () => `.${StyledSliderRoot.className}`;

export { SliderThumb, SliderRange, SliderTrack, Slider };
export {
  StyledSliderThumb,
  StyledSliderRange,
  StyledSliderTrack,
  StyledSliderRoot,
};
