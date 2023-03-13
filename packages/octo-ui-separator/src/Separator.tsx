import { forwardRef } from "@octo-ui/core";
import { StyledSeparatorRoot } from "./styles";
import { SeparatorProps } from "./types";

const Separator = forwardRef<typeof StyledSeparatorRoot, SeparatorProps>(
  ({ color, ...props }, forwardedRef) => {
    const css = {
      backgroundColor: color ?? "$grey6",
      ...props.css,
    };

    return <StyledSeparatorRoot {...props} ref={forwardedRef} css={css} />;
  }
);
Separator.toString = () => `.${StyledSeparatorRoot.className}`;

export { StyledSeparatorRoot };
export { Separator };

