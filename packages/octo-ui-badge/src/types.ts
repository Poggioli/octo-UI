import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledBadge, StyledBadgeContainer } from "./styles";

type BadgeContainerProps = HTMLOctoProps<typeof StyledBadgeContainer> &
  OctoVariants<typeof StyledBadgeContainer>;

// ========================================================================= //

export type BadgeProps = HTMLOctoProps<typeof StyledBadge> &
  OctoVariants<typeof StyledBadge> &
  BadgeContainerProps & {
    count: number;
    maxCount?: number;
    showZero?: boolean;
  };
