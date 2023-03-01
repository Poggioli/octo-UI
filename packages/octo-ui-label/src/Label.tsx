import { CSS, forwardRef } from "@octo-ui/core";
import { StyledText } from "@octo-ui/text";
import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

const Label = forwardRef<typeof StyledLabel, LabelProps>(
  ({ color, ...props }, forwardedRef) => {
    const css: CSS = {
      color: color ?? "$grey12",
      ...props.css,
    };

    return (
      <StyledText as={StyledLabel} {...props} ref={forwardedRef} css={css} />
    );
  }
);
Label.toString = () => `.${StyledLabel.className}`;

export { StyledLabel };
export { Label };
