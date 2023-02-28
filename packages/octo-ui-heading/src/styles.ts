import { styled } from "@octo-ui/core";
import { StyledText } from "@octo-ui/text";

const StyledHeading = styled(StyledText, {});
StyledHeading.toString = () => `.${StyledHeading.className}`;

export { StyledHeading };
