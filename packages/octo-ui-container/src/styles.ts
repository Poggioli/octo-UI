import { styled } from "@octo-ui/core";

const StyledContainer = styled("div", {
  boxSizing: "border-box",
  flexShrink: 0,
  marginLeft: "auto",
  marginRight: "auto",
  px: "$5",

  variants: {
    size: {
      1: {
        maxWidth: "calc($17 * 6)",
      },
      2: {
        maxWidth: "calc($17 * 10)",
      },
      3: {
        maxWidth: "calc($17 * 16)",
      },
      4: {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: 4,
  },
});
StyledContainer.toString = () => `.${StyledContainer.className}`;

export { StyledContainer };
