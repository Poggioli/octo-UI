import { styled } from "@octo-ui/core";
import * as Switch from "@radix-ui/react-switch";

const StyledSwitchThumb = styled(Switch.Thumb, {});
StyledSwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

// ========================================================================= //

const StyledSwitchRoot = styled(Switch.Root, {});
StyledSwitchRoot.toString = () => `.${StyledSwitchRoot.className}`;

export { StyledSwitchThumb, StyledSwitchRoot };
