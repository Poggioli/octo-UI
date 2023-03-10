import { forwardRef } from "@octo-ui/core";
import {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabelGroup,
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
  SelectLabelGroupProps,
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

// ========================================================================= //

const SelectItemIndicator = forwardRef<
  typeof StyledSelectItemIndicator,
  SelectItemIndicatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectItemIndicator {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const SelectItemText = forwardRef<
  typeof StyledSelectItemText,
  SelectItemTextProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectItemText {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const SelectItem = forwardRef<typeof StyledSelectItem, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSelectItem {...props} ref={forwardedRef}>
        <SelectItemText>{children}</SelectItemText>
        <SelectItemIndicator>OK</SelectItemIndicator>
      </StyledSelectItem>
    );
  }
);
SelectItem.toString = () => `.${StyledSelectItem.className}`;

// ========================================================================= //

const SelectLabelGroup = forwardRef<
  typeof StyledSelectLabelGroup,
  SelectLabelGroupProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectLabelGroup {...props} ref={forwardedRef} />;
});
SelectLabelGroup.toString = () => `.${StyledSelectLabelGroup.className}`;

// ========================================================================= //

const SelectPortal = forwardRef<typeof StyledSelectPortal, SelectPortalProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectPortal {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const SelectTrigger = forwardRef<
  typeof StyledSelectTrigger,
  SelectTriggerProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectTrigger {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const SelectValue = forwardRef<typeof StyledSelectValue, SelectValueProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelectValue {...props} ref={forwardedRef} />;
  }
);

// ========================================================================= //

const Select = forwardRef<typeof StyledSelectRoot, SelectRootProps>(
  ({ children, placeholder, ...props }, forwardedRef) => {
    return (
      <StyledSelectRoot {...props} ref={forwardedRef}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
          <SelectIcon>l</SelectIcon>
        </SelectTrigger>
        {children}
      </StyledSelectRoot>
    );
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

// ========================================================================= //

const SelectScrollUpButton = forwardRef<
  typeof StyledSelectScrollUpButton,
  SelectScrollUpButtonProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectScrollUpButton {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const SelectSeparator = forwardRef<
  typeof StyledSelectSeparator,
  SelectSeparatorProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectSeparator {...props} ref={forwardedRef} />;
});
SelectSeparator.toString = () => `.${StyledSelectSeparator.className}`;

// ========================================================================= //

const SelectViewport = forwardRef<
  typeof StyledSelectViewport,
  SelectViewportProps
>(({ ...props }, forwardedRef) => {
  return <StyledSelectViewport {...props} ref={forwardedRef} />;
});

// ========================================================================= //

const SelectContent = forwardRef<
  typeof StyledSelectContent,
  SelectContentProps
>(({ children, container, width, height, ...props }, forwardedRef) => {
  return (
    <SelectPortal container={container}>
      <StyledSelectContent {...props} ref={forwardedRef}>
        <SelectScrollUpButton />
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDownButton />
        <SelectArrow width={width} height={height} />
      </StyledSelectContent>
    </SelectPortal>
  );
});
SelectContent.toString = () => `.${StyledSelectContent.className}`;

export {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabelGroup,
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
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabelGroup,
  Select,
  SelectSeparator,
};
