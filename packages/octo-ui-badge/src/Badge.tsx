import { forwardRef } from "@octo-ui/core";
import { useMemo } from "react";
import { StyledBadge, StyledBadgeContainer } from "./styles";
import { BadgeProps } from "./types";

const Badge = forwardRef<typeof StyledBadge, BadgeProps>(
  (
    { count, maxCount = 99, showZero = false, dot = false, children, ...props },
    forwardedRef
  ) => {
    const showBadge = useMemo(() => showZero || count, [showZero, count]);

    const value = useMemo(
      () => (count > maxCount ? `${maxCount}+` : `${count}`),
      [count, maxCount]
    );

    return (
      <StyledBadgeContainer>
        {showBadge ? (
          <StyledBadge
            {...props}
            ref={forwardedRef}
            dot={dot}
          >
            {!dot ? value : null}
          </StyledBadge>
        ) : null}
        {children}
      </StyledBadgeContainer>
    );
  }
);
Badge.toString = () => `${StyledBadge.className}`;

export { StyledBadgeContainer, StyledBadge };
export { Badge };

