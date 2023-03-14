import { keyframes, styled } from "@octo-ui/core";
import { Flex } from "@octo-ui/flex";
import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-accordion-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-accordion-content-height)",
  },
  to: {
    height: 0,
  },
});

const rotateOpen = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(180deg)",
  },
});

const rotateClose = keyframes({
  from: {
    transform: "rotate(180deg)",
  },
  to: {
    transform: "rotate(0deg)",
  },
});

// ========================================================================= //

const StyledAccordionRoot = styled(Accordion.Root, {
  borderRadius: "$2",
  boxSizing: "border-box",
  width: "100%",

  variants: {
    shaded: {
      true: {
        boxShadow: "$colors$black5 0px 0px 22px 0px",
      },
    },
    bordered: {
      true: {
        borderWidth: "$1",
        borderStyle: "solid",
        borderColor: "$colors$black6",
      },
    },
  },

  defaultVariants: {
    shaded: true,
    bordered: true,
  },
});
StyledAccordionRoot.toString = () => `.${StyledAccordionRoot.className}`;

// ========================================================================= //

const StyledAccordionItem = styled(Accordion.Item, {
  overflow: "hidden",
  borderBottomWidth: "$1",
  borderBottomStyle: "solid",
  borderBottomColor: "$colors$grey6",

  "&:first-child": {
    borderTopLeftRadius: "$2",
    borderTopRightRadius: "$2",
  },

  "&:last-child": {
    borderBottomLeftRadius: "$2",
    borderBottomRightRadius: "$2",
    borderBottomWidth: 0,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: "$1",
  },
});
StyledAccordionItem.toString = () => `.${StyledAccordionItem.className}`;

// ========================================================================= //

const StyledAccordionHeader = styled(Accordion.Header, {
  all: "unset",
  display: "flex",
});
StyledAccordionHeader.toString = () => `.${StyledAccordionHeader.className}`;

// ========================================================================= //

const StyledAccordionTrigger = styled(Accordion.Trigger, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "$colors$grey1",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  gap: "$5",
  padding: "$7 $9 $7 $11",
  transition: "background-color 200ms linear, color 200ms linear",

  "&, *": {
    color: "$colors$grey12",
    fontFamily: "$untitled",
    fontSize: "$4",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
    lineHeight: 1,
  },

  "@hover": {
    "&:hover": {
      backgroundColor: "$colors$grey2",
    },
  },

  "&:focus": {
    backgroundColor: "$colors$grey3",
  },

  "&:active": {
    backgroundColor: "$colors$grey3",
  },

  "&[data-disabled], &disabled": {
    pointerEvents: "none",

    "&, *": {
      color: "$colors$grey8",
    },
  },

  '&[data-state="open"]': {
    borderBottomWidth: "$1",
    borderBottomStyle: "solid",
    borderBottomColor: "$colors$grey6",

    '>button.accordion-chevron[aria-hidden="true"]': {
      transform: "rotate(180deg)",
      animation: `${rotateOpen} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },

  '&[data-state="closed"]': {
    '>button.accordion-chevron[aria-hidden="true"]': {
      transform: "rotate(0deg)",
      animation: `${rotateClose} 400ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});
StyledAccordionTrigger.toString = () => `.${StyledAccordionTrigger.className}`;

// ========================================================================= //

const StyledAccordionContent = styled(Accordion.Content, {
  backgroundColor: "$colors$black2",
  overflow: "hidden",

  "&, *": {
    color: "$colors$grey11",
    fontFamily: "$untitled",
    fontSize: "$2",
    fontVariantNumeric: "tabular-nums",
    fontWeight: 400,
    lineHeight: 1,
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  "&[data-disabled], &disabled": {
    pointerEvents: "none",

    "&, *": {
      color: "$colors$grey8",
    },
  },
});
StyledAccordionContent.toString = () => `.${StyledAccordionContent.className}`;

// ========================================================================= //

const StyledAccordionContentBox = styled(Flex, {
  variants: {
    padded: {
      true: {
        padding: "$9 $9 $9 $11",
      },
    },
  },

  defaultVariants: {
    padded: true,
  },
});

export {
  StyledAccordionRoot,
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionContent,
  StyledAccordionContentBox,
};
