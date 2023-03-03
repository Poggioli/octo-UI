import { forwardRef } from "@octo-ui/core";
import { StyledSwitchRoot, StyledSwitchThumb } from "./styles";
import { SwitchProps, SwitchThumbProps } from "./types";

const Switch = forwardRef<typeof StyledSwitchRoot, SwitchProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSwitchRoot {...props} ref={forwardedRef} />;
  }
);
Switch.toString = () => `.${StyledSwitchRoot.className}`;

// ========================================================================= //

const SwitchThumb = forwardRef<typeof StyledSwitchThumb, SwitchThumbProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSwitchThumb {...props} ref={forwardedRef} />;
  }
);
SwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

export { Switch, SwitchThumb };
export { StyledSwitchRoot, StyledSwitchThumb };

