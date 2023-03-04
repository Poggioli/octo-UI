import { styled } from "@octo-ui/core";
import { StyledLabel } from "@octo-ui/label";
import * as Switch from "@radix-ui/react-switch";

const StyledSwitchThumb = styled(Switch.Thumb, {});
StyledSwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

// ========================================================================= //

const StyledSwitchRoot = styled(Switch.Root, {});
StyledSwitchRoot.toString = () => `.${StyledSwitchRoot.className}`;

// ========================================================================= //

const StyledSwitchLabel = styled(StyledLabel, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
});

// ========================================================================= //

const StyledSwitchContainer = styled("div", {
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  gap: "$5",
  flexWrap: "nowrap",
});
StyledSwitchContainer.toString = () => `.${StyledSwitchContainer.className}`;

export {
  StyledSwitchThumb,
  StyledSwitchRoot,
  StyledSwitchContainer,
  StyledSwitchLabel,
};
