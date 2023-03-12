import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import {
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledAvatarRoot,
} from "./styles";

type AvatarImageProps = HTMLOctoProps<typeof StyledAvatarImage> &
  OctoVariants<typeof StyledAvatarImage>;

// ========================================================================= //

type AvatarFallbackProps = HTMLOctoProps<typeof StyledAvatarFallback> &
  OctoVariants<typeof StyledAvatarFallback>;

// ========================================================================= //

export type AvatarProps = HTMLOctoProps<typeof StyledAvatarRoot> &
  OctoVariants<typeof StyledAvatarRoot> &
  AvatarImageProps &
  AvatarFallbackProps;
