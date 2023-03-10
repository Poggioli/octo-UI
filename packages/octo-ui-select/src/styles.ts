import { styled } from "@octo-ui/core";
import * as Select from "@radix-ui/react-select";

const StyledSelectRoot = styled(Select.Root, {});
StyledSelectRoot.toString = () => `.${StyledSelectRoot.className}`;

// ========================================================================= //

const StyledSelectTrigger = styled(Select.Trigger, {});
StyledSelectTrigger.toString = () => `.${StyledSelectTrigger.className}`;

// ========================================================================= //

const StyledSelectValue = styled(Select.Value, {});
StyledSelectValue.toString = () => `.${StyledSelectValue.className}`;

// ========================================================================= //

const StyledSelectIcon = styled(Select.Icon, {});
StyledSelectIcon.toString = () => `.${StyledSelectIcon.className}`;

// ========================================================================= //

const StyledSelectPortal = styled(Select.Portal, {});
StyledSelectPortal.toString = () => `.${StyledSelectPortal.className}`;

// ========================================================================= //

const StyledSelectContent = styled(Select.Content, {});
StyledSelectContent.toString = () => `.${StyledSelectContent.className}`;

// ========================================================================= //

const StyledSelectViewport = styled(Select.Viewport, {});
StyledSelectViewport.toString = () => `.${StyledSelectViewport.className}`;

// ========================================================================= //

const StyledSelectItem = styled(Select.Item, {});
StyledSelectItem.toString = () => `.${StyledSelectItem.className}`;

// ========================================================================= //

const StyledSelectItemText = styled(Select.ItemText, {});
StyledSelectItemText.toString = () => `.${StyledSelectItemText.className}`;

// ========================================================================= //

const StyledSelectItemIndicator = styled(Select.ItemIndicator, {});
StyledSelectItemIndicator.toString = () =>
  `.${StyledSelectItemIndicator.className}`;

// ========================================================================= //

const StyledSelectScrollUpButton = styled(Select.ScrollUpButton, {});
StyledSelectScrollUpButton.toString = () =>
  `.${StyledSelectScrollUpButton.className}`;

// ========================================================================= //

const StyledSelectScrollDownButton = styled(Select.ScrollDownButton, {});
StyledSelectScrollDownButton.toString = () =>
  `.${StyledSelectScrollDownButton.className}`;

// ========================================================================= //

const StyledSelectGroup = styled(Select.Group, {});
StyledSelectGroup.toString = () => `.${StyledSelectGroup.className}`;

// ========================================================================= //

const StyledSelectLabel = styled(Select.Label, {});
StyledSelectLabel.toString = () => `.${StyledSelectLabel.className}`;

// ========================================================================= //

const StyledSelectSeparator = styled(Select.Separator, {});
StyledSelectSeparator.toString = () => `.${StyledSelectSeparator.className}`;

// ========================================================================= //

const StyledSelectArrow = styled(Select.Arrow, {});
StyledSelectArrow.toString = () => `.${StyledSelectArrow.className}`;

export {
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectIcon,
  StyledSelectPortal,
  StyledSelectContent,
  StyledSelectViewport,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectItemIndicator,
  StyledSelectScrollUpButton,
  StyledSelectScrollDownButton,
  StyledSelectGroup,
  StyledSelectLabel,
  StyledSelectSeparator,
  StyledSelectArrow,
};
