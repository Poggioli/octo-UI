import { styled } from "@octo-ui/core";
import * as Tooltip from "@radix-ui/react-tooltip";

const StyledTooltipProvider = styled(Tooltip.Provider, {});
StyledTooltipProvider.toString = () => `.${StyledTooltipProvider.className}`;

// ========================================================================= //

const StyledTooltipRoot = styled(Tooltip.Root, {});
StyledTooltipRoot.toString = () => `.${StyledTooltipRoot.className}`;

// ========================================================================= //

const StyledTooltipTrigger = styled(Tooltip.Trigger, {});
StyledTooltipTrigger.toString = () => `.${StyledTooltipTrigger.className}`;

// ========================================================================= //

const StyledTooltipPortal = styled(Tooltip.Portal, {});
StyledTooltipPortal.toString = () => `.${StyledTooltipPortal.className}`;

// ========================================================================= //

const StyledTooltipContent = styled(Tooltip.Content, {});
StyledTooltipContent.toString = () => `.${StyledTooltipContent.className}`;

// ========================================================================= //

const StyledTooltipArrow = styled(Tooltip.Arrow, {});
StyledTooltipArrow.toString = () => `.${StyledTooltipArrow.className}`;

export {
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
  StyledTooltipPortal,
  StyledTooltipContent,
  StyledTooltipArrow
};
