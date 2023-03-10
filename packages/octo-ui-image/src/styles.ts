import { styled } from "@octo-ui/core";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

const StyledRatio = styled(AspectRatio.Root, {});
StyledRatio.toString = () => `.${StyledRatio.className}`;

// ========================================================================= //

const StyledImage = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
});
StyledImage.toString = () => `.${StyledImage.className}`;

export { StyledRatio, StyledImage };
