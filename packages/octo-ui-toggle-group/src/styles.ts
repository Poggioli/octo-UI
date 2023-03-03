import { styled } from "@octo-ui/core";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const StyledToggleGroupItem = styled(ToggleGroup.Item, {
  all: "unset",
  backgroundColor: "transparen",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$3",

  "&, *": {
    fontFamily: "$untitled",
    fontSize: "$2",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
    lineHeight: "1",
  },

  "&:active": {
    boxShadow: "inset 0 0 0 $sizes$1 $colors$primary7",
  },

  "&:focus": {
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
  },
});
StyledToggleGroupItem.toString = () => `.${StyledToggleGroupItem.className}`;

// ========================================================================= //

const StyledToggleGroupRoot = styled(ToggleGroup.Root, {
  display: "inline-flex",
  borderRadius: "$3",
  padding: "$5",
  gap: "$2",

  backgroundColor: "transparent",
  border: "$sizes$1 solid $$borderColorOutlinedNormal",

  [`&:has(${StyledToggleGroupItem.toString()}:disabled)`]: {
    border: "$sizes$1 solid $$borderColorOutlinedDisabled",
  },

  [`${StyledToggleGroupItem.toString()}`]: {
    backgroundColor: "$$backgroundColorNormal",
    color: "$$textColorNormal",

    "@hover": {
      "&:hover": {
        backgroundColor: "$$backgroundColorHover",
      },
    },

    "&:active": {
      backgroundColor: "$$backgroundColorActive",
    },

    "&:focus": {
      backgroundColor: "$$backgroundColorFocus",
      color: "$$textColorFocus",
    },

    "&[data-state=on]": {
      backgroundColor: "$$backgroundColorOnNormal",
      color: "$$textColorOnNormal",
    },

    "&:disabled, &[data-disabled]": {
      backgroundColor: "$$backgroundColorDisabled",
      color: "$$textColorDisabled",
      pointerEvents: "none",

      "&[data-state=on]": {
        backgroundColor: "$$backgroundColorOnDisabled",
        color: "$$textColorOnDisabled",
      },
    },
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorNormal: "$colors$grey1",
        $$backgroundColorHover: "$colors$grey3",
        $$backgroundColorActive: "$colors$grey4",
        $$backgroundColorFocus: "$colors$grey4",
        $$backgroundColorDisabled: "$colors$grey2",
        $$backgroundColorOnNormal: "$colors$grey4",
        $$backgroundColorOnDisabled: "$colors$grey2",
        $$textColorNormal: "$colors$grey11",
        $$textColorFocus: "$colors$grey12",
        $$textColorDisabled: "$colors$grey6",
        $$textColorOnNormal: "$colors$grey11",
        $$textColorOnDisabled: "$colors$grey8",
        $$borderColorOutlinedNormal: "$colors$grey7",
        $$borderColorOutlinedDisabled: "$colors$grey5",
      },
      primary: {
        $$backgroundColorNormal: "$colors$primary1",
        $$backgroundColorHover: "$colors$primary3",
        $$backgroundColorActive: "$colors$primary4",
        $$backgroundColorFocus: "$colors$primary4",
        $$backgroundColorDisabled: "$colors$primary2",
        $$backgroundColorOnNormal: "$colors$primary4",
        $$backgroundColorOnDisabled: "$colors$primary2",
        $$textColorNormal: "$colors$primary11",
        $$textColorFocus: "$colors$primary12",
        $$textColorDisabled: "$colors$primary6",
        $$textColorOnNormal: "$colors$primary10",
        $$textColorOnDisabled: "$colors$primary8",
        $$borderColorOutlinedNormal: "$colors$primary7",
        $$borderColorOutlinedDisabled: "$colors$primary5",
      },
      secondary: {
        $$backgroundColorNormal: "$colors$secondary1",
        $$backgroundColorHover: "$colors$secondary3",
        $$backgroundColorActive: "$colors$secondary4",
        $$backgroundColorFocus: "$colors$secondary4",
        $$backgroundColorDisabled: "$colors$secondary2",
        $$backgroundColorOnNormal: "$colors$secondary4",
        $$backgroundColorOnDisabled: "$colors$secondary2",
        $$textColorNormal: "$colors$secondary11",
        $$textColorFocus: "$colors$secondary12",
        $$textColorDisabled: "$colors$secondary6",
        $$textColorOnNormal: "$colors$secondary10",
        $$textColorOnDisabled: "$colors$secondary8",
        $$borderColorOutlinedNormal: "$colors$secondary7",
        $$borderColorOutlinedDisabled: "$colors$secondary5",
      },
      success: {
        $$backgroundColorNormal: "$colors$success1",
        $$backgroundColorHover: "$colors$success3",
        $$backgroundColorActive: "$colors$success4",
        $$backgroundColorFocus: "$colors$success4",
        $$backgroundColorDisabled: "$colors$success2",
        $$backgroundColorOnNormal: "$colors$success4",
        $$backgroundColorOnDisabled: "$colors$success2",
        $$textColorNormal: "$colors$success11",
        $$textColorFocus: "$colors$success12",
        $$textColorDisabled: "$colors$success6",
        $$textColorOnNormal: "$colors$success10",
        $$textColorOnDisabled: "$colors$success8",
        $$borderColorOutlinedNormal: "$colors$success7",
        $$borderColorOutlinedDisabled: "$colors$success5",
      },
      error: {
        $$backgroundColorNormal: "$colors$error1",
        $$backgroundColorHover: "$colors$error3",
        $$backgroundColorActive: "$colors$error4",
        $$backgroundColorFocus: "$colors$error4",
        $$backgroundColorDisabled: "$colors$error2",
        $$backgroundColorOnNormal: "$colors$error4",
        $$backgroundColorOnDisabled: "$colors$error2",
        $$textColorNormal: "$colors$error11",
        $$textColorFocus: "$colors$error12",
        $$textColorDisabled: "$colors$error6",
        $$textColorOnNormal: "$colors$error10",
        $$textColorOnDisabled: "$colors$error8",
        $$borderColorOutlinedNormal: "$colors$error7",
        $$borderColorOutlinedDisabled: "$colors$error5",
      },
    },
    size: {
      small: {
        p: "$3",

        [`${StyledToggleGroupItem.toString()}`]: {
          p: "calc($3 - $1) $6",
        },
      },
      standard: {
        p: "$3",

        [`${StyledToggleGroupItem.toString()}`]: {
          p: "calc($5 + $1) $6",
        },
      },
      large: {
        p: "$4",

        [`${StyledToggleGroupItem.toString()}`]: {
          p: "$8 $6",
        },
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    size: "standard",
  },
});
StyledToggleGroupRoot.toString = () => `.${StyledToggleGroupRoot.className}`;

export { StyledToggleGroupRoot, StyledToggleGroupItem };
