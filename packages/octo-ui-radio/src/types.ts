import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { LabelProps } from "@octo-ui/label";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  StyledRadioGroupIndicator,
  StyledRadioGroupItem,
  StyledRadioGroupItemContainer,
  StyledRadioGroupItemLabel,
  StyledRadioGroupRoot,
} from "./styles";

export type RadioGroupProps = HTMLOctoProps<typeof StyledRadioGroupRoot> &
  OctoVariants<typeof StyledRadioGroupRoot> &
  RadioGroup.RadioGroupProps;

// ========================================================================= //

export type RadioGroupItemProps = HTMLOctoProps<typeof StyledRadioGroupItem> &
  OctoVariants<typeof StyledRadioGroupItem> &
  RadioGroup.RadioGroupItemProps;

// ========================================================================= //

export type RadioGroupIndicatorProps = HTMLOctoProps<
  typeof StyledRadioGroupIndicator
> &
  OctoVariants<typeof StyledRadioGroupIndicator> &
  RadioGroup.RadioIndicatorProps;

// ========================================================================= //

export type RadioGroupItemContainerProps = HTMLOctoProps<
  typeof StyledRadioGroupItemContainer
> &
  OctoVariants<typeof StyledRadioGroupItemContainer>;

// ========================================================================= //

export type RadioGroupItemLabelProps = HTMLOctoProps<
  typeof StyledRadioGroupItemLabel
> &
  OctoVariants<typeof StyledRadioGroupItemLabel> &
  LabelProps;
