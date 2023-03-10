import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
} from "./styles";

export type SelectRootProps = HTMLOctoProps<typeof StyledSelectRoot> &
  OctoVariants<typeof StyledSelectRoot>;

// ========================================================================= //

export type SelectTriggerProps = HTMLOctoProps<typeof StyledSelectTrigger> &
  OctoVariants<typeof StyledSelectTrigger>;

// ========================================================================= //

export type SelectValueProps = HTMLOctoProps<typeof StyledSelectValue> &
  OctoVariants<typeof StyledSelectValue>;

// ========================================================================= //

export type SelectIconProps = HTMLOctoProps<typeof StyledSelectIcon> &
  OctoVariants<typeof StyledSelectIcon>;

// ========================================================================= //

export type SelectPortalProps = HTMLOctoProps<typeof StyledSelectPortal> &
  OctoVariants<typeof StyledSelectPortal>;

// ========================================================================= //

export type SelectContentProps = HTMLOctoProps<typeof StyledSelectContent> &
  OctoVariants<typeof StyledSelectContent>;

// ========================================================================= //

export type SelectViewportProps = HTMLOctoProps<typeof StyledSelectViewport> &
  OctoVariants<typeof StyledSelectViewport>;

// ========================================================================= //

export type SelectItemProps = HTMLOctoProps<typeof StyledSelectItem> &
  OctoVariants<typeof StyledSelectItem>;

// ========================================================================= //

export type SelectItemTextProps = HTMLOctoProps<typeof StyledSelectItemText> &
  OctoVariants<typeof StyledSelectItemText>;

// ========================================================================= //

export type SelectItemIndicatorProps = HTMLOctoProps<
  typeof StyledSelectItemIndicator
> &
  OctoVariants<typeof StyledSelectItemIndicator>;

// ========================================================================= //

export type SelectScrollUpButtonProps = HTMLOctoProps<
  typeof StyledSelectScrollUpButton
> &
  OctoVariants<typeof StyledSelectScrollUpButton>;

// ========================================================================= //

export type SelectScrollDownButtonProps = HTMLOctoProps<
  typeof StyledSelectScrollDownButton
> &
  OctoVariants<typeof StyledSelectScrollDownButton>;

// ========================================================================= //

export type SelectGroupProps = HTMLOctoProps<typeof StyledSelectGroup> &
  OctoVariants<typeof StyledSelectGroup>;

// ========================================================================= //

export type SelectLabelProps = HTMLOctoProps<typeof StyledSelectLabel> &
  OctoVariants<typeof StyledSelectLabel>;

// ========================================================================= //

export type SelectSeparatorProps = HTMLOctoProps<typeof StyledSelectSeparator> &
  OctoVariants<typeof StyledSelectSeparator>;

// ========================================================================= //

export type SelectArrowProps = HTMLOctoProps<typeof StyledSelectArrow> &
  OctoVariants<typeof StyledSelectArrow>;
