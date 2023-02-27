import { HTMLOctoProps, OctoProperty, OctoVariants } from "@octo-ui/core";
import { StyledText } from "./styles";

export const DEFAULT_TAG_TEXT = "span";

export type TextProps = HTMLOctoProps<"span"> &
  OctoVariants<typeof StyledText> & {
    color?: OctoProperty<"color">;
  };
