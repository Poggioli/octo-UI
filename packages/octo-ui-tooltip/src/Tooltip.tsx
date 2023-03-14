import { forwardRef } from "@octo-ui/core";
import {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
} from "./styles";
import {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPortalProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
} from "./types";

const TooltipProvider = forwardRef<
  typeof StyledTooltipProvider,
  TooltipProviderProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipProvider {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const Tooltip = forwardRef<typeof StyledTooltipRoot, TooltipProps>(
  (
    {
      children,
      delayDuration,
      skipDelayDuration,
      disableHoverableContent,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <TooltipProvider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <StyledTooltipRoot {...props} ref={forwardedRef}>
          {children}
        </StyledTooltipRoot>
      </TooltipProvider>
    );
  }
);
Tooltip.toString = () => `.${StyledTooltipRoot.className}`;

// ========================================================================= //

const TooltipTrigger = forwardRef<
  typeof StyledTooltipTrigger,
  TooltipTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipTrigger {...props} ref={forwardedRef} asChild />;
});
TooltipTrigger.toString = () => `.${StyledTooltipTrigger.className}`;

// ========================================================================= //

const TooltipPortal = forwardRef<
  typeof StyledTooltipPortal,
  TooltipPortalProps
>(({ ...props }, forwardedRef) => {
  return <StyledTooltipPortal {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const TooltipArrow = forwardRef<typeof StyledTooltipArrow, TooltipArrowProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledTooltipArrow {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const TooltipContent = forwardRef<
  typeof StyledTooltipContent,
  TooltipContentProps
>(
  (
    {
      children,
      forceMountPortal,
      container,
      height,
      width,
      collisionPadding = 20,
      sideOffset = 5,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <TooltipPortal forceMount={forceMountPortal} container={container}>
        <StyledTooltipContent
          {...props}
          ref={forwardedRef}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
        >
          {children}
          <TooltipArrow height={height} width={width} />
        </StyledTooltipContent>
      </TooltipPortal>
    );
  }
);
TooltipContent.toString = () => `.${StyledTooltipContent.className}`;

export {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
};
export { Tooltip, TooltipTrigger, TooltipContent };
