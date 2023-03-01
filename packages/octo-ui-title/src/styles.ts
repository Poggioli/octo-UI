import { styled } from "@octo-ui/core";
import { StyledText } from "@octo-ui/text";

const StyledTitle = styled(StyledText, {});
StyledTitle.toString = () => `.${StyledTitle.className}`;

export { StyledTitle };
