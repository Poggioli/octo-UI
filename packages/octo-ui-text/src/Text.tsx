import { forwardRef } from "@octo-ui/core";
import { StyledText } from "./styles";
import { TextProps } from "./types";

const Text = forwardRef<typeof StyledText, TextProps>(
  ({ color, ...props }, forwardedRef) => {
    const css = {
      color: color ?? "$grey12",
      ...props.css,
    };

    return <StyledText {...props} ref={forwardedRef} css={css} />;
  }
);
Text.toString = () => `.${StyledText.className}`;

export { StyledText };
export { Text };
