import { styled } from "@octo-ui/core";
import * as Slider from "@radix-ui/react-slider";

const StyledSliderRoot = styled(Slider.Root, {
  alignItems: "center",
  display: "flex",
  position: "relative",
  userSelect: "none",
  touchAction: "none",

  "&[data-orientation='horizontal']": {
    flexDirection: "row",
    height: "$10",
    width: "100%",
  },

  "&[data-orientation='vertical']": {
    flexDirection: "column",
    height: "100%",
    minHeight: "calc($10 * 10)",
    width: "$10",
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorTrackNormal: "$colors$black4",
        $$backgroundColorTrackDisabled: "$colors$black2",
        $$backgroundColorRangeNormal: "$colors$black8",
        $$backgroundColorRangeDisabled: "$colors$black5",
        $$backgroundColorThumbNormal: "$colors$grey9",
        $$backgroundColorThumbHover: "$colors$grey10",
        $$backgroundColorThumbActive: "$colors$grey11",
        $$backgroundColorThumbFocus: "$colors$grey10",
        $$backgroundColorThumbDisabled: "$colors$grey7",
      },
      primary: {
        $$backgroundColorTrackNormal: "$colors$black4",
        $$backgroundColorTrackDisabled: "$colors$black2",
        $$backgroundColorRangeNormal: "$colors$primary8",
        $$backgroundColorRangeDisabled: "$colors$primary5",
        $$backgroundColorThumbNormal: "$colors$primary9",
        $$backgroundColorThumbHover: "$colors$primary10",
        $$backgroundColorThumbActive: "$colors$primary11",
        $$backgroundColorThumbFocus: "$colors$primary10",
        $$backgroundColorThumbDisabled: "$colors$primary7",
      },
      secondary: {
        $$backgroundColorTrackNormal: "$colors$black4",
        $$backgroundColorTrackDisabled: "$colors$black2",
        $$backgroundColorRangeNormal: "$colors$secondary8",
        $$backgroundColorRangeDisabled: "$colors$secondary5",
        $$backgroundColorThumbNormal: "$colors$secondary9",
        $$backgroundColorThumbHover: "$colors$secondary10",
        $$backgroundColorThumbActive: "$colors$secondary11",
        $$backgroundColorThumbFocus: "$colors$secondary10",
        $$backgroundColorThumbDisabled: "$colors$secondary7",
      },
      success: {
        $$backgroundColorTrackNormal: "$colors$black4",
        $$backgroundColorTrackDisabled: "$colors$black2",
        $$backgroundColorRangeNormal: "$colors$success8",
        $$backgroundColorRangeDisabled: "$colors$success5",
        $$backgroundColorThumbNormal: "$colors$success9",
        $$backgroundColorThumbHover: "$colors$success10",
        $$backgroundColorThumbActive: "$colors$success11",
        $$backgroundColorThumbFocus: "$colors$success10",
        $$backgroundColorThumbDisabled: "$colors$success7",
      },
      error: {
        $$backgroundColorTrackNormal: "$colors$black4",
        $$backgroundColorTrackDisabled: "$colors$black2",
        $$backgroundColorRangeNormal: "$colors$error8",
        $$backgroundColorRangeDisabled: "$colors$error5",
        $$backgroundColorThumbNormal: "$colors$error9",
        $$backgroundColorThumbHover: "$colors$error10",
        $$backgroundColorThumbActive: "$colors$error11",
        $$backgroundColorThumbFocus: "$colors$error10",
        $$backgroundColorThumbDisabled: "$colors$error7",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});
StyledSliderRoot.toString = () => `.${StyledSliderRoot.className}`;

// ========================================================================= //

const StyledSliderTrack = styled(Slider.Track, {
  backgroundColor: "$$backgroundColorTrackNormal",
  borderRadius: "$pill",
  flexGrow: 1,
  height: "$3",
  position: "relative",

  "&[data-orientation='horizontal']": {
    height: "$3",
  },

  "&[data-orientation='vertical']": {
    width: "$3",
  },

  "&[data-disabled]": {
    backgroundColor: "$$backgroundColorTrackDisabled",
  },
});
StyledSliderTrack.toString = () => `.${StyledSliderTrack.className}`;

// ========================================================================= //

const StyledSliderRange = styled(Slider.Range, {
  backgroundColor: "$$backgroundColorRangeNormal",
  borderRadius: "$pill",
  position: "absolute",

  "&[data-orientation='horizontal']": {
    height: "100%",
  },

  "&[data-orientation='vertical']": {
    width: "$3",
  },

  "&[data-disabled]": {
    backgroundColor: "$$backgroundColorRangeDisabled",
  },
});
StyledSliderRange.toString = () => `.${StyledSliderRange.className}`;

// ========================================================================= //

const StyledSliderThumb = styled(Slider.Thumb, {
  backgroundColor: "$$backgroundColorThumbNormal",
  borderRadius: 10,
  display: "block",
  height: "$10",
  outline: "none",
  width: "$10",

  "@hover": {
    "&:hover": {
      backgroundColor: "$$backgroundColorThumbHover",
    },
  },

  "&:active": {
    backgroundColor: "$$backgroundColorThumbActive",
  },

  "&:focus": {
    backgroundColor: "$$backgroundColorThumbFocus",
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
  },

  "&[data-disabled]": {
    backgroundColor: "$$backgroundColorThumbDisabled",
  },
});
StyledSliderThumb.toString = () => `.${StyledSliderThumb.className}`;

export {
  StyledSliderRoot,
  StyledSliderTrack,
  StyledSliderRange,
  StyledSliderThumb,
};
