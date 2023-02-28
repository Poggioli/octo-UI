import { styled } from "@octo-ui/core";
import { StyledText } from "@octo-ui/text";

const StyledParagraph = styled(StyledText, {});
StyledParagraph.toString = () => `.${StyledParagraph.className}`;

export { StyledParagraph };
