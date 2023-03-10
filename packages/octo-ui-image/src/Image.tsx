import { forwardRef } from "@octo-ui/core";
import { StyledImage, StyledRatio } from "./styles";
import { ImageProps } from "./types";

const Image = forwardRef<typeof StyledImage, ImageProps>(
  ({ ratio = 1, ...props }, forwardedRef) => {
    return (
      <StyledRatio ratio={ratio}>
        <StyledImage {...props} ref={forwardedRef} />
      </StyledRatio>
    );
  }
);
Image.toString = () => `.${StyledImage.className}`;

export { StyledImage };
export { Image };
