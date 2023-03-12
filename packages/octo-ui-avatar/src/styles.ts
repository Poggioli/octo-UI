import { styled } from "@octo-ui/core";
import * as Avatar from "@radix-ui/react-avatar";

const StyledAvatarFallback = styled(Avatar.Fallback, {
  alignItems: "center",
  display: "flex",
  fontWeight: 500,
  height: "100%",
  justifyContent: "center",
  lineHeight: 1,
  width: "100%",

  variants: {
    color: {
      unstyled: {
        backgroundColor: "$colors$grey2",
        color: "$colors$grey11",
      },
      primary: {
        backgroundColor: "$colors$primary2",
        color: "$colors$primary11",
      },
      secondary: {
        backgroundColor: "$colors$secondary2",
        color: "$colors$secondary11",
      },
      success: {
        backgroundColor: "$colors$success2",
        color: "$colors$success11",
      },
      error: {
        backgroundColor: "$colors$error2",
        color: "$colors$error11",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});
StyledAvatarFallback.toString = () => `.${StyledAvatarFallback.className}`;

// ========================================================================= //

const StyledAvatarRoot = styled(Avatar.Root, {
  alignItems: "center",
  borderRadius: "$round",
  display: "inline-flex",
  justifyContent: "center",
  overflow: "hidden",
  userSelect: "none",
  verticalAlign: "middle",

  variants: {
    size: {
      small: {
        width: "$11",
        height: "$11",

        [`${StyledAvatarFallback.toString()}`]: {
          fontSize: "$1",
        },
      },
      standard: {
        width: "$14",
        height: "$14",

        [`${StyledAvatarFallback.toString()}`]: {
          fontSize: "$3",
        },
      },
      large: {
        width: "$16",
        height: "$16",

        [`${StyledAvatarFallback.toString()}`]: {
          fontSize: "$7",
        },
      },
      extraLarge: {
        width: "calc($17 * 2)",
        height: "calc($17 * 2)",

        [`${StyledAvatarFallback.toString()}`]: {
          fontSize: "$9",
        },
      },
    },
  },

  defaultVariants: {
    size: "standard",
  },
});
StyledAvatarRoot.toString = () => `.${StyledAvatarRoot.className}`;

// ========================================================================= //

const StyledAvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});
StyledAvatarImage.toString = () => `.${StyledAvatarImage.className}`;

// ========================================================================= //

export { StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback };
