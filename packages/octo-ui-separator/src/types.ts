import { HTMLOctoProps, OctoProperty, OctoVariants } from "@octo-ui/core";
import { StyledSeparatorRoot } from "./styles";

export type SeparatorProps = HTMLOctoProps<typeof StyledSeparatorRoot> &
  OctoVariants<typeof StyledSeparatorRoot> & {
    color?: OctoProperty<"backgroundColor">;
  };
