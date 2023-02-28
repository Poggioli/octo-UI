import { CSS, forwardRef } from "@octo-ui/core";
import { StyledHeading } from "./styles";
import { DEFAULT_TAG_HEADING, HeadingProps } from "./types";

const Heading = forwardRef<typeof StyledHeading, HeadingProps>(
  ({ color, ...props }, forwardedRef) => {
    const css: CSS = {
      color: color ?? "$grey12",
      ...props.css,
    };

    return (
      <StyledHeading
        as={DEFAULT_TAG_HEADING}
        {...props}
        ref={forwardedRef}
        size={{
          "@initial": "6",
          "@medium": "7",
        }}
        css={{
          fontWeight: 500,
          fontVariantNumeric: "proportional-nums",
          lineHeight: "25px",
          ...css,

          "@medium": {
            lineHeight: "30px",
            ...css["@medium"],
          },
        }}
      />
    );
  }
);
Heading.toString = () => `.${StyledHeading.className}`;

export { StyledHeading };
export { Heading };
