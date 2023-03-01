import { forwardRef } from "@octo-ui/core";
import {
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from "./styles";
import {
  ScrollAreaCornerProps,
  ScrollAreaRootProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "./types";

const ScrollArea = forwardRef<typeof StyledScrollAreaRoot, ScrollAreaRootProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledScrollAreaRoot {...props} ref={forwardedRef} />;
  }
);
ScrollArea.toString = () => `.${StyledScrollAreaRoot.className}`;

// ========================================================================= //

const ScrollAreaViewport = forwardRef<
  typeof StyledScrollAreaViewport,
  ScrollAreaViewportProps
>(({ ...props }, forwardedRef) => {
  return <StyledScrollAreaViewport {...props} ref={forwardedRef} />;
});
ScrollAreaViewport.toString = () => `.${StyledScrollAreaViewport.className}`;

// ========================================================================= //

const ScrollAreaScrollbar = forwardRef<
  typeof StyledScrollAreaScrollbar,
  ScrollAreaScrollbarProps
>(({ ...props }, forwardedRef) => {
  return <StyledScrollAreaScrollbar {...props} ref={forwardedRef} />;
});
ScrollAreaScrollbar.toString = () => `.${StyledScrollAreaScrollbar.className}`;

// ========================================================================= //

const ScrollAreaThumb = forwardRef<
  typeof StyledScrollAreaThumb,
  ScrollAreaThumbProps
>(({ ...props }, forwardedRef) => {
  return <StyledScrollAreaThumb {...props} ref={forwardedRef} />;
});
ScrollAreaThumb.toString = () => `.${StyledScrollAreaThumb.className}`;

// ========================================================================= //

const ScrollAreaCorner = forwardRef<
  typeof StyledScrollAreaCorner,
  ScrollAreaCornerProps
>(({ ...props }, forwardedRef) => {
  return <StyledScrollAreaCorner {...props} ref={forwardedRef} />;
});
ScrollAreaCorner.toString = () => `.${StyledScrollAreaCorner.className}`;

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
