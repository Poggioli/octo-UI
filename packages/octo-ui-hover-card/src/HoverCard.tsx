import { forwardRef } from "@octo-ui/core";
import {
  StyledHoverCardArrow,
  StyledHoverCardContent,
  StyledHoverCardPortal,
  StyledHoverCardRoot,
  StyledHoverCardTrigger,
} from "./styles";
import {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardPortalProps,
  HoverCardProps,
  HoverCardTriggerProps,
} from "./types";

const HoverCard = forwardRef<typeof StyledHoverCardRoot, HoverCardProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledHoverCardRoot {...props} ref={forwardedRef} />;
  }
);
HoverCard.toString = () => `.${StyledHoverCardRoot.className}`;

// ========================================================================= //

const HoverCardTrigger = forwardRef<
  typeof StyledHoverCardTrigger,
  HoverCardTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledHoverCardTrigger {...props} ref={forwardedRef} asChild />;
});
HoverCardTrigger.toString = () => `.${StyledHoverCardTrigger.className}`;

// ========================================================================= //

const HoverCardPortal = forwardRef<
  typeof StyledHoverCardPortal,
  HoverCardPortalProps
>(({ ...props }, forwardedRef) => {
  return <StyledHoverCardPortal {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const HoverCardArrow = forwardRef<
  typeof StyledHoverCardArrow,
  HoverCardArrowProps
>(({ ...props }, forwardedRef) => {
  return <StyledHoverCardArrow {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const HoverCardContent = forwardRef<
  typeof StyledHoverCardContent,
  HoverCardContentProps
>(
  (
    {
      children,
      forceMountPortal,
      container,
      width,
      height,
      hasArrow = true,
      collisionPadding = 20,
      sideOffset = 5,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <HoverCardPortal forceMount={forceMountPortal} container={container}>
        <StyledHoverCardContent
          {...props}
          ref={forwardedRef}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
        >
          {children}
          {hasArrow ? (
            <HoverCardArrow width={width} height={height} data-testid="arrow" />
          ) : null}
        </StyledHoverCardContent>
      </HoverCardPortal>
    );
  }
);
HoverCardContent.toString = () => `.${StyledHoverCardContent.className}`;

export {
  StyledHoverCardArrow,
  StyledHoverCardContent,
  StyledHoverCardPortal,
  StyledHoverCardRoot,
  StyledHoverCardTrigger,
};
export { HoverCard, HoverCardTrigger, HoverCardContent };
