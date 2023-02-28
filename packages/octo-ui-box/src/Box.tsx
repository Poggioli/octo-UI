import { StyledBox } from "./styles";

const Box = StyledBox;
Box.toString = () => `.${StyledBox.className}`;

export { StyledBox };
export { Box };
