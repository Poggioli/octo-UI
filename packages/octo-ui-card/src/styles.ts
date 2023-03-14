import { styled } from "@octo-ui/core";
import { StyledFlex } from "@octo-ui/flex";

const StyledCard = styled(StyledFlex, {
  backgroundColor: "$colors$grey2",
  borderRadius: "$3",
  boxSizing: "border-box",

  variants: {
    shaded: {
      true: {
        boxShadow: "$colors$black5 0px 0px 22px 0px",
      },
    },
    bordered: {
      true: {
        borderWidth: "$1",
        borderStyle: "solid",
        borderColor: "$colors$grey6",
      },
    },
  },

  defaultVariants: {
    shaded: true,
    bordered: true,
  },
});
StyledCard.toString = () => `.${StyledCard.className}`;

export { StyledCard };
