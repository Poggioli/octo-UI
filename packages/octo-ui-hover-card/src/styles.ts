import { keyframes, styled } from "@octo-ui/core";
import * as HoverCard from "@radix-ui/react-hover-card";

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

const StyledHoverCardRoot = styled(HoverCard.Root, {});
StyledHoverCardRoot.toString = () => `.${StyledHoverCardRoot.className}`;

// ========================================================================= //

const StyledHoverCardTrigger = styled(HoverCard.Trigger, {});
StyledHoverCardTrigger.toString = () => `.${StyledHoverCardTrigger.className}`;

// ========================================================================= //

const StyledHoverCardPortal = styled(HoverCard.Portal, {});
StyledHoverCardPortal.toString = () => `.${StyledHoverCardPortal.className}`;

// ========================================================================= //

const StyledHoverCardContent = styled(HoverCard.Content, {
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
  backgroundColor: "$colors$grey2",
  borderRadius: "$2",
  boxShadow: "$colors$black5 0px 0px 22px 0px",
  maxWidth: "calc($17 * 4.5)",
  padding: "$9",
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
StyledHoverCardContent.toString = () => `.${StyledHoverCardContent.className}`;

// ========================================================================= //

const StyledHoverCardArrow = styled(HoverCard.Arrow, {
  fill: "$colors$grey2",
});
StyledHoverCardArrow.toString = () => `.${StyledHoverCardArrow.className}`;

export {
  StyledHoverCardRoot,
  StyledHoverCardTrigger,
  StyledHoverCardPortal,
  StyledHoverCardContent,
  StyledHoverCardArrow,
};
