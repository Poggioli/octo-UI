import { forwardRef } from "@octo-ui/core";
import {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
} from "./styles";
import {
  SelectArrowProps,
  SelectContentProps,
  SelectGroupProps,
  SelectIconProps,
  SelectItemIndicatorProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectLabelProps,
  SelectPortalProps,
  SelectRootProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectViewportProps,
} from "./types";

const SelectArrow = forwardRef<typeof StyledSelectArrow, SelectArrowProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectArrow {...props} ref={forwardedRef} />;
  }
);
SelectArrow.toString = () => `.${StyledSelectArrow.className}`;

// ========================================================================= //

const SelectContent = forwardRef<
  typeof StyledSelectContent,
  SelectContentProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectContent {...props} ref={forwardedRef} />;
});
SelectContent.toString = () => `.${StyledSelectContent.className}`;

// ========================================================================= //

const SelectGroup = forwardRef<typeof StyledSelectGroup, SelectGroupProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectGroup {...props} ref={forwardedRef} />;
  }
);
SelectGroup.toString = () => `.${StyledSelectGroup.className}`;

// ========================================================================= //

const SelectIcon = forwardRef<typeof StyledSelectIcon, SelectIconProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectIcon {...props} ref={forwardedRef} />;
  }
);
SelectIcon.toString = () => `.${StyledSelectIcon.className}`;

// ========================================================================= //

const SelectItem = forwardRef<typeof StyledSelectItem, SelectItemProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectItem {...props} ref={forwardedRef} />;
  }
);
SelectItem.toString = () => `.${StyledSelectItem.className}`;

// ========================================================================= //

const SelectItemIndicator = forwardRef<
  typeof StyledSelectItemIndicator,
  SelectItemIndicatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectItemIndicator {...props} ref={forwardedRef} />;
});
SelectItemIndicator.toString = () => `.${StyledSelectItemIndicator.className}`;

// ========================================================================= //

const SelectItemText = forwardRef<
  typeof StyledSelectItemText,
  SelectItemTextProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectItemText {...props} ref={forwardedRef} />;
});
SelectItemText.toString = () => `.${StyledSelectItemText.className}`;

// ========================================================================= //

const SelectLabel = forwardRef<typeof StyledSelectLabel, SelectLabelProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectLabel {...props} ref={forwardedRef} />;
  }
);
SelectLabel.toString = () => `.${StyledSelectLabel.className}`;

// ========================================================================= //

const SelectPortal = forwardRef<typeof StyledSelectPortal, SelectPortalProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectPortal {...props} ref={forwardedRef} />;
  }
);
SelectPortal.toString = () => `.${StyledSelectPortal.className}`;

// ========================================================================= //

const Select = forwardRef<typeof StyledSelectRoot, SelectRootProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectRoot {...props} ref={forwardedRef} />;
  }
);
Select.toString = () => `.${StyledSelectRoot.className}`;

// ========================================================================= //

const SelectScrollDownButton = forwardRef<
  typeof StyledSelectScrollDownButton,
  SelectScrollDownButtonProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectScrollDownButton {...props} ref={forwardedRef} />;
});
SelectScrollDownButton.toString = () =>
  `.${StyledSelectScrollDownButton.className}`;

// ========================================================================= //

const SelectScrollUpButton = forwardRef<
  typeof StyledSelectScrollUpButton,
  SelectScrollUpButtonProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectScrollUpButton {...props} ref={forwardedRef} />;
});
SelectScrollUpButton.toString = () =>
  `.${StyledSelectScrollUpButton.className}`;

// ========================================================================= //

const SelectSeparator = forwardRef<
  typeof StyledSelectSeparator,
  SelectSeparatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectSeparator {...props} ref={forwardedRef} />;
});
SelectSeparator.toString = () => `.${StyledSelectSeparator.className}`;

// ========================================================================= //

const SelectTrigger = forwardRef<
  typeof StyledSelectTrigger,
  SelectTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectTrigger {...props} ref={forwardedRef} />;
});
SelectTrigger.toString = () => `.${StyledSelectTrigger.className}`;

// ========================================================================= //

const SelectValue = forwardRef<typeof StyledSelectValue, SelectValueProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectValue {...props} ref={forwardedRef} />;
  }
);
SelectValue.toString = () => `.${StyledSelectValue.className}`;

// ========================================================================= //

const SelectViewport = forwardRef<
  typeof StyledSelectViewport,
  SelectViewportProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectViewport {...props} ref={forwardedRef} />;
});
SelectViewport.toString = () => `.${StyledSelectViewport.className}`;

export {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
};
export {
  SelectArrow,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  Select,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
};
