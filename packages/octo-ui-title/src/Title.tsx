import { CSS, forwardRef } from "@octo-ui/core";
import { StyledTitle } from "./styles";
import { DEFAULT_TAG_TITLE, TitleProps } from "./types";

const Title = forwardRef<typeof StyledTitle, TitleProps>(
  ({ color, ...props }, forwardedRef) => {
    const css: CSS = {
      color: color ?? "$grey12",
      ...props.css,
    };

    return (
      <StyledTitle
        as={DEFAULT_TAG_TITLE}
        {...props}
        ref={forwardedRef}
        size={{
          "@initial": "8",
          "@medium": "9",
        }}
        css={{
          fontWeight: 500,
          fontVariantNumeric: "proportional-nums",
          lineHeight: "35px",
          ...css,

          "@medium": {
            lineHeight: "55px",
            ...css["@medium"],
          },
        }}
      />
    );
  }
);
Title.toString = () => `.${StyledTitle.className}`;

export { StyledTitle };
export { Title };
