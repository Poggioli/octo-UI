import { styled } from "@octo-ui/core";

const StyledBadgeContainer = styled("span", {
  display: "inline-flex",
  position: "relative",
});
StyledBadgeContainer.toString = () => `.${StyledBadgeContainer.className}`;

// ========================================================================= //

const StyledBadge = styled("span", {
  alignItems: "center",
  borderRadius: "$pill",
  display: "flex",
  fontFamily: "$mono",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 500,
  height: "$10",
  justifyContent: "center",
  lineHeight: 1,
  minWidth: "$10",
  padding: "0 $4",
  position: "absolute",

  variants: {
    horizontalPosition: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
    verticalPosition: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
    color: {
      unstyled: {
        backgroundColor: "$colors$grey9",
        "&, *": {
          color: "$colors$grey1",
        },
      },
      primary: {
        backgroundColor: "$colors$primary9",
        "&, *": {
          color: "$colors$primary1",
        },
      },
      secondary: {
        backgroundColor: "$colors$secondary9",
        "&, *": {
          color: "$colors$secondary1",
        },
      },
      success: {
        backgroundColor: "$colors$success9",
        "&, *": {
          color: "$colors$success1",
        },
      },
      error: {
        backgroundColor: "$colors$error9",
        "&, *": {
          color: "$colors$error1",
        },
      },
    },
    dot: {
      true: {
        height: "$5",
        minWidth: "initial",
        padding: 0,
        width: "$5",
      },
    },
  },

  defaultVariants: {
    horizontalPosition: "right",
    verticalPosition: "top",
    color: "unstyled",
    dot: false,
  },

  compoundVariants: [
    {
      horizontalPosition: "right",
      verticalPosition: "top",
      css: {
        transform: "translate(50%, -50%)",
      },
    },
    {
      horizontalPosition: "right",
      verticalPosition: "bottom",
      css: {
        transform: "translate(50%, 50%)",
      },
    },
    {
      horizontalPosition: "left",
      verticalPosition: "bottom",
      css: {
        transform: "translate(-50%, 50%)",
      },
    },
    {
      horizontalPosition: "left",
      verticalPosition: "top",
      css: {
        transform: "translate(-50%, -50%)",
      },
    },
  ],
});
StyledBadge.toString = () => `.${StyledBadge.className}`;

export { StyledBadgeContainer, StyledBadge };
