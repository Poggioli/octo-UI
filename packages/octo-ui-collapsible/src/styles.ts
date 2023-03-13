import { keyframes, styled } from "@octo-ui/core";
import * as Collapsible from "@radix-ui/react-collapsible";

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-collapsible-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-collapsible-content-height)",
  },
  to: {
    height: 0,
  },
});

// ========================================================================= //

const StyledCollapsibleRoot = styled(Collapsible.Root, {});
StyledCollapsibleRoot.toString = () => `.${StyledCollapsibleRoot.className}`;

// ========================================================================= //

const StyledCollapsibleTrigger = styled(Collapsible.Trigger, {});
StyledCollapsibleTrigger.toString = () =>
  `.${StyledCollapsibleTrigger.className}`;

// ========================================================================= //

const StyledCollapsibleContent = styled(Collapsible.Content, {
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});
StyledCollapsibleContent.toString = () =>
  `.${StyledCollapsibleContent.className}`;

export {
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger,
  StyledCollapsibleContent,
};
