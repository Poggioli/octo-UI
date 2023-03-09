import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { LabelProps } from "@octo-ui/label";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Dispatch, SetStateAction } from "react";
import {
  StyledCheckboxGroup,
  StyledCheckboxIndicator,
  StyledCheckboxItem,
  StyledCheckboxItemContainer,
  StyledCheckboxItemLabel
} from "./styles";

export type CheckboxContextProps = {
  disabled: boolean | undefined;
  name: string;
  defaultValue: string[] | undefined;
  value: string[] | undefined;
};

export type CheckboxContextType = {
  state: CheckboxContextProps;
  setState: Dispatch<SetStateAction<CheckboxContextProps>>;
};

// ========================================================================= //

export type CheckboxGroupProps = HTMLOctoProps<typeof StyledCheckboxGroup> &
  OctoVariants<typeof StyledCheckboxGroup> &
  Partial<Omit<CheckboxContextProps, "name">>;

// ========================================================================= //

export type CheckboxItemProps = HTMLOctoProps<typeof StyledCheckboxItem> &
  OctoVariants<typeof StyledCheckboxItem> &
  Omit<
    Checkbox.CheckboxProps,
    "defaultChecked" | "checked" | "onCheckedChange"
  > & {
    value: string;
  };

// ========================================================================= //

export type CheckboxIndicatorProps = HTMLOctoProps<
  typeof StyledCheckboxIndicator
> &
  OctoVariants<typeof StyledCheckboxIndicator> &
  Checkbox.CheckboxIndicatorProps;

// ========================================================================= //

export type CheckboxItemLabelProps = HTMLOctoProps<
  typeof StyledCheckboxItemLabel
> &
  OctoVariants<typeof StyledCheckboxItemLabel> &
  LabelProps;

// ========================================================================= //

export type CheckboxItemContainerProps = HTMLOctoProps<
  typeof StyledCheckboxItemContainer
> &
  OctoVariants<typeof StyledCheckboxItemContainer>;
