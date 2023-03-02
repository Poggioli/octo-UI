import { forwardRef } from "@octo-ui/core";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = forwardRef<typeof StyledButton, ButtonProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledButton {...props} ref={forwardedRef} />;
  }
);
Button.toString = () => `.${StyledButton.className}`;

export { Button };
export { StyledButton };
