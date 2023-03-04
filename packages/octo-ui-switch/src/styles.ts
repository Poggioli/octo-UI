import { styled } from "@octo-ui/core";
import { StyledLabel } from "@octo-ui/label";
import * as Switch from "@radix-ui/react-switch";

const StyledSwitchThumb = styled(Switch.Thumb, {
  borderRadius: "$4",
  display: "block",
  height: "$11",
  transform: "translateX($sizes$2)",
  transition: "transform 200ms",
  width: "$11",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(calc(100% - $sizes$2))",
  },
});
StyledSwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

// ========================================================================= //

const StyledSwitchRoot = styled(Switch.Root, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "$$backgroundColorNormal",
  borderRadius: "$4",
  display: "inline-flex",
  flexShrink: 0,
  height: "calc($11 + $3)",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  width: "$14",

  '&[data-state="checked"]': {
    backgroundColor: "$$backgroundColorNormalChecked",
  },

  "&:disabled, &[disabled], &[aria-disabled=true]": {
    backgroundColor: "$$backgroundColorDisabled",

    '&[data-state="checked"]': {
      backgroundColor: "$$backgroundColorDisabledChecked",
    },
  },

  [`${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbNormal",
  },

  [`&[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbNormalChecked",
  },

  [`&:hover ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbHover",
  },

  [`&:hover[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbHoverChecked",
  },

  [`&:focus ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbFocus",
  },

  [`&:focus[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbFocusChecked",
  },

  [`&:active ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbActive",
  },

  [`&:active[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbActiveChecked",
  },

  [`&[data-disabled] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbDisabledUnchecked",
  },

  [`&[data-state="checked"][data-disabled] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbDisabledChecked",
  },

  "&:focus": {
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorNormal: "$colors$grey7",
        $$backgroundColorNormalChecked: "$colors$grey5",
        $$backgroundColorDisabled: "$colors$grey5",
        $$backgroundColorDisabledChecked: "$colors$grey3",
        $$backgroundColorThumbNormal: "$colors$white12",
        $$backgroundColorThumbHover: "$colors$white11",
        $$backgroundColorThumbFocus: "$colors$white11",
        $$backgroundColorThumbActive: "$colors$white11",
        $$backgroundColorThumbNormalChecked: "$colors$grey9",
        $$backgroundColorThumbHoverChecked: "$colors$grey11",
        $$backgroundColorThumbFocusChecked: "$colors$grey11",
        $$backgroundColorThumbActiveChecked: "$colors$grey11",
        $$backgroundColorThumbDisabledChecked: "$colors$grey5",
        $$backgroundColorThumbDisabledUnchecked: "$colors$white11",
      },
      primary: {
        $$backgroundColorNormal: "$colors$primary7",
        $$backgroundColorNormalChecked: "$colors$primary5",
        $$backgroundColorDisabled: "$colors$primary5",
        $$backgroundColorDisabledChecked: "$colors$primary3",
        $$backgroundColorThumbNormal: "$colors$white12",
        $$backgroundColorThumbHover: "$colors$white11",
        $$backgroundColorThumbFocus: "$colors$white11",
        $$backgroundColorThumbActive: "$colors$white11",
        $$backgroundColorThumbNormalChecked: "$colors$primary9",
        $$backgroundColorThumbHoverChecked: "$colors$primary11",
        $$backgroundColorThumbFocusChecked: "$colors$primary11",
        $$backgroundColorThumbActiveChecked: "$colors$primary11",
        $$backgroundColorThumbDisabledChecked: "$colors$primary5",
        $$backgroundColorThumbDisabledUnchecked: "$colors$white11",
      },
      secondary: {
        $$backgroundColorNormal: "$colors$secondary7",
        $$backgroundColorNormalChecked: "$colors$secondary5",
        $$backgroundColorDisabled: "$colors$secondary5",
        $$backgroundColorDisabledChecked: "$colors$secondary3",
        $$backgroundColorThumbNormal: "$colors$white12",
        $$backgroundColorThumbHover: "$colors$white11",
        $$backgroundColorThumbFocus: "$colors$white11",
        $$backgroundColorThumbActive: "$colors$white11",
        $$backgroundColorThumbNormalChecked: "$colors$secondary9",
        $$backgroundColorThumbHoverChecked: "$colors$secondary11",
        $$backgroundColorThumbFocusChecked: "$colors$secondary11",
        $$backgroundColorThumbActiveChecked: "$colors$secondary11",
        $$backgroundColorThumbDisabledChecked: "$colors$secondary5",
        $$backgroundColorThumbDisabledUnchecked: "$colors$white11",
      },
      success: {
        $$backgroundColorNormal: "$colors$success7",
        $$backgroundColorNormalChecked: "$colors$success5",
        $$backgroundColorDisabled: "$colors$success5",
        $$backgroundColorDisabledChecked: "$colors$success3",
        $$backgroundColorThumbNormal: "$colors$white12",
        $$backgroundColorThumbHover: "$colors$white11",
        $$backgroundColorThumbFocus: "$colors$white11",
        $$backgroundColorThumbActive: "$colors$white11",
        $$backgroundColorThumbNormalChecked: "$colors$success9",
        $$backgroundColorThumbHoverChecked: "$colors$success11",
        $$backgroundColorThumbFocusChecked: "$colors$success11",
        $$backgroundColorThumbActiveChecked: "$colors$success11",
        $$backgroundColorThumbDisabledChecked: "$colors$success5",
        $$backgroundColorThumbDisabledUnchecked: "$colors$white11",
      },
      error: {
        $$backgroundColorNormal: "$colors$error7",
        $$backgroundColorNormalChecked: "$colors$error5",
        $$backgroundColorDisabled: "$colors$error5",
        $$backgroundColorDisabledChecked: "$colors$error3",
        $$backgroundColorThumbNormal: "$colors$white12",
        $$backgroundColorThumbHover: "$colors$white11",
        $$backgroundColorThumbFocus: "$colors$white11",
        $$backgroundColorThumbActive: "$colors$white11",
        $$backgroundColorThumbNormalChecked: "$colors$error9",
        $$backgroundColorThumbHoverChecked: "$colors$error11",
        $$backgroundColorThumbFocusChecked: "$colors$error11",
        $$backgroundColorThumbActiveChecked: "$colors$error11",
        $$backgroundColorThumbDisabledChecked: "$colors$error5",
        $$backgroundColorThumbDisabledUnchecked: "$colors$white11",
      },
    },
  },

  defaultVariants: {
    color: "error",
  },
});
StyledSwitchRoot.toString = () => `.${StyledSwitchRoot.className}`;

// ========================================================================= //

const StyledSwitchLabel = styled(StyledLabel, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
});

// ========================================================================= //

const StyledSwitchContainer = styled("div", {
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  gap: "$5",
  flexWrap: "nowrap",
});
StyledSwitchContainer.toString = () => `.${StyledSwitchContainer.className}`;

export {
  StyledSwitchThumb,
  StyledSwitchRoot,
  StyledSwitchContainer,
  StyledSwitchLabel,
};
