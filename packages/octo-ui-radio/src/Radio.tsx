import { forwardRef } from "@octo-ui/core";
import { Label } from "@octo-ui/label";
import {
  StyledRadioGroupIndicator,
  StyledRadioGroupItem,
  StyledRadioGroupItemContainer,
  StyledRadioGroupItemLabel,
  StyledRadioGroupRoot,
} from "./styles";
import {
  RadioGroupIndicatorProps,
  RadioGroupItemContainerProps,
  RadioGroupItemLabelProps,
  RadioGroupItemProps,
  RadioGroupProps,
} from "./types";

const RadioGroupIndicator = forwardRef<
  typeof StyledRadioGroupIndicator,
  RadioGroupIndicatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledRadioGroupIndicator {...props} ref={forwardedRef} />;
});
RadioGroupIndicator.toString = () => `.${StyledRadioGroupIndicator.className}`;

// ========================================================================= //

const RadioGroupItem = forwardRef<
  typeof StyledRadioGroupItem,
  RadioGroupItemProps
>(({ ...props }, forwardedRef) => {
  return (
    <StyledRadioGroupItem {...props} ref={forwardedRef}>
      <RadioGroupIndicator />
    </StyledRadioGroupItem>
  );
});
RadioGroupItem.toString = () => `.${StyledRadioGroupItem.className}`;

// ========================================================================= //

const RadioGroup = forwardRef<typeof StyledRadioGroupRoot, RadioGroupProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledRadioGroupRoot {...props} ref={forwardedRef} />;
  }
);
RadioGroup.toString = () => `.${StyledRadioGroupRoot.className}`;

// ========================================================================= //

const RadioGroupItemLabel = forwardRef<
  typeof StyledRadioGroupItemLabel,
  RadioGroupItemLabelProps
>(({ ...props }, forwardedRef) => {
  return <Label as={StyledRadioGroupItemLabel} {...props} ref={forwardedRef} />;
});
RadioGroupItemLabel.toString = () => `.${StyledRadioGroupItemLabel.className}`;

// ========================================================================= //

const RadioGroupItemContainer = forwardRef<
  typeof StyledRadioGroupItemContainer,
  RadioGroupItemContainerProps
>(({ ...props }, forwardedRef) => {
  return <StyledRadioGroupItemContainer {...props} ref={forwardedRef} />;
});
RadioGroupItemContainer.toString = () =>
  `.${StyledRadioGroupItemContainer.className}`;

export {
  StyledRadioGroupIndicator,
  StyledRadioGroupItem,
  StyledRadioGroupItemLabel,
  StyledRadioGroupRoot,
  StyledRadioGroupItemContainer,
};
export {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroup,
  RadioGroupItemLabel,
  RadioGroupItemContainer,
};
