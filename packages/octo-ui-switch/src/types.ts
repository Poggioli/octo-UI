import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import * as Switch from "@radix-ui/react-switch";
import { StyledSwitchRoot, StyledSwitchThumb } from "./styles";

export type SwitchProps = HTMLOctoProps<typeof StyledSwitchRoot> &
  OctoVariants<typeof StyledSwitchRoot> &
  Switch.SwitchProps;

// ========================================================================= //

export type SwitchThumbProps = HTMLOctoProps<typeof StyledSwitchThumb> &
  OctoVariants<typeof StyledSwitchThumb> &
  Switch.SwitchThumbProps;
