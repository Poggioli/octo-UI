import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledFlex } from "./styles";

export const DEFAULT_TAG_FLEX = "div";

export type TextProps = HTMLOctoProps<"div"> & OctoVariants<typeof StyledFlex>;
