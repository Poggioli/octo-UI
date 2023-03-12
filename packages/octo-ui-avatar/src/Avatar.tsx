import { forwardRef } from "@octo-ui/core";
import {
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledAvatarRoot,
} from "./styles";
import { AvatarProps } from "./types";

const Avatar = forwardRef<typeof StyledAvatarRoot, AvatarProps>(
  ({ children, delayMs, css, size, color, ...props }, forwardedRef) => {
    return (
      <StyledAvatarRoot css={css} size={size} ref={forwardedRef}>
        <StyledAvatarImage {...props} />
        <StyledAvatarFallback delayMs={delayMs} color={color}>
          {children}
        </StyledAvatarFallback>
      </StyledAvatarRoot>
    );
  }
);
Avatar.toString = () => `.${StyledAvatarRoot.className}`;

export { StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback };
export { Avatar };
