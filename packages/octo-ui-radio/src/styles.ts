import { keyframes, styled } from "@octo-ui/core";
import { StyledLabel } from "@octo-ui/label";
import * as RadioGroup from "@radix-ui/react-radio-group";

const StyledRadioGroupRoot = styled(RadioGroup.Root, {
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
        $$backgroundColorIndicatorNormal: "$colors$grey11",
        $$backgroundColorIndicatorDisabled: "$colors$grey5",
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
        $$backgroundColorIndicatorNormal: "$colors$primary11",
        $$backgroundColorIndicatorDisabled: "$colors$primary5",
        $$textColorNormal: "$colors$primary12",
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
        $$backgroundColorIndicatorNormal: "$colors$secondary11",
        $$backgroundColorIndicatorDisabled: "$colors$secondary5",
        $$textColorNormal: "$colors$secondary12",
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
        $$backgroundColorIndicatorNormal: "$colors$success11",
        $$backgroundColorIndicatorDisabled: "$colors$success5",
        $$textColorNormal: "$colors$success12",
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
        $$backgroundColorIndicatorNormal: "$colors$error11",
        $$backgroundColorIndicatorDisabled: "$colors$error5",
        $$textColorNormal: "$colors$error12",
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
StyledRadioGroupRoot.toString = () => `.${StyledRadioGroupRoot.className}`;

// ========================================================================= //

const StyledRadioGroupItem = styled(RadioGroup.Item, {
  all: "unset",
  backgroundColor: "$$backgroundColorItemNormal",
  borderColor: "$$borderColorItemNormal",
  borderRadius: "$round",
  borderStyle: "solid",
  borderWidth: "$1",
  height: "$9",
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
  },

  "&[data-state='checked']:enabled": {
    borderColor: "$$borderColorItemChecked",
  },
});
StyledRadioGroupItem.toString = () => `.${StyledRadioGroupItem.className}`;

// ========================================================================= //

const checkAnimation = keyframes({
  "0%": {
    transform: "scale(0)",
  },
  "100%": {
    transform: "scale(1)",
  },
});

const StyledRadioGroupIndicator = styled(RadioGroup.Indicator, {
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  position: "relative",
  width: "100%",

  "&[data-state='checked']::after": {
    animation: `${checkAnimation} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    backgroundColor: "$$backgroundColorIndicatorNormal",
  },

  "&[data-disabled][data-state='checked']::after": {
    backgroundColor: "$$backgroundColorIndicatorDisabled",
  },

  "&::after": {
    content: '""',
    borderRadius: "$round",
    display: "block",
    height: "$5",
    width: "$5",
  },
});
StyledRadioGroupIndicator.toString = () =>
  `.${StyledRadioGroupIndicator.className}`;

// ========================================================================= //

const StyledRadioGroupItemLabel = styled(StyledLabel, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
});
StyledRadioGroupItemLabel.toString = () =>
  `.${StyledRadioGroupItemLabel.className}`;

// ========================================================================= //

const StyledRadioGroupItemContainer = styled("div", {
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "nowrap",
  gap: "$5",
  justifyContent: "space-between",
  width: "fit-content",

  [`${StyledRadioGroupItemLabel.toString()}`]: {
    color: "$$textColorNormal",
  },

  [`&:has(${StyledRadioGroupItem.toString()}[data-disabled]) ${StyledRadioGroupItemLabel.toString()}`]:
    {
      color: "$$textColorDisabled",
    },
});
StyledRadioGroupItemContainer.toString = () =>
  `.${StyledRadioGroupItemContainer.className}`;

export {
  StyledRadioGroupRoot,
  StyledRadioGroupItem,
  StyledRadioGroupIndicator,
  StyledRadioGroupItemLabel,
  StyledRadioGroupItemContainer,
};
