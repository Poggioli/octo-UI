import { keyframes, styled } from "@octo-ui/core";
import { StyledText } from "@octo-ui/text";
import * as Tooltip from "@radix-ui/react-tooltip";

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

const StyledTooltipContent = styled(Tooltip.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  backgroundColor: "$colors$black12",
  borderRadius: "$2",
  boxSizing: "border-box",
  boxShadow: "$colors$black5 0 0 $sizes$11 0",
  maxWidth: "calc($17 * 2.5)",
  padding: "$5 $9 $5 $5",
  userSelect: "none",
  willChange: "transform, opacity",

  [`&, *, ${StyledText.toString()}`]: {
    color: "$colors$white12",
    fontSize: "$1",
    lineHeight: "1",
    fontFamily: "$mono",
  },

  '&[data-state="delayed-open"]': {
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
StyledTooltipContent.toString = () => `.${StyledTooltipContent.className}`;

// ========================================================================= //

const StyledTooltipArrow = styled(Tooltip.Arrow, {
  fill: "$colors$black12",
});
StyledTooltipArrow.toString = () => `.${StyledTooltipArrow.className}`;

export {
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
  StyledTooltipPortal,
  StyledTooltipContent,
  StyledTooltipArrow,
};
