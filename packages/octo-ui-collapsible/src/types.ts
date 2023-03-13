import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledCollapsibleContent,
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger,
} from "./styles";

export type CollapsibleProps = HTMLOctoProps<typeof StyledCollapsibleRoot> &
  OctoVariants<typeof StyledCollapsibleRoot>;

// ========================================================================= //

export type CollapsibleTriggerProps = HTMLOctoProps<
  typeof StyledCollapsibleTrigger
> &
  OctoVariants<typeof StyledCollapsibleTrigger>;

// ========================================================================= //

export type CollapsibleContentProps = HTMLOctoProps<
  typeof StyledCollapsibleContent
> &
  OctoVariants<typeof StyledCollapsibleContent>;
