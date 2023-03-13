import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledPopoverAnchor,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
  StyledPopoverPortal,
  StyledPopoverRoot,
  StyledPopoverTrigger,
} from "./styles";

export type PopoverProps = HTMLOctoProps<typeof StyledPopoverRoot> &
  OctoVariants<typeof StyledPopoverRoot>;

// ========================================================================= //

export type PopoverTriggerProps = HTMLOctoProps<typeof StyledPopoverTrigger> &
  OctoVariants<typeof StyledPopoverTrigger>;

// ========================================================================= //

export type PopoverAnchorProps = HTMLOctoProps<typeof StyledPopoverAnchor> &
  OctoVariants<typeof StyledPopoverAnchor>;

// ========================================================================= //

export type PopoverPortalProps = HTMLOctoProps<typeof StyledPopoverPortal> &
  OctoVariants<typeof StyledPopoverPortal>;

// ========================================================================= //

export type PopoverArrowProps = HTMLOctoProps<typeof StyledPopoverArrow> &
  OctoVariants<typeof StyledPopoverArrow>;

// ========================================================================= //

export type PopoverContentProps = HTMLOctoProps<typeof StyledPopoverContent> &
  OctoVariants<typeof StyledPopoverContent> &
  Omit<PopoverPortalProps, "forceMount"> &
  PopoverArrowProps & {
    forceMountPortal?: true;
  };

// ========================================================================= //

export type PopoverCloseProps = HTMLOctoProps<typeof StyledPopoverClose> &
  OctoVariants<typeof StyledPopoverClose>;
