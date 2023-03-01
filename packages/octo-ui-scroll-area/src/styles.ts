import { styled } from "@octo-ui/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = "$sizes$5";

const StyledScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});
StyledScrollAreaViewport.toString = () =>
  `.${StyledScrollAreaViewport.className}`;

// ========================================================================= //

const StyledScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: "flex",
  borderRadius: SCROLLBAR_SIZE,
  userSelect: "none",
  touchAction: "none",
  padding: "$1",
  backgroundColor: "$grey4",
  transition: "background 160ms ease-out",

  "&:hover": {
    backgroundColor: "$grey6",
  },

  '&[data-orientation="vertical"]': {
    width: SCROLLBAR_SIZE,
  },

  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});
StyledScrollAreaScrollbar.toString = () =>
  `.${StyledScrollAreaScrollbar.className}`;

// ========================================================================= //

const StyledScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  borderRadius: SCROLLBAR_SIZE,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: "$14",
    minHeight: "$14",
  },
});
StyledScrollAreaThumb.toString = () => `.${StyledScrollAreaThumb.className}`;

// ========================================================================= //

const StyledScrollAreaCorner = styled(ScrollArea.Corner, {
  background: "$black8",
});
StyledScrollAreaCorner.toString = () => `.${StyledScrollAreaCorner.className}`;

// ========================================================================= //

const StyledScrollAreaRoot = styled(ScrollArea.Root, {
  overflow: "hidden",
  backgroundColor: "$white12",

  variants: {
    color: {
      unstyled: {
        [`${StyledScrollAreaThumb.toString()}`]: {
          backgroundColor: "$grey9",
        },
      },
      primary: {
        [`${StyledScrollAreaThumb.toString()}`]: {
          backgroundColor: "$primary9",
        },
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});
StyledScrollAreaRoot.toString = () => `.${StyledScrollAreaRoot.className}`;

export {
  StyledScrollAreaRoot,
  StyledScrollAreaViewport,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaCorner,
};
