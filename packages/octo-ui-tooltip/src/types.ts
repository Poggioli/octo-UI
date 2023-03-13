import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger
} from "./styles";

export type TooltipProviderProps = HTMLOctoProps<typeof StyledTooltipProvider> &
  OctoVariants<typeof StyledTooltipProvider>;

// ========================================================================= //

export type TooltipProps = HTMLOctoProps<typeof StyledTooltipRoot> &
  OctoVariants<typeof StyledTooltipRoot>;

// ========================================================================= //

export type TooltipTriggerProps = HTMLOctoProps<typeof StyledTooltipTrigger> &
  OctoVariants<typeof StyledTooltipTrigger>;

// ========================================================================= //

export type TooltipPortalProps = HTMLOctoProps<typeof StyledTooltipPortal> &
  OctoVariants<typeof StyledTooltipPortal>;

// ========================================================================= //

export type TooltipContentProps = HTMLOctoProps<typeof StyledTooltipContent> &
  OctoVariants<typeof StyledTooltipContent>;

// ========================================================================= //

export type TooltipArrowProps = HTMLOctoProps<typeof StyledTooltipArrow> &
  OctoVariants<typeof StyledTooltipArrow>;
