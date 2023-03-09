import { styled } from "@octo-ui/core";
import { StyledLabel } from "@octo-ui/label";
import * as Checkbox from "@radix-ui/react-checkbox";

const StyledCheckboxGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",

  variants: {
    color: {
      unstyled: {
        $$backgroundColorItemNormal: "$colors$grey1",
        $$backgroundColorItemHover: "$colors$grey3",
        $$backgroundColorItemActive: "$colors$grey4",
        $$backgroundColorItemFocus: "$colors$grey4",
        $$backgroundColorItemDisabled: "$colors$grey2",
        $$textColorIndicatorNormal: "$colors$grey11",
        $$textColorIndicatorDisabled: "$colors$grey6",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$borderColorItemNormal: "$colors$grey8",
        $$borderColorItemChecked: "$colors$grey9",
        $$borderColorItemHover: "$colors$grey9",
        $$borderColorItemFocus: "$colors$grey10",
        $$borderColorItemActive: "$colors$grey10",
        $$borderColorItemDisabled: "$colors$grey5",
      },
      primary: {
        $$backgroundColorItemNormal: "$colors$primary1",
        $$backgroundColorItemHover: "$colors$primary3",
        $$backgroundColorItemActive: "$colors$primary4",
        $$backgroundColorItemFocus: "$colors$primary4",
        $$backgroundColorItemDisabled: "$colors$primary2",
        $$textColorIndicatorNormal: "$colors$primary11",
        $$textColorIndicatorDisabled: "$colors$primary6",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$borderColorItemNormal: "$colors$primary8",
        $$borderColorItemChecked: "$colors$primary9",
        $$borderColorItemHover: "$colors$primary9",
        $$borderColorItemFocus: "$colors$primary10",
        $$borderColorItemActive: "$colors$primary10",
        $$borderColorItemDisabled: "$colors$primary5",
      },
      secondary: {
        $$backgroundColorItemNormal: "$colors$secondary1",
        $$backgroundColorItemHover: "$colors$secondary3",
        $$backgroundColorItemActive: "$colors$secondary4",
        $$backgroundColorItemFocus: "$colors$secondary4",
        $$backgroundColorItemDisabled: "$colors$secondary2",
        $$textColorIndicatorNormal: "$colors$secondary11",
        $$textColorIndicatorDisabled: "$colors$secondary6",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$borderColorItemNormal: "$colors$secondary8",
        $$borderColorItemChecked: "$colors$secondary9",
        $$borderColorItemHover: "$colors$secondary9",
        $$borderColorItemFocus: "$colors$secondary10",
        $$borderColorItemActive: "$colors$secondary10",
        $$borderColorItemDisabled: "$colors$secondary5",
      },
      success: {
        $$backgroundColorItemNormal: "$colors$success1",
        $$backgroundColorItemHover: "$colors$success3",
        $$backgroundColorItemActive: "$colors$success4",
        $$backgroundColorItemFocus: "$colors$success4",
        $$backgroundColorItemDisabled: "$colors$success2",
        $$textColorIndicatorNormal: "$colors$success11",
        $$textColorIndicatorDisabled: "$colors$success6",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$borderColorItemNormal: "$colors$success8",
        $$borderColorItemChecked: "$colors$success9",
        $$borderColorItemHover: "$colors$success9",
        $$borderColorItemFocus: "$colors$success10",
        $$borderColorItemActive: "$colors$success10",
        $$borderColorItemDisabled: "$colors$success5",
      },
      error: {
        $$backgroundColorItemNormal: "$colors$error1",
        $$backgroundColorItemHover: "$colors$error3",
        $$backgroundColorItemActive: "$colors$error4",
        $$backgroundColorItemFocus: "$colors$error4",
        $$backgroundColorItemDisabled: "$colors$error2",
        $$textColorIndicatorNormal: "$colors$error11",
        $$textColorIndicatorDisabled: "$colors$error6",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$borderColorItemNormal: "$colors$error8",
        $$borderColorItemChecked: "$colors$error9",
        $$borderColorItemHover: "$colors$error9",
        $$borderColorItemFocus: "$colors$error10",
        $$borderColorItemActive: "$colors$error10",
        $$borderColorItemDisabled: "$colors$error5",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});
StyledCheckboxGroup.toString = () => `.${StyledCheckboxGroup.className}`;

// ========================================================================= //

const StyledCheckboxIndicator = styled(Checkbox.Indicator, {
  height: "calc($8 + $1)",
});
StyledCheckboxIndicator.toString = () =>
  `.${StyledCheckboxIndicator.className}`;

// ========================================================================= //

const StyledCheckboxItem = styled(Checkbox.Root, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "$$backgroundColorItemNormal",
  borderColor: "$$borderColorItemNormal",
  borderRadius: "$2",
  borderStyle: "solid",
  borderWidth: "$1",
  display: "flex",
  height: "$9",
  justifyContent: "center",
  width: "$9",

  "&:hover": {
    backgroundColor: "$$backgroundColorItemHover",
    borderColor: "$$borderColorItemHover",
  },

  "&:focus": {
    boxShadow:
      "inset 0 0 0 $sizes$1 $colors$primary7, 0 0 0 $sizes$1 $colors$primary7",
    backgroundColor: "$$backgroundColorItemFocus",
    borderColor: "$$borderColorItemFocus",
  },

  "&:active": {
    backgroundColor: "$$backgroundColorItemActive",
    borderColor: "$$borderColorItemActive",
  },

  "&[data-disabled]": {
    backgroundColor: "$$backgroundColorItemDisabled",
    borderColor: "$$borderColorItemDisabled",

    [`${StyledCheckboxIndicator.toString()}, ${StyledCheckboxIndicator.toString()} *`]:
      {
        color: "$$textColorIndicatorDisabled",
      },
  },

  "&[data-state='checked']:enabled, &[data-state='indeterminate']:enabled": {
    borderColor: "$$borderColorItemChecked",

    [`${StyledCheckboxIndicator.toString()}, ${StyledCheckboxIndicator.toString()} *`]:
      {
        color: "$$textColorIndicatorNormal",
      },
  },
});
StyledCheckboxItem.toString = () => `.${StyledCheckboxItem.className}`;

// ========================================================================= //

const StyledCheckboxItemLabel = styled(StyledLabel, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
});
StyledCheckboxItemLabel.toString = () =>
  `.${StyledCheckboxItemLabel.className}`;

// ========================================================================= //

const StyledCheckboxItemContainer = styled("div", {
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "nowrap",
  gap: "$5",
  justifyContent: "space-between",
  width: "fit-content",

  [`${StyledCheckboxItemLabel.toString()}`]: {
    color: "$$textColorNormal",
  },

  [`&:has(${StyledCheckboxItem.toString()}[data-disabled]) ${StyledCheckboxItemLabel.toString()}`]:
    {
      color: "$$textColorDisabled",
    },
});
StyledCheckboxItemContainer.toString = () =>
  `.${StyledCheckboxItemContainer.className}`;

export {
  StyledCheckboxGroup,
  StyledCheckboxItem,
  StyledCheckboxIndicator,
  StyledCheckboxItemLabel,
  StyledCheckboxItemContainer,
};
