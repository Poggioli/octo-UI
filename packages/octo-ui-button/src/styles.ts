import { styled } from "@octo-ui/core";
import { DEFAULT_TAG_BUTTON } from "./types";

const StyledButton = styled(DEFAULT_TAG_BUTTON, {
  alignItems: "center",
  appearance: "none",
  border: "none",
  borderRadius: "$2",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "$untitled",
  fontSize: "$3",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 500,
  justifyContent: "center",
  lineHeight: "1",
  margin: 0,
  outline: "none",
  padding: 0,
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  "&:active": {
    boxShadow: "inset 0 0 0 $sizes$1 $colors$primary7",
  },

  "&:focus": {
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorTextNormal: "transparent",
        $$backgroundColorTextHover: "$colors$grey3",
        $$backgroundColorTextActive: "$colors$grey4",
        $$backgroundColorTextFocus: "$colors$grey4",
        $$backgroundColorTextDisabled: "transparent",
        $$textColorTextNormal: "$colors$grey11",
        $$textColorTextDisabled: "$colors$grey6",

        $$backgroundColorOutlinedNormal: "$colors$grey1",
        $$backgroundColorOutlinedHover: "$colors$grey3",
        $$backgroundColorOutlinedActive: "$colors$grey4",
        $$backgroundColorOutlinedFocus: "$colors$grey4",
        $$backgroundColorOutlinedDisabled: "$colors$grey2",
        $$textColorOutlinedNormal: "$colors$grey11",
        $$textColorOutlinedDisabled: "$colors$grey7",
        $$borderColorOutlinedNormal: "$colors$grey7",
        $$borderColorOutlinedHover: "$colors$grey8",
        $$borderColorOutlinedDisabled: "$colors$grey6",

        $$backgroundColorSolidNormal: "$colors$grey9",
        $$backgroundColorSolidHover: "$colors$grey10",
        $$backgroundColorSolidActive: "$colors$grey11",
        $$backgroundColorSolidFocus: "$colors$grey10",
        $$backgroundColorSolidDisabled: "$colors$grey2",
        $$textColorSolidNormal: "$colors$grey1",
        $$textColorSolidDisabled: "$colors$grey7",
        $$boxShadowColorHover: "$colors$grey7",
        $$boxShadowColorActive: "$colors$grey7",
      },
      primary: {
        $$backgroundColorTextNormal: "transparent",
        $$backgroundColorTextHover: "$colors$primary3",
        $$backgroundColorTextActive: "$colors$primary4",
        $$backgroundColorTextFocus: "$colors$primary4",
        $$backgroundColorTextDisabled: "transparent",
        $$textColorTextNormal: "$colors$primary9",
        $$textColorTextDisabled: "$colors$primary6",

        $$backgroundColorOutlinedNormal: "$colors$primary1",
        $$backgroundColorOutlinedHover: "$colors$primary3",
        $$backgroundColorOutlinedActive: "$colors$primary4",
        $$backgroundColorOutlinedFocus: "$colors$primary4",
        $$backgroundColorOutlinedDisabled: "$colors$primary2",
        $$textColorOutlinedNormal: "$colors$primary11",
        $$textColorOutlinedDisabled: "$colors$primary7",
        $$borderColorOutlinedNormal: "$colors$primary7",
        $$borderColorOutlinedHover: "$colors$primary8",
        $$borderColorOutlinedDisabled: "$colors$primary6",

        $$backgroundColorSolidNormal: "$colors$primary9",
        $$backgroundColorSolidHover: "$colors$primary10",
        $$backgroundColorSolidActive: "$colors$primary11",
        $$backgroundColorSolidFocus: "$colors$primary10",
        $$backgroundColorSolidDisabled: "$colors$primary2",
        $$textColorSolidNormal: "$colors$primary1",
        $$textColorSolidDisabled: "$colors$primary7",
        $$boxShadowColorHover: "$colors$primary7",
        $$boxShadowColorActive: "$colors$primary7",
      },
      secondary: {
        $$backgroundColorTextNormal: "transparent",
        $$backgroundColorTextHover: "$colors$secondary3",
        $$backgroundColorTextActive: "$colors$secondary4",
        $$backgroundColorTextFocus: "$colors$secondary4",
        $$backgroundColorTextDisabled: "transparent",
        $$textColorTextNormal: "$colors$secondary9",
        $$textColorTextDisabled: "$colors$secondary6",

        $$backgroundColorOutlinedNormal: "$colors$secondary1",
        $$backgroundColorOutlinedHover: "$colors$secondary3",
        $$backgroundColorOutlinedActive: "$colors$secondary4",
        $$backgroundColorOutlinedFocus: "$colors$secondary4",
        $$backgroundColorOutlinedDisabled: "$colors$secondary2",
        $$textColorOutlinedNormal: "$colors$secondary11",
        $$textColorOutlinedDisabled: "$colors$secondary7",
        $$borderColorOutlinedNormal: "$colors$secondary7",
        $$borderColorOutlinedHover: "$colors$secondary8",
        $$borderColorOutlinedDisabled: "$colors$secondary6",

        $$backgroundColorSolidNormal: "$colors$secondary9",
        $$backgroundColorSolidHover: "$colors$secondary10",
        $$backgroundColorSolidActive: "$colors$secondary11",
        $$backgroundColorSolidFocus: "$colors$secondary10",
        $$backgroundColorSolidDisabled: "$colors$secondary2",
        $$textColorSolidNormal: "$colors$secondary1",
        $$textColorSolidDisabled: "$colors$secondary7",
        $$boxShadowColorHover: "$colors$secondary7",
        $$boxShadowColorActive: "$colors$secondary7",
      },
      success: {
        $$backgroundColorTextNormal: "transparent",
        $$backgroundColorTextHover: "$colors$success3",
        $$backgroundColorTextActive: "$colors$success4",
        $$backgroundColorTextFocus: "$colors$success4",
        $$backgroundColorTextDisabled: "transparent",
        $$textColorTextNormal: "$colors$success9",
        $$textColorTextDisabled: "$colors$success6",

        $$backgroundColorOutlinedNormal: "$colors$success1",
        $$backgroundColorOutlinedHover: "$colors$success3",
        $$backgroundColorOutlinedActive: "$colors$success4",
        $$backgroundColorOutlinedFocus: "$colors$success4",
        $$backgroundColorOutlinedDisabled: "$colors$success2",
        $$textColorOutlinedNormal: "$colors$success11",
        $$textColorOutlinedDisabled: "$colors$success7",
        $$borderColorOutlinedNormal: "$colors$success7",
        $$borderColorOutlinedHover: "$colors$success8",
        $$borderColorOutlinedDisabled: "$colors$success6",

        $$backgroundColorSolidNormal: "$colors$success9",
        $$backgroundColorSolidHover: "$colors$success10",
        $$backgroundColorSolidActive: "$colors$success11",
        $$backgroundColorSolidFocus: "$colors$success10",
        $$backgroundColorSolidDisabled: "$colors$success2",
        $$textColorSolidNormal: "$colors$success1",
        $$textColorSolidDisabled: "$colors$success7",
        $$boxShadowColorHover: "$colors$success7",
        $$boxShadowColorActive: "$colors$success7",
      },
      error: {
        $$backgroundColorTextNormal: "transparent",
        $$backgroundColorTextHover: "$colors$error3",
        $$backgroundColorTextActive: "$colors$error4",
        $$backgroundColorTextFocus: "$colors$error4",
        $$backgroundColorTextDisabled: "transparent",
        $$textColorTextNormal: "$colors$error9",
        $$textColorTextDisabled: "$colors$error6",

        $$backgroundColorOutlinedNormal: "$colors$error1",
        $$backgroundColorOutlinedHover: "$colors$error3",
        $$backgroundColorOutlinedActive: "$colors$error4",
        $$backgroundColorOutlinedFocus: "$colors$error4",
        $$backgroundColorOutlinedDisabled: "$colors$error2",
        $$textColorOutlinedNormal: "$colors$error11",
        $$textColorOutlinedDisabled: "$colors$error7",
        $$borderColorOutlinedNormal: "$colors$error7",
        $$borderColorOutlinedHover: "$colors$error8",
        $$borderColorOutlinedDisabled: "$colors$error6",

        $$backgroundColorSolidNormal: "$colors$error9",
        $$backgroundColorSolidHover: "$colors$error10",
        $$backgroundColorSolidActive: "$colors$error11",
        $$backgroundColorSolidFocus: "$colors$error10",
        $$backgroundColorSolidDisabled: "$colors$error2",
        $$textColorSolidNormal: "$colors$error1",
        $$textColorSolidDisabled: "$colors$error7",
        $$boxShadowColorHover: "$colors$error7",
        $$boxShadowColorActive: "$colors$error7",
      },
    },
    variant: {
      text: {
        backgroundColor: "$$backgroundColorTextNormal",
        border: "none",
        color: "$$textColorTextNormal",

        "@hover": {
          "&:hover": {
            backgroundColor: "$$backgroundColorTextHover",
          },
        },

        "&:active": {
          backgroundColor: "$$backgroundColorTextActive",
        },

        "&:focus": {
          backgroundColor: "$$backgroundColorTextFocus",
        },

        "&:disabled": {
          backgroundColor: "$$backgroundColorTextDisabled",
          color: "$$textColorTextDisabled",
          pointerEvents: "none",
        },
      },
      outlined: {
        backgroundColor: "$$backgroundColorOutlinedNormal",
        borderColor: "$$borderColorOutlinedNormal",
        borderStyle: "solid",
        borderWidth: "$1",
        color: "$$textColorOutlinedNormal",
        mixBlendMode: "multiply",

        "@hover": {
          "&:hover": {
            backgroundColor: "$$backgroundColorOutlinedHover",
            borderColor: "$$borderColorOutlinedHover",
          },
        },

        "&:active": {
          backgroundColor: "$$backgroundColorOutlinedActive",
        },

        "&:focus": {
          backgroundColor: "$$backgroundColorOutlinedFocus",
        },

        "&:disabled": {
          backgroundColor: "$$backgroundColorOutlinedDisabled",
          borderColor: "$$borderColorOutlinedDisabled",
          color: "$$textColorOutlinedDisabled",
          pointerEvents: "none",
        },
      },
      solid: {
        backgroundColor: "$$backgroundColorSolidNormal",
        borderWidth: "none",
        color: "$$textColorSolidNormal",

        "@hover": {
          "&:hover": {
            backgroundColor: "$$backgroundColorSolidHover",
            boxShadow: "inset 0 0 0 $sizes$1 $$boxShadowColorHover",
          },
        },

        "&:active": {
          backgroundColor: "$$backgroundColorSolidActive",
          boxShadow: "inset 0 0 0 $sizes$1 $$boxShadowColorHover",
        },

        "&:focus": {
          backgroundColor: "$$backgroundColorSolidFocus",
        },

        "&:disabled": {
          backgroundColor: "$$backgroundColorSolidDisabled",
          color: "$$textColorSolidDisabled",
          pointerEvents: "none",
        },
      },
    },
    corners: {
      peaked: {
        borderRadius: 0,
      },
      soft: {
        borderRadius: "$3",
      },
      rounded: {
        borderRadius: "$pill",
      },
    },
    size: {
      small: {
        p: "$4 $5",
      },
      standard: {
        p: "$7 $10",
      },
      large: {
        p: "$10 $12",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    variant: "solid",
    corners: "soft",
    size: "standard",
  },
});
StyledButton.toString = () => `.${StyledButton.className}`;

export { StyledButton };
