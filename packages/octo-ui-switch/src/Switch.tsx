import { forwardRef } from "@octo-ui/core";
import { StyledLabel } from "@octo-ui/label";
import { useContext, useEffect } from "react";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from "./styles";
import { SwitchContext, SwitchContextProvider } from "./SwitchContext";
import {
  SwitchContainerProps,
  SwitchLabelProps,
  SwitchProps,
  SwitchThumbProps,
} from "./types";

const SwitchContainer = forwardRef<"div", SwitchContainerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SwitchContextProvider>
        <StyledSwitchContainer {...props} ref={forwardedRef}>
          {children}
        </StyledSwitchContainer>
      </SwitchContextProvider>
    );
  }
);
SwitchContainer.toString = () => `.${StyledSwitchContainer.className}`;

// ========================================================================= //

const SwitchThumb = forwardRef<typeof StyledSwitchThumb, SwitchThumbProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSwitchThumb {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const Switch = forwardRef<typeof StyledSwitchRoot, SwitchProps>(
  ({ disabled, ...props }, forwardedRef) => {
    const { setState } = useContext(SwitchContext);

    useEffect(() => {
      setState((previousState) => ({
        ...previousState,
        disabled: !!disabled,
      }));
    }, [disabled, setState]);

    return (
      <StyledSwitchRoot {...props} disabled={disabled} ref={forwardedRef}>
        <SwitchThumb />
      </StyledSwitchRoot>
    );
  }
);
Switch.toString = () => `.${StyledSwitchRoot.className}`;

// ========================================================================= //

const SwitchLabel = forwardRef<typeof StyledSwitchLabel, SwitchLabelProps>(
  ({ ...props }, forwardedRef) => {
    const {
      state: { disabled },
    } = useContext(SwitchContext);

    return (
      <StyledSwitchLabel
        as={StyledSwitchLabel}
        {...props}
        ref={forwardedRef}
        color={disabled ? "$gray-80" : props.color}
      />
    );
  }
);
SwitchLabel.toString = () => `.${StyledLabel.className}`;

export { SwitchContainer, Switch, SwitchLabel };
export {
  StyledSwitchContainer,
  StyledSwitchRoot,
  StyledSwitchThumb,
  StyledSwitchLabel,
};
