import { forwardRef } from "@octo-ui/core";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  StyledCheckboxGroup,
  StyledCheckboxIndicator,
  StyledCheckboxItem,
  StyledCheckboxItemContainer,
  StyledCheckboxItemLabel
} from "./styles";
import {
  CheckboxContextProps,
  CheckboxContextType,
  CheckboxGroupProps,
  CheckboxIndicatorProps,
  CheckboxItemContainerProps,
  CheckboxItemLabelProps,
  CheckboxItemProps
} from "./types";
import { DEFAULT_CONTEXT_NAME_VALUE, DEFAULT_CONTEXT_VALUE } from "./values";

const CheckboxContext = createContext<CheckboxContextType>(
  DEFAULT_CONTEXT_VALUE
);

const CheckboxContextProvider: FC<
  PropsWithChildren<Omit<CheckboxContextProps, "name" | "onValueChangeItem">>
> = ({ children, disabled, defaultValue, value, onChangeValue }) => {
  const stateProps: CheckboxContextProps = {
    ...DEFAULT_CONTEXT_VALUE.state,
    disabled: disabled ?? DEFAULT_CONTEXT_VALUE.state.disabled,
    name: DEFAULT_CONTEXT_NAME_VALUE,
    defaultValue: defaultValue ?? DEFAULT_CONTEXT_VALUE.state.defaultValue,
    value,
    onChangeValue,
  };

  const [state, setState] = useState(stateProps);

  useEffect(() => {
    setState((previousState) => ({
      ...previousState,
      disabled,
    }));
  }, [disabled]);

  return (
    <CheckboxContext.Provider value={{ state, setState }}>
      {children}
    </CheckboxContext.Provider>
  );
};

// ========================================================================= //

const CheckboxGroup = forwardRef<
  typeof StyledCheckboxGroup,
  CheckboxGroupProps
>(
  (
    { disabled, defaultValue, value: valueProps, onChangeValue, ...props },
    forwardedRef
  ) => {
    return (
      <CheckboxContextProvider
        disabled={disabled}
        defaultValue={defaultValue}
        value={[...new Set([...(valueProps || []), ...(defaultValue || [])])]}
        onChangeValue={onChangeValue}
      >
        <StyledCheckboxGroup {...props} ref={forwardedRef} />
      </CheckboxContextProvider>
    );
  }
);
CheckboxGroup.toString = () => `.${StyledCheckboxGroup.className}`;

// ========================================================================= //

const CheckboxIndicator = forwardRef<
  typeof StyledCheckboxIndicator,
  CheckboxIndicatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledCheckboxIndicator {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const CheckboxItem = forwardRef<typeof StyledCheckboxItem, CheckboxItemProps>(
  ({ disabled: disabledProps, value, ...props }, forwardedRef) => {
    const {
      state: {
        name: contextName,
        disabled: contextDisabled,
        defaultValue,
        value: contextValue,
        onChangeValue,
      },
      setState,
    } = useContext(CheckboxContext);

    if (!contextName) {
      throw new Error(
        `\`CheckboxItem\` must be used within \`${DEFAULT_CONTEXT_NAME_VALUE}\``
      );
    }

    const disabled = useMemo<boolean>(
      () => !!contextDisabled || !!disabledProps,
      [disabledProps, contextDisabled]
    );

    const defaultChecked = useMemo<boolean>(
      () => !!defaultValue?.includes(value),
      [defaultValue, value]
    );

    const checked = useMemo<boolean>(() => {
      return (contextValue as string[]).includes(value);
    }, [contextValue, value]);

    const handleonCheckedChange = (changeState: Checkbox.CheckedState) => {
      const newState: string[] = (contextValue as string[]).filter(
        (val: string) => val !== value
      );

      if (!!changeState) {
        newState.push(value);
      }

      if (onChangeValue) {
        onChangeValue(newState);
      }

      setState((previousValue) => ({
        ...previousValue,
        value: newState,
      }));
    };

    return (
      <StyledCheckboxItem
        {...props}
        ref={forwardedRef}
        disabled={disabled}
        defaultChecked={defaultChecked}
        value={value}
        checked={checked}
        onCheckedChange={handleonCheckedChange}
      >
        <CheckboxIndicator>
          <CheckIcon />
          {/* {props.checked === "indeterminate" ? <DividerHorizontalIcon /> : null} */}
          {/* {props.checked === true ? <CheckIcon /> : null} */}
        </CheckboxIndicator>
      </StyledCheckboxItem>
    );
  }
);
CheckboxItem.toString = () => `.${StyledCheckboxItem.className}`;

// ========================================================================= //

const CheckboxItemLabel = forwardRef<
  typeof StyledCheckboxItemLabel,
  CheckboxItemLabelProps
>(({ ...props }, forwardedRef) => {
  return <StyledCheckboxItemLabel {...props} ref={forwardedRef} />;
});
CheckboxItemLabel.toString = () => `.${StyledCheckboxItemLabel.className}`;

// ========================================================================= //

const CheckboxItemContainer = forwardRef<
  typeof StyledCheckboxItemContainer,
  CheckboxItemContainerProps
>(({ ...props }, forwardedRef) => {
  return <StyledCheckboxItemContainer {...props} ref={forwardedRef} />;
});
CheckboxItemContainer.toString = () =>
  `.${StyledCheckboxItemContainer.className}`;

export {
  CheckboxItem,
  CheckboxGroup,
  CheckboxItemLabel,
  CheckboxItemContainer,
};
export {
  StyledCheckboxIndicator,
  StyledCheckboxItem,
  StyledCheckboxGroup,
  StyledCheckboxItemLabel,
  StyledCheckboxItemContainer,
};

