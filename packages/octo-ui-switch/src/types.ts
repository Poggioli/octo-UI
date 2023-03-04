import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { LabelProps } from "@octo-ui/label";
import * as Switch from "@radix-ui/react-switch";
import { Dispatch, SetStateAction } from "react";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";

export type SwitchProps = HTMLOctoProps<typeof StyledSwitchRoot> &
  OctoVariants<typeof StyledSwitchRoot> &
  Switch.SwitchProps;

// ========================================================================= //

export type SwitchThumbProps = HTMLOctoProps<typeof StyledSwitchThumb> &
  OctoVariants<typeof StyledSwitchThumb> &
  Switch.SwitchThumbProps;

// ========================================================================= //

export type SwitchContextState = {
  disabled: boolean;
};

export type SwitchContextType = {
  state: SwitchContextState;
  setState: Dispatch<SetStateAction<SwitchContextState>>;
};

// ========================================================================= //

export type SwitchContainerProps = HTMLOctoProps<typeof StyledSwitchContainer> &
  OctoVariants<typeof StyledSwitchContainer>;

// ========================================================================= //

export type SwitchLabelProps = HTMLOctoProps<typeof StyledSwitchLabel> &
  OctoVariants<typeof StyledSwitchLabel> &
  LabelProps;
