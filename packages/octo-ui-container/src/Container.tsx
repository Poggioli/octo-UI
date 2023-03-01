import { forwardRef } from "@octo-ui/core";
import { StyledContainer } from "./styles";
import { ContainerProps } from "./types";

const Container = forwardRef<typeof StyledContainer, ContainerProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledContainer {...props} ref={forwardedRef} />;
  }
);
Container.toString = () => `.${StyledContainer.className}`;

export { StyledContainer };
export { Container };

