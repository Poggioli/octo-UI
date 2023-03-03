import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledToggleGroupItem, StyledToggleGroupRoot } from "./styles";

export type ToggleGroupRootProps = HTMLOctoProps<typeof StyledToggleGroupRoot> &
  OctoVariants<typeof StyledToggleGroupRoot>;

// ========================================================================= //

export type ToggleGroupItemProps = HTMLOctoProps<typeof StyledToggleGroupItem> &
  OctoVariants<typeof StyledToggleGroupItem>;
