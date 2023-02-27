import { styled } from "@octo-ui/core";
import { DEFAULT_TAG_TEXT } from "./types";

const StyledText = styled(DEFAULT_TAG_TEXT, {
  display: "block",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  lineHeight: 1,
  margin: 0,
  padding: 0,

  "& > strong": {
    fontWeight: 700,
  },

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      6: {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      7: {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      8: {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      9: {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});
StyledText.toString = () => `.${StyledText.className}`;

export { StyledText };
