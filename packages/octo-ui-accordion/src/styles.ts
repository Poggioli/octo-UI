import { styled } from '@octo-ui/core';
import * as Accordion from '@radix-ui/react-accordion';

const StyledAccordionRoot = styled(Accordion.Root, {});
StyledAccordionRoot.toString = () => `.${StyledAccordionRoot.className}`

// ========================================================================= //

const StyledAccordionItem = styled(Accordion.Item, {});
StyledAccordionItem.toString = () => `.${StyledAccordionItem.className}`

// ========================================================================= //

const StyledAccordionHeader = styled(Accordion.Header, {});
StyledAccordionHeader.toString = () => `.${StyledAccordionHeader.className}`

// ========================================================================= //

const StyledAccordionTrigger = styled(Accordion.Trigger, {});
StyledAccordionTrigger.toString = () => `.${StyledAccordionTrigger.className}`

// ========================================================================= //

const StyledAccordionContent = styled(Accordion.Content, {});
StyledAccordionContent.toString = () => `.${StyledAccordionContent.className}`

export {
  StyledAccordionRoot,
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionContent
};
