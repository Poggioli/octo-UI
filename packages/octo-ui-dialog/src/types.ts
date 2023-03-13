import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { HeadingProps } from "@octo-ui/heading";
import { ParagraphProps } from "@octo-ui/paragraph";
import {
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogDescription,
  StyledDialogOverlay,
  StyledDialogPortal,
  StyledDialogRoot,
  StyledDialogTitle,
  StyledDialogTrigger,
} from "./styles";

export type DialogProps = HTMLOctoProps<typeof StyledDialogRoot> &
  OctoVariants<typeof StyledDialogRoot>;

// ========================================================================= //

export type DialogTriggerProps = HTMLOctoProps<typeof StyledDialogTrigger> &
  OctoVariants<typeof StyledDialogTrigger>;

// ========================================================================= //

export type DialogOverlayProps = HTMLOctoProps<typeof StyledDialogOverlay> &
  OctoVariants<typeof StyledDialogOverlay>;

// ========================================================================= //

export type DialogPortalProps = HTMLOctoProps<typeof StyledDialogPortal> &
  OctoVariants<typeof StyledDialogPortal>;

// ========================================================================= //

export type DialogContentProps = HTMLOctoProps<typeof StyledDialogContent> &
  OctoVariants<typeof StyledDialogContent> &
  Omit<DialogOverlayProps, "forceMount"> &
  Omit<DialogPortalProps, "forceMount"> & {
    forceMountOverlay?: true;
    forceMountPortal?: true;
  };

// ========================================================================= //

export type DialogCloseProps = HTMLOctoProps<typeof StyledDialogClose> &
  OctoVariants<typeof StyledDialogClose>;

// ========================================================================= //

export type DialogTitleProps = HTMLOctoProps<typeof StyledDialogTitle> &
  OctoVariants<typeof StyledDialogTitle> &
  HeadingProps;

// ========================================================================= //

export type DialogDescriptionProps = HTMLOctoProps<
  typeof StyledDialogDescription
> &
  OctoVariants<typeof StyledDialogDescription> &
  ParagraphProps;
