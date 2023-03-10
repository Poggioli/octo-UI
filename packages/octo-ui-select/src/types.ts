import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabelGroup,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
} from "./styles";

export type SelectTriggerProps = HTMLOctoProps<typeof StyledSelectTrigger> &
  OctoVariants<typeof StyledSelectTrigger>;

// ========================================================================= //

export type SelectValueProps = HTMLOctoProps<typeof StyledSelectValue> &
  OctoVariants<typeof StyledSelectValue>;

// ========================================================================= //

export type SelectRootProps = HTMLOctoProps<typeof StyledSelectRoot> &
  OctoVariants<typeof StyledSelectRoot> &
  SelectTriggerProps &
  SelectValueProps;

// ========================================================================= //

export type SelectIconProps = HTMLOctoProps<typeof StyledSelectIcon> &
  OctoVariants<typeof StyledSelectIcon>;

// ========================================================================= //

export type SelectPortalProps = HTMLOctoProps<typeof StyledSelectPortal> &
  OctoVariants<typeof StyledSelectPortal>;

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

export type SelectLabelGroupProps = HTMLOctoProps<
  typeof StyledSelectLabelGroup
> &
  OctoVariants<typeof StyledSelectLabelGroup>;

// ========================================================================= //

export type SelectSeparatorProps = HTMLOctoProps<typeof StyledSelectSeparator> &
  OctoVariants<typeof StyledSelectSeparator>;

// ========================================================================= //

export type SelectArrowProps = HTMLOctoProps<typeof StyledSelectArrow> &
  OctoVariants<typeof StyledSelectArrow>;

// ========================================================================= //

export type SelectContentProps = HTMLOctoProps<typeof StyledSelectContent> &
  OctoVariants<typeof StyledSelectContent> &
  SelectPortalProps &
  SelectScrollUpButtonProps &
  SelectViewportProps &
  SelectScrollDownButtonProps &
  SelectArrowProps;
