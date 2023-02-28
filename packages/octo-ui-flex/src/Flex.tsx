import { StyledFlex } from "./styles";

const Flex = StyledFlex;
Flex.toString = () => `.${StyledFlex.className}`;

export { StyledFlex };
export { Flex };
