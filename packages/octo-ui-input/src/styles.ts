import { styled } from "@octo-ui/core";

const StyledInput = styled("input", {
  appearance: "none",
  borderColor: "$$borderColorNormal",
  backgroundColor: "$$backgroundColorNormal",
  borderRadius: "$2",
  borderStyle: "solid",
  borderWidth: "$1",
  boxSizing: "border-box",
  fontFamily: "$untitled",
  fontSize: "$3",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  lineHeight: "1",
  margin: 0,
  outline: "none",
  padding: 0,
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  "&, *": {
    color: "$$textColorNormal",
  },

  "&:hover": {
    backgroundColor: "$$backgroundColorHover",
    borderColor: "$$borderColorHover",
  },

  "&:focus": {
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
    backgroundColor: "$$backgroundColorFocus",
    borderColor: "$$borderColorFocus",
  },

  "&:active": {
    backgroundColor: "$$backgroundColorActive",
    borderColor: "$$borderColorActive",
  },

  "&::placeholder": {
    color: "$$placeholderColorNormal",
  },

  "&:disabled": {
    backgroundColor: "$$backgroundColorDisabled",
    borderColor: "$$borderColorDisabled",

    "&, *": {
      color: "$$textColorDisabled",
    },

    "&::placeholder": {
      color: "$$placeholderColorDisabled",
    },
  },

  "&:read-only": {
    backgroundColor: "$$backgroundColorReadOnly",
  },

  variants: {
    size: {
      small: {
        p: "calc($4 - calc($1 * 1.5)) $6 calc($4 - calc($1 * 1.5)) $4",
      },
      standard: {
        p: "calc($7 - calc($1 * 1.5)) $9 calc($7 - calc($1 * 1.5)) $7",
      },
      large: {
        p: "calc($10 - calc($1 * 1.5)) $12 calc($10 - calc($1 * 1.5)) $10",
      },
    },
    color: {
      unstyled: {
        $$backgroundColorNormal: "$colors$grey1",
        $$backgroundColorHover: "$colors$grey3",
        $$backgroundColorActive: "$colors$grey4",
        $$backgroundColorFocus: "$colors$grey4",
        $$backgroundColorReadOnly: "$colors$grey2",
        $$backgroundColorDisabled: "$colors$grey2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$grey8",
        $$borderColorChecked: "$colors$grey9",
        $$borderColorHover: "$colors$grey9",
        $$borderColorFocus: "$colors$grey10",
        $$borderColorActive: "$colors$grey10",
        $$borderColorDisabled: "$colors$grey5",
      },
      primary: {
        $$backgroundColorNormal: "$colors$primary1",
        $$backgroundColorHover: "$colors$primary3",
        $$backgroundColorActive: "$colors$primary4",
        $$backgroundColorFocus: "$colors$primary4",
        $$backgroundColorReadOnly: "$colors$primary2",
        $$backgroundColorDisabled: "$colors$primary2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$primary8",
        $$borderColorChecked: "$colors$primary9",
        $$borderColorHover: "$colors$primary9",
        $$borderColorFocus: "$colors$primary10",
        $$borderColorActive: "$colors$primary10",
        $$borderColorDisabled: "$colors$primary5",
      },
      secondary: {
        $$backgroundColorNormal: "$colors$secondary1",
        $$backgroundColorHover: "$colors$secondary3",
        $$backgroundColorActive: "$colors$secondary4",
        $$backgroundColorFocus: "$colors$secondary4",
        $$backgroundColorReadOnly: "$colors$secondary2",
        $$backgroundColorDisabled: "$colors$secondary2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$secondary8",
        $$borderColorChecked: "$colors$secondary9",
        $$borderColorHover: "$colors$secondary9",
        $$borderColorFocus: "$colors$secondary10",
        $$borderColorActive: "$colors$secondary10",
        $$borderColorDisabled: "$colors$secondary5",
      },
      success: {
        $$backgroundColorNormal: "$colors$success1",
        $$backgroundColorHover: "$colors$success3",
        $$backgroundColorActive: "$colors$success4",
        $$backgroundColorFocus: "$colors$success4",
        $$backgroundColorReadOnly: "$colors$success2",
        $$backgroundColorDisabled: "$colors$success2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$success8",
        $$borderColorChecked: "$colors$success9",
        $$borderColorHover: "$colors$success9",
        $$borderColorFocus: "$colors$success10",
        $$borderColorActive: "$colors$success10",
        $$borderColorDisabled: "$colors$success5",
      },
      error: {
        $$backgroundColorNormal: "$colors$error1",
        $$backgroundColorHover: "$colors$error3",
        $$backgroundColorActive: "$colors$error4",
        $$backgroundColorFocus: "$colors$error4",
        $$backgroundColorReadOnly: "$colors$error2",
        $$backgroundColorDisabled: "$colors$error2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$error8",
        $$borderColorChecked: "$colors$error9",
        $$borderColorHover: "$colors$error9",
        $$borderColorFocus: "$colors$error10",
        $$borderColorActive: "$colors$error10",
        $$borderColorDisabled: "$colors$error5",
      },
    },
  },

  defaultVariants: {
    size: "standard",
    color: "unstyled",
  },
});
StyledInput.toString = () => `.${StyledInput.className}`;

export { StyledInput };
