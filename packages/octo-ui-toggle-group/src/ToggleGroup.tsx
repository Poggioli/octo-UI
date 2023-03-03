import { forwardRef } from "@octo-ui/core";
import { StyledToggleGroupItem, StyledToggleGroupRoot } from "./styles";
import { ToggleGroupItemProps, ToggleGroupRootProps } from "./types";

const ToggleGroup = forwardRef<
  typeof StyledToggleGroupRoot,
  ToggleGroupRootProps
>(({ ...props }, forwardedRef) => {
  return <StyledToggleGroupRoot {...props} ref={forwardedRef} />;
});
ToggleGroup.toString = () => `.${StyledToggleGroupRoot.className}`;

// ========================================================================= //

const ToggleGroupItem = forwardRef<
  typeof StyledToggleGroupItem,
  ToggleGroupItemProps
>(({ ...props }, forwardedRef) => {
  return <StyledToggleGroupItem {...props} ref={forwardedRef} />;
});
ToggleGroupItem.toString = () => `.${StyledToggleGroupItem.className}`;

export { ToggleGroup, ToggleGroupItem };
export { StyledToggleGroupRoot, StyledToggleGroupItem };
