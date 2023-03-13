import { keyframes, styled } from "@octo-ui/core";
import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

// ========================================================================= //

const contentShow = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

// ========================================================================= //

const StyledDialogRoot = styled(Dialog.Root, {});
StyledDialogRoot.toString = () => `.${StyledDialogRoot.className}`;

// ========================================================================= //

const StyledDialogTrigger = styled(Dialog.Trigger, {
  pointerEvents: "visible",
});
StyledDialogTrigger.toString = () => `.${StyledDialogTrigger.className}`;

// ========================================================================= //

const StyledDialogPortal = styled(Dialog.Portal, {});
StyledDialogPortal.toString = () => `.${StyledDialogPortal.className}`;

// ========================================================================= //

const StyledDialogOverlay = styled(Dialog.Overlay, {
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: "$colors$black11",
  display: "flex",
  overflow: "hidden",
  overflowY: "auto",
  padding: "$12 0",
  position: "fixed",

  variants: {
    blur: {
      true: {
        backdropFilter: "blur(5px)",
      },
    },
  },

  defaultVariants: {
    blur: false,
  },
});
StyledDialogOverlay.toString = () => `.${StyledDialogOverlay.className}`;

// ========================================================================= //

const StyledDialogContentBox = styled("div", {
  backgroundColor: "inherit",
  position: "relative",
  width: "100%",
});
StyledDialogContentBox.toString = () => `.${StyledDialogContentBox.className}`;

// ========================================================================= //

const StyledDialogContent = styled(Dialog.Content, {
  animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: "$colors$grey2",
  borderRadius: "$2",
  boxSizing: "border-box",
  boxShadow:
    "0px 10px 38px -10px $colors$black7, 0px 10px 20px -15px $colors$black6",
  maxWidth: "calc($17 * 14)",
  margin: "auto",
  overflow: "hidden",
  padding: "$11",
  position: "relative",
  width: "85vw",

  "@small": {
    minWidth: "calc($13 * 3)",
    width: "75vw",
  },

  "&:focus": {
    outline: "none",
  },
});
StyledDialogContent.toString = () => `.${StyledDialogContent.className}`;

// ========================================================================= //

const StyledDialogClose = styled(Dialog.Close, {});
StyledDialogClose.toString = () => `.${StyledDialogClose.className}`;

// ========================================================================= //

const StyledDialogTitle = styled(Dialog.Title, {
  marginBottom: "$11",
});
StyledDialogTitle.toString = () => `.${StyledDialogTitle.className}`;

// ========================================================================= //

const StyledDialogDescription = styled(Dialog.Description, {
  marginBottom: "$10",
});
StyledDialogDescription.toString = () =>
  `.${StyledDialogDescription.className}`;

export {
  StyledDialogRoot,
  StyledDialogTrigger,
  StyledDialogPortal,
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose,
  StyledDialogTitle,
  StyledDialogDescription,
  StyledDialogContentBox,
};
