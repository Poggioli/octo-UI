import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledButton } from "./styles";

export const DEFAULT_TAG_BUTTON = "button";

export type ButtonProps = HTMLOctoProps<"button"> &
  OctoVariants<typeof StyledButton>;
