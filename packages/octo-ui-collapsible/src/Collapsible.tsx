import { forwardRef } from "@octo-ui/core";
import {
  StyledCollapsibleContent,
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger
} from "./styles";
import {
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleTriggerProps
} from "./types";

const CollapsibleTrigger = forwardRef<
  typeof StyledCollapsibleTrigger,
  CollapsibleTriggerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledCollapsibleTrigger {...props} ref={forwardedRef} asChild>
      {children}
    </StyledCollapsibleTrigger>
  );
});
CollapsibleTrigger.toString = () => `.${StyledCollapsibleTrigger.className}`;

// ========================================================================= //

const Collapsible = forwardRef<typeof StyledCollapsibleRoot, CollapsibleProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledCollapsibleRoot {...props} ref={forwardedRef}>
        {children}
      </StyledCollapsibleRoot>
    );
  }
);
Collapsible.toString = () => `.${StyledCollapsibleRoot.className}`;

// ========================================================================= //

const CollapsibleContent = forwardRef<
  typeof StyledCollapsibleContent,
  CollapsibleContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledCollapsibleContent {...props} ref={forwardedRef}>
      {children}
    </StyledCollapsibleContent>
  );
});
CollapsibleContent.toString = () => `.${StyledCollapsibleContent.className}`;

export {
  StyledCollapsibleTrigger,
  StyledCollapsibleRoot,
  StyledCollapsibleContent,
};
export { CollapsibleTrigger, Collapsible, CollapsibleContent };

