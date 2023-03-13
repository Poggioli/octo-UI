import { keyframes, styled } from "@octo-ui/core";
import * as Popover from "@radix-ui/react-popover";

const slideUpAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideLeftAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

// ========================================================================= //

const StyledPopoverRoot = styled(Popover.Root, {});
StyledPopoverRoot.toString = () => `.${StyledPopoverRoot.className}`;

// ========================================================================= //

const StyledPopoverTrigger = styled(Popover.Trigger, {});
StyledPopoverTrigger.toString = () => `.${StyledPopoverTrigger.className}`;

// ========================================================================= //

const StyledPopoverAnchor = styled(Popover.Anchor, {});
StyledPopoverAnchor.toString = () => `.${StyledPopoverAnchor.className}`;

// ========================================================================= //

const StyledPopoverPortal = styled(Popover.Portal, {});
StyledPopoverPortal.toString = () => `.${StyledPopoverPortal.className}`;

// ========================================================================= //

const StyledPopoverContent = styled(Popover.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  backgroundColor: "$colors$grey2",
  borderRadius: "$2",
  boxSizing: "border-box",
  boxShadow: "$colors$black5 0px 0px 22px 0px",
  maxWidth: "calc($17 * 7)",
  minWidth: "calc($17 * 2)",
  padding: "$9",
  position: "relative",
  userSelect: "none",
  willChange: "transform, opacity",

  '&[data-state="open"]': {
    '&[data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
});
StyledPopoverContent.toString = () => `.${StyledPopoverContent.className}`;

// ========================================================================= //

const StyledPopoverArrow = styled(Popover.Arrow, {
  fill: "$colors$grey2",
});
StyledPopoverArrow.toString = () => `.${StyledPopoverArrow.className}`;

// ========================================================================= //

const StyledPopoverClose = styled(Popover.Close, {});
StyledPopoverClose.toString = () => `.${StyledPopoverClose.className}`;

export {
  StyledPopoverRoot,
  StyledPopoverTrigger,
  StyledPopoverAnchor,
  StyledPopoverPortal,
  StyledPopoverContent,
  StyledPopoverArrow,
  StyledPopoverClose,
};
