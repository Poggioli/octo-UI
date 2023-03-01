import { styled } from "@octo-ui/core";
import * as LabelPrimitive from "@radix-ui/react-label";

const StyledLabel = styled(LabelPrimitive.Root, {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default",
});
StyledLabel.toString = () => `.${StyledLabel.className}`;

export { StyledLabel };
