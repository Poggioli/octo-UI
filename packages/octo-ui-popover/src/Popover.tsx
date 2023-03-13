import { forwardRef } from "@octo-ui/core";
import {
  StyledPopoverAnchor,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
  StyledPopoverPortal,
  StyledPopoverRoot,
  StyledPopoverTrigger,
} from "./styles";
import {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverPortalProps,
  PopoverProps,
  PopoverTriggerProps,
} from "./types";

const Popover = forwardRef<typeof StyledPopoverRoot, PopoverProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledPopoverRoot {...props} ref={forwardedRef} />;
  }
);
Popover.toString = () => `.${StyledPopoverRoot.className}`;

// ========================================================================= //

const PopoverTrigger = forwardRef<
  typeof StyledPopoverTrigger,
  PopoverTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledPopoverTrigger {...props} ref={forwardedRef} asChild />;
});
PopoverTrigger.toString = () => `.${StyledPopoverTrigger.className}`;

// ========================================================================= //

const PopoverAnchor = forwardRef<
  typeof StyledPopoverAnchor,
  PopoverAnchorProps
>(({ ...props }, forwardedRef) => {
  return <StyledPopoverAnchor {...props} ref={forwardedRef} asChild />;
});
PopoverAnchor.toString = () => `.${StyledPopoverAnchor.className}`;

// ========================================================================= //

const PopoverPortal = forwardRef<
  typeof StyledPopoverPortal,
  PopoverPortalProps
>(({ ...props }, forwardedRef) => {
  return <StyledPopoverPortal {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const PopoverArrow = forwardRef<typeof StyledPopoverArrow, PopoverArrowProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledPopoverArrow {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const PopoverClose = forwardRef<typeof StyledPopoverClose, PopoverCloseProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledPopoverClose {...props} ref={forwardedRef} asChild />;
  }
);
PopoverClose.toString = () => `.${StyledPopoverClose.className}`;

// ========================================================================= //

const PopoverCloseIcon = forwardRef<
  typeof StyledPopoverClose,
  PopoverCloseProps
>(({ ...props }, forwardedRef) => {
  return (
    <StyledPopoverClose {...props} ref={forwardedRef}>
      X
    </StyledPopoverClose>
  );
});
PopoverCloseIcon.toString = () => `.${StyledPopoverClose.className}`;

// ========================================================================= //

const PopoverContent = forwardRef<
  typeof StyledPopoverContent,
  PopoverContentProps
>(
  (
    {
      children,
      forceMountPortal,
      container,
      width,
      height,
      collisionPadding = 20,
      sideOffset = 5,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <PopoverPortal forceMount={forceMountPortal} container={container}>
        <StyledPopoverContent
          {...props}
          ref={forwardedRef}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
        >
          {children}
          <PopoverCloseIcon />
          <PopoverArrow width={width} height={height} />
        </StyledPopoverContent>
      </PopoverPortal>
    );
  }
);
PopoverContent.toString = () => `.${StyledPopoverContent.className}`;

export {
  StyledPopoverAnchor,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
  StyledPopoverPortal,
  StyledPopoverRoot,
  StyledPopoverTrigger,
};
export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverClose,
  PopoverCloseIcon,
  PopoverContent,
};
