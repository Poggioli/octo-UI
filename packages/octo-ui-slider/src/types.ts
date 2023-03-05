import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import * as Slider from "@radix-ui/react-slider";
import {
  StyledSliderRange,
  StyledSliderRoot,
  StyledSliderThumb,
  StyledSliderTrack,
} from "./styles";

export type SliderProps = HTMLOctoProps<typeof StyledSliderRoot> &
  OctoVariants<typeof StyledSliderRoot> &
  Slider.SliderProps & {
    thumbs?: number;
  };

// ========================================================================= //

export type SliderTrackProps = HTMLOctoProps<typeof StyledSliderTrack> &
  OctoVariants<typeof StyledSliderTrack> &
  Slider.SliderTrackProps;

// ========================================================================= //

export type SliderRangeProps = HTMLOctoProps<typeof StyledSliderRange> &
  OctoVariants<typeof StyledSliderRange> &
  Slider.SliderRangeProps;

// ========================================================================= //

export type SliderThumbProps = HTMLOctoProps<typeof StyledSliderThumb> &
  OctoVariants<typeof StyledSliderThumb> &
  Slider.SliderThumbProps;
