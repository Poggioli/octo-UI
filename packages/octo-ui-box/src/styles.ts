import { styled } from "@octo-ui/core";

const StyledBox = styled("div", {
  boxSizing: "border-box",
});
StyledBox.toString = () => `.${StyledBox.className}`;

export { StyledBox };
