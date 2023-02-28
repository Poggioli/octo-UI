import { CSS, forwardRef } from "@octo-ui/core";
import { StyledParagraph } from "./styles";
import { DEFAULT_TAG_PARAGRAPH, ParagraphProps } from "./types";

const Paragraph = forwardRef<typeof StyledParagraph, ParagraphProps>(
  ({ color, ...props }, forwardedRef) => {
    const css: CSS = {
      color: color ?? "$grey11",
      ...props.css,
    };

    return (
      <StyledParagraph
        as={DEFAULT_TAG_PARAGRAPH}
        {...props}
        ref={forwardedRef}
        size={{
          "@initial": "3",
          "@medium": "4",
        }}
        css={{
          lineHeight: "25px",
          ...css,

          "@medium": {
            lineHeight: "27px",
            ...css["@medium"],
          },
        }}
      />
    );
  }
);
Paragraph.toString = () => `.${StyledParagraph.className}`;

export { StyledParagraph };
export { Paragraph };
