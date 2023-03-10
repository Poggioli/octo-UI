import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledImage, StyledRatio } from "./styles";

type RatioProps = HTMLOctoProps<typeof StyledRatio> &
  OctoVariants<typeof StyledRatio>;

// ========================================================================= //

export type ImageProps = HTMLOctoProps<"img"> &
  OctoVariants<typeof StyledImage> &
  RatioProps;
