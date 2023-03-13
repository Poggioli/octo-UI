import { forwardRef } from "@octo-ui/core";
import {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger
} from "./styles";
import {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPortalProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps
} from "./types";

const TooltipProvider = forwardRef<
  typeof StyledTooltipProvider,
  TooltipProviderProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipProvider {...props} ref={forwardedRef} />;
});
TooltipProvider.toString = () => `.${StyledTooltipProvider.className}`;

// ========================================================================= //

const Tooltip = forwardRef<typeof StyledTooltipRoot, TooltipProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledTooltipRoot {...props} ref={forwardedRef} />;
  }
);
Tooltip.toString = () => `.${StyledTooltipRoot.className}`;

// ========================================================================= //

const TooltipTrigger = forwardRef<
  typeof StyledTooltipTrigger,
  TooltipTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipTrigger {...props} ref={forwardedRef} />;
});
TooltipTrigger.toString = () => `.${StyledTooltipTrigger.className}`;

// ========================================================================= //

const TooltipPortal = forwardRef<
  typeof StyledTooltipPortal,
  TooltipPortalProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipPortal {...props} ref={forwardedRef} />;
});
TooltipPortal.toString = () => `.${StyledTooltipPortal.className}`;

// ========================================================================= //

const TooltipContent = forwardRef<
  typeof StyledTooltipContent,
  TooltipContentProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipContent {...props} ref={forwardedRef} />;
});
TooltipContent.toString = () => `.${StyledTooltipContent.className}`;

// ========================================================================= //

const TooltipArrow = forwardRef<typeof StyledTooltipArrow, TooltipArrowProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledTooltipArrow {...props} ref={forwardedRef} />;
  }
);
TooltipArrow.toString = () => `.${StyledTooltipArrow.className}`;

export {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
};
export { Tooltip, TooltipTrigger, TooltipContent };

