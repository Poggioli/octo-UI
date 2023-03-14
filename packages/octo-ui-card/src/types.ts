import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { FlexProps } from "@octo-ui/flex";
import { TextProps } from "@octo-ui/text";
import { StyledCard } from "./styles";

export type CardProps = HTMLOctoProps<typeof StyledCard> &
  OctoVariants<typeof StyledCard> &
  FlexProps;

// ========================================================================= //

export type CardTitleProps = TextProps;

// ========================================================================= //

export type CardSubtitleProps = TextProps;

// ========================================================================= //

export type CardDescriptionProps = TextProps;

// ========================================================================= //

export type CardActionProps = FlexProps;
