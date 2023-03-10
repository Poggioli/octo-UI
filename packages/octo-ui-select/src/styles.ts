import { styled } from "@octo-ui/core";
import * as Select from "@radix-ui/react-select";

const StyledSelectRoot = styled(Select.Root, {});
StyledSelectRoot.toString = () => `.${StyledSelectRoot.className}`;

// ========================================================================= //

const StyledSelectValue = styled(Select.Value, {});
StyledSelectValue.toString = () => `.${StyledSelectValue.className}`;

// ========================================================================= //

const StyledSelectTrigger = styled(Select.Trigger, {
  alignItems: "center",
  appearance: "none",
  backgroundColor: "$$backgroundColorNormal",
  borderColor: "$$borderColorNormal",
  borderRadius: "$2",
  borderStyle: "solid",
  borderWidth: "$1",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "$untitled",
  fontSize: "$3",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  gap: "$9",
  justifyContent: "space-between",
  lineHeight: "1",
  margin: 0,
  outline: "none",
  padding: 0,
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  width: "100%",

  "&> :first-child": {
    overflow: "hidden",
    textAlign: "left",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
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

  "&, *": {
    color: "$$textColorNormal",
  },

  "&[data-placeholder], &[data-placeholder] *": {
    color: "$$placeholderColorNormal",
  },

  "&[data-disabled]": {
    backgroundColor: "$$backgroundColorDisabled",
    borderColor: "$$borderColorDisabled",

    "&, *": {
      color: "$$textColorDisabled",
    },

    "&[data-placeholder], &[data-placeholder] *": {
      color: "$$placeholderColorDisabled",
    },
  },

  variants: {
    size: {
      small: {
        p: "$4 $6 $4 $4",
      },
      standard: {
        p: "$7 $9 $7 $7",
      },
      large: {
        p: "$10 $12 $10 $10",
      },
    },
    color: {
      unstyled: {
        $$backgroundColorNormal: "$colors$grey1",
        $$backgroundColorHover: "$colors$grey3",
        $$backgroundColorActive: "$colors$grey4",
        $$backgroundColorFocus: "$colors$grey4",
        $$backgroundColorDisabled: "$colors$grey2",
        $$textColorNormal: "$colors$grey12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$grey8",
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
        $$backgroundColorDisabled: "$colors$primary2",
        $$textColorNormal: "$colors$primary12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$primary8",
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
        $$backgroundColorDisabled: "$colors$secondary2",
        $$textColorNormal: "$colors$secondary12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$secondary8",
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
        $$backgroundColorDisabled: "$colors$success2",
        $$textColorNormal: "$colors$success12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$success8",
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
        $$backgroundColorDisabled: "$colors$error2",
        $$textColorNormal: "$colors$error12",
        $$textColorDisabled: "$colors$grey8",
        $$placeholderColorNormal: "$colors$grey9",
        $$placeholderColorDisabled: "$colors$grey7",
        $$borderColorNormal: "$colors$error8",
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
StyledSelectTrigger.toString = () => `.${StyledSelectTrigger.className}`;

// ========================================================================= //

const StyledSelectIcon = styled(Select.Icon, {});
StyledSelectIcon.toString = () => `.${StyledSelectIcon.className}`;

// ========================================================================= //

const StyledSelectPortal = styled(Select.Portal, {});
StyledSelectPortal.toString = () => `.${StyledSelectPortal.className}`;

// ========================================================================= //

const StyledSelectContent = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "$$backgroundColorContent",
  borderRadius: "$2",
  boxShadow:
    "0px 10px 38px -10px $colors$black7, 0px 10px 20px -15px $colors$black6",

  variants: {
    color: {
      unstyled: {
        $$backgroundColorContent: "$colors$grey2",
        $$backgroundColorItemNormal: "$colors$grey2",
        $$backgroundColorItemHighlighted: "$colors$grey9",
        $$textColorItemNormal: "$colors$grey11",
        $$textColorItemHighlighted: "$colors$grey1",
        $$textColorItemDisabled: "$colors$grey7",
        $$backgroundColorScrollButton: "$colors$grey1",
        $$textColorScrollButton: "$colors$grey11",
        $$textColorLabel: "$colors$grey9",
        $$backgroundColorSeparator: "$colors$grey6",
      },
      primary: {
        $$backgroundColorContent: "$colors$primary2",
        $$backgroundColorItemNormal: "$colors$primary2",
        $$backgroundColorItemHighlighted: "$colors$primary9",
        $$textColorItemNormal: "$colors$primary11",
        $$textColorItemHighlighted: "$colors$primary1",
        $$textColorItemDisabled: "$colors$primary7",
        $$backgroundColorScrollButton: "$colors$primary1",
        $$textColorScrollButton: "$colors$primary11",
        $$textColorLabel: "$colors$primary9",
        $$backgroundColorSeparator: "$colors$primary6",
      },
      secondary: {
        $$backgroundColorContent: "$colors$secondary2",
        $$backgroundColorItemNormal: "$colors$secondary2",
        $$backgroundColorItemHighlighted: "$colors$secondary9",
        $$textColorItemNormal: "$colors$secondary11",
        $$textColorItemHighlighted: "$colors$secondary1",
        $$textColorItemDisabled: "$colors$secondary7",
        $$backgroundColorScrollButton: "$colors$secondary1",
        $$textColorScrollButton: "$colors$secondary11",
        $$textColorLabel: "$colors$secondary9",
        $$backgroundColorSeparator: "$colors$secondary6",
      },
      success: {
        $$backgroundColorContent: "$colors$success2",
        $$backgroundColorItemNormal: "$colors$success2",
        $$backgroundColorItemHighlighted: "$colors$success9",
        $$textColorItemNormal: "$colors$success11",
        $$textColorItemHighlighted: "$colors$success1",
        $$textColorItemDisabled: "$colors$success7",
        $$backgroundColorScrollButton: "$colors$success1",
        $$textColorScrollButton: "$colors$success11",
        $$textColorLabel: "$colors$success9",
        $$backgroundColorSeparator: "$colors$success6",
      },
      error: {
        $$backgroundColorContent: "$colors$error2",
        $$backgroundColorItemNormal: "$colors$error2",
        $$backgroundColorItemHighlighted: "$colors$error9",
        $$textColorItemNormal: "$colors$error11",
        $$textColorItemHighlighted: "$colors$error1",
        $$textColorItemDisabled: "$colors$error7",
        $$backgroundColorScrollButton: "$colors$error1",
        $$textColorScrollButton: "$colors$error11",
        $$textColorLabel: "$colors$error9",
        $$backgroundColorSeparator: "$colors$error6",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});
StyledSelectContent.toString = () => `.${StyledSelectContent.className}`;

// ========================================================================= //

const StyledSelectViewport = styled(Select.Viewport, {
  p: "$4",
});
StyledSelectViewport.toString = () => `.${StyledSelectViewport.className}`;

// ========================================================================= //

const StyledSelectItem = styled(Select.Item, {
  backgroundColor: "$$backgroundColorItemNormal",
  color: "$$textColorItemNormal",
  fontFamily: "$untitled",
  fontSize: "$3",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  lineHeight: "2",
  borderRadius: "$1",
  display: "flex",
  alignItems: "center",
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$$textColorItemDisabled",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$$backgroundColorItemHighlighted",
    color: "$$textColorItemHighlighted",
  },
});
StyledSelectItem.toString = () => `.${StyledSelectItem.className}`;

// ========================================================================= //

const StyledSelectItemText = styled(Select.ItemText, {});
StyledSelectItemText.toString = () => `.${StyledSelectItemText.className}`;

// ========================================================================= //

const StyledSelectItemIndicator = styled(Select.ItemIndicator, {
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  width: "$11",
});
StyledSelectItemIndicator.toString = () =>
  `.${StyledSelectItemIndicator.className}`;

// ========================================================================= //

const StyledSelectScrollUpButton = styled(Select.ScrollUpButton, {
  alignItems: "center",
  backgroundColor: "$$backgroundColorScrollButton",
  color: "$$textColorScrollButton",
  cursor: "default",
  display: "flex",
  height: "$11",
  justifyContent: "center",
});
StyledSelectScrollUpButton.toString = () =>
  `.${StyledSelectScrollUpButton.className}`;

// ========================================================================= //

const StyledSelectScrollDownButton = styled(Select.ScrollDownButton, {
  alignItems: "center",
  backgroundColor: "$$backgroundColorScrollButton",
  color: "$$textColorScrollButton",
  cursor: "default",
  display: "flex",
  height: "$11",
  justifyContent: "center",
});
StyledSelectScrollDownButton.toString = () =>
  `.${StyledSelectScrollDownButton.className}`;

// ========================================================================= //

const StyledSelectGroup = styled(Select.Group, {});
StyledSelectGroup.toString = () => `.${StyledSelectGroup.className}`;

// ========================================================================= //

const StyledSelectLabelGroup = styled(Select.Label, {
  color: "$$textColorLabel",
  fontSize: "$1",
  lineHeight: "2",
  padding: "0 $11",
});
StyledSelectLabelGroup.toString = () => `.${StyledSelectLabelGroup.className}`;

// ========================================================================= //

const StyledSelectSeparator = styled(Select.Separator, {
  backgroundColor: "$$backgroundColorSeparator",
  height: "$1",
  margin: "$3",
});
StyledSelectSeparator.toString = () => `.${StyledSelectSeparator.className}`;

// ========================================================================= //

const StyledSelectArrow = styled(Select.Arrow, {});
StyledSelectArrow.toString = () => `.${StyledSelectArrow.className}`;

export {
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectIcon,
  StyledSelectPortal,
  StyledSelectContent,
  StyledSelectViewport,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectItemIndicator,
  StyledSelectScrollUpButton,
  StyledSelectScrollDownButton,
  StyledSelectGroup,
  StyledSelectLabelGroup,
  StyledSelectSeparator,
  StyledSelectArrow,
};
