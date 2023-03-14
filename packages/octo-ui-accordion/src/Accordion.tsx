import { forwardRef } from "@octo-ui/core";
import {
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionRoot,
  StyledAccordionTrigger
} from "./styles";
import {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps
} from "./types";

const Accordion = forwardRef<typeof StyledAccordionRoot, AccordionProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledAccordionRoot {...props} ref={forwardedRef} />;
  }
);
Accordion.toString = () => `.${StyledAccordionRoot.className}`;

// ========================================================================= //

const AccordionItem = forwardRef<
  typeof StyledAccordionItem,
  AccordionItemProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionItem {...props} ref={forwardedRef} />;
});
AccordionItem.toString = () => `.${StyledAccordionItem.className}`;

// ========================================================================= //

const AccordionHeader = forwardRef<
  typeof StyledAccordionHeader,
  AccordionHeaderProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionHeader {...props} ref={forwardedRef} />;
});
AccordionHeader.toString = () => `.${StyledAccordionHeader.className}`;

// ========================================================================= //

const AccordionTrigger = forwardRef<
  typeof StyledAccordionTrigger,
  AccordionTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionTrigger {...props} ref={forwardedRef} />;
});
AccordionTrigger.toString = () => `.${StyledAccordionTrigger.className}`;

// ========================================================================= //

const AccordionContent = forwardRef<
  typeof StyledAccordionContent,
  AccordionContentProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionContent {...props} ref={forwardedRef} />;
});
AccordionContent.toString = () => `.${StyledAccordionContent.className}`;

export {
  StyledAccordionRoot,
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionContent
};
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent
};


