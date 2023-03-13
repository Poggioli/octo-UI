import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledHoverCardArrow,
  StyledHoverCardContent,
  StyledHoverCardPortal,
  StyledHoverCardRoot,
  StyledHoverCardTrigger
} from "./styles";

export type HoverCardProps = HTMLOctoProps<typeof StyledHoverCardRoot> &
  OctoVariants<typeof StyledHoverCardRoot>;

// ========================================================================= //

export type HoverCardTriggerProps = HTMLOctoProps<
  typeof StyledHoverCardTrigger
> &
  OctoVariants<typeof StyledHoverCardTrigger>;

// ========================================================================= //

export type HoverCardPortalProps = HTMLOctoProps<typeof StyledHoverCardPortal> &
  OctoVariants<typeof StyledHoverCardPortal>;

// ========================================================================= //

export type HoverCardArrowProps = HTMLOctoProps<typeof StyledHoverCardArrow> &
  OctoVariants<typeof StyledHoverCardArrow>;

// ========================================================================= //

export type HoverCardContentProps = HTMLOctoProps<
  typeof StyledHoverCardContent
> &
  OctoVariants<typeof StyledHoverCardContent> &
  Omit<HoverCardPortalProps, "forceMount"> &
  HoverCardArrowProps & {
    forceMountPortal?: true;
    hasArrow?: boolean
  };
