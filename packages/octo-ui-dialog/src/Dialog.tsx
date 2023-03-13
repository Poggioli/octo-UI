import { forwardRef } from "@octo-ui/core";
import { Heading } from "@octo-ui/heading";
import { Paragraph } from "@octo-ui/paragraph";
import {
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogContentBox,
  StyledDialogDescription,
  StyledDialogOverlay,
  StyledDialogPortal,
  StyledDialogRoot,
  StyledDialogTitle,
  StyledDialogTrigger
} from "./styles";
import {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps
} from "./types";

const Dialog = forwardRef<typeof StyledDialogRoot, DialogProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledDialogRoot {...props} ref={forwardedRef} />;
  }
);
Dialog.toString = () => `.${StyledDialogRoot.className}`;

// ========================================================================= //

const DialogTrigger = forwardRef<
  typeof StyledDialogTrigger,
  DialogTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledDialogTrigger {...props} ref={forwardedRef} asChild />;
});
DialogTrigger.toString = () => `.${StyledDialogTrigger.className}`;

// ========================================================================= //

const DialogOverlay = forwardRef<
  typeof StyledDialogOverlay,
  DialogOverlayProps
>(({ ...props }, forwardedRef) => {
  return <StyledDialogOverlay {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const DialogPortal = forwardRef<typeof StyledDialogPortal, DialogPortalProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledDialogPortal {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const DialogContent = forwardRef<
  typeof StyledDialogContent,
  DialogContentProps
>(
  (
    { children, forceMountPortal, forceMountOverlay, container, blur, ...props },
    forwardedRef
  ) => {
    return (
      <DialogPortal forceMount={forceMountPortal} container={container}>
        <DialogOverlay forceMount={forceMountOverlay} blur={blur}>
          <StyledDialogContent {...props} ref={forwardedRef}>
            <StyledDialogContentBox>{children}</StyledDialogContentBox>
          </StyledDialogContent>
        </DialogOverlay>
      </DialogPortal>
    );
  }
);
DialogContent.toString = () => `.${StyledDialogContent.className}`;

// ========================================================================= //

const DialogClose = forwardRef<typeof StyledDialogClose, DialogCloseProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledDialogClose {...props} ref={forwardedRef} asChild />;
  }
);
DialogClose.toString = () => `.${StyledDialogClose.className}`;

// ========================================================================= //

const DialogCloseIcon = forwardRef<typeof StyledDialogClose, DialogCloseProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <StyledDialogClose {...props} ref={forwardedRef}>
        X
      </StyledDialogClose>
    );
  }
);
DialogCloseIcon.toString = () => `.${StyledDialogClose.className}`;

// ========================================================================= //

const DialogTitle = forwardRef<typeof StyledDialogTitle, DialogTitleProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledDialogTitle ref={forwardedRef} asChild>
        <Heading {...props} as="h2">
          {children}
        </Heading>
      </StyledDialogTitle>
    );
  }
);
DialogTitle.toString = () => `.${StyledDialogTitle.className}`;

// ========================================================================= //

const DialogDescription = forwardRef<
  typeof StyledDialogDescription,
  DialogDescriptionProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledDialogDescription ref={forwardedRef} asChild>
      <Paragraph {...props}>{children}</Paragraph>
    </StyledDialogDescription>
  );
});
DialogDescription.toString = () => `.${StyledDialogDescription.className}`;

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
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogCloseIcon,
  DialogTitle,
  DialogDescription,
};

