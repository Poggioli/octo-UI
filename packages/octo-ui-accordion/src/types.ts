import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledAccordionContent,
  StyledAccordionContentBox,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionRoot,
  StyledAccordionTrigger
} from "./styles";

export type AccordionProps = HTMLOctoProps<typeof StyledAccordionRoot> &
  OctoVariants<typeof StyledAccordionRoot>;

// ========================================================================= //

export type AccordionItemProps = HTMLOctoProps<typeof StyledAccordionItem> &
  OctoVariants<typeof StyledAccordionItem>;

// ========================================================================= //

export type AccordionTriggerProps = HTMLOctoProps<
  typeof StyledAccordionTrigger
> &
  OctoVariants<typeof StyledAccordionTrigger>;

// ========================================================================= //

export type AccordionHeaderProps = HTMLOctoProps<typeof StyledAccordionHeader> &
  OctoVariants<typeof StyledAccordionHeader> & AccordionTriggerProps;

// ========================================================================= //

export type AccordionContentBoxProps = HTMLOctoProps<
  typeof StyledAccordionContentBox
> &
  OctoVariants<typeof StyledAccordionContentBox>;

// ========================================================================= //

export type AccordionContentProps = HTMLOctoProps<
  typeof StyledAccordionContent
> &
  OctoVariants<typeof StyledAccordionContent> &
  AccordionContentBoxProps;
