import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from "./styles";

export type ScrollAreaRootProps = HTMLOctoProps<typeof StyledScrollAreaRoot> &
  OctoVariants<typeof StyledScrollAreaRoot> &
  ScrollArea.ScrollAreaProps;

// ========================================================================= //

export type ScrollAreaViewportProps = HTMLOctoProps<
  typeof StyledScrollAreaViewport
> &
  OctoVariants<typeof StyledScrollAreaViewport> &
  ScrollArea.ScrollAreaViewportProps;

// ========================================================================= //

export type ScrollAreaScrollbarProps = HTMLOctoProps<
  typeof StyledScrollAreaScrollbar
> &
  OctoVariants<typeof StyledScrollAreaScrollbar> &
  ScrollArea.ScrollAreaScrollbarProps;

// ========================================================================= //

export type ScrollAreaThumbProps = HTMLOctoProps<typeof StyledScrollAreaThumb> &
  OctoVariants<typeof StyledScrollAreaThumb> &
  ScrollArea.ScrollAreaThumbProps;

// ========================================================================= //

export type ScrollAreaCornerProps = HTMLOctoProps<
  typeof StyledScrollAreaCorner
> &
  OctoVariants<typeof StyledScrollAreaCorner> &
  ScrollArea.ScrollAreaCornerProps;
