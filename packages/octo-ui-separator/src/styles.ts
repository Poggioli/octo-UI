import { styled } from "@octo-ui/core";
import * as Separator from "@radix-ui/react-separator";

const StyledSeparatorRoot = styled(Separator.Root, {
  "&[data-orientation=horizontal]": {
    height: "$1",
    width: "100%",
  },
  "&[data-orientation=vertical]": {
    height: "100%",
    width: "$1",
  },
});
StyledSeparatorRoot.toString = () => `.${StyledSeparatorRoot.className}`;

export { StyledSeparatorRoot };
