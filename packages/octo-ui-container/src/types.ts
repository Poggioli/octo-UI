import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledContainer } from "./styles";

export const DEFAULT_TAG_CONTAINER = "div";

export type ContainerProps = HTMLOctoProps<"div"> &
  OctoVariants<typeof StyledContainer>;
