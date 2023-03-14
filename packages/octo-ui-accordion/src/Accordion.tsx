import { forwardRef } from "@octo-ui/core";
import {
  StyledAccordionContent,
  StyledAccordionContentBox,
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

const AccordionTrigger = forwardRef<
  typeof StyledAccordionTrigger,
  AccordionTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledAccordionTrigger {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const AccordionHeader = forwardRef<
  typeof StyledAccordionHeader,
  AccordionHeaderProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledAccordionHeader {...props} ref={forwardedRef}>
      <AccordionTrigger>{children}</AccordionTrigger>
    </StyledAccordionHeader>
  );
});
AccordionHeader.toString = () => `.${StyledAccordionHeader.className}`;

// ========================================================================= //

const AccordionContent = forwardRef<
  typeof StyledAccordionContent,
  AccordionContentProps
>(({ children, padded, ...props }, forwardedRef) => {
  return (
    <StyledAccordionContent {...props} ref={forwardedRef}>
      <StyledAccordionContentBox padded={padded}>
        {children}
      </StyledAccordionContentBox>
    </StyledAccordionContent>
  );
});
AccordionContent.toString = () => `.${StyledAccordionContent.className}`;

export {
  StyledAccordionRoot,
  StyledAccordionItem,
  StyledAccordionTrigger,
  StyledAccordionHeader,
  StyledAccordionContent
};
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
};

