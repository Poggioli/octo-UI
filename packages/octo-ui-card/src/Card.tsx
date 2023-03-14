import { forwardRef } from "@octo-ui/core";
import { Flex, StyledFlex } from "@octo-ui/flex";
import { StyledText, Text } from "@octo-ui/text";
import { StyledCard } from "./styles";
import {
  CardActionProps,
  CardDescriptionProps,
  CardProps,
  CardSubtitleProps,
  CardTitleProps,
} from "./types";

const Card = forwardRef<typeof StyledCard, CardProps>(
  ({ flexDirection = "column", ...props }, forwardedRef) => {
    return (
      <StyledCard {...props} ref={forwardedRef} flexDirection={flexDirection} />
    );
  }
);
Card.toString = () => `.${StyledCard.className}`;

// ========================================================================= //

const CardTitle = forwardRef<typeof StyledText, CardTitleProps>(
  (
    { as = "h3", size = 6, color = "$colors$grey12", css, ...props },
    forwardedRef
  ) => {
    return (
      <Text
        {...props}
        ref={forwardedRef}
        as={as}
        size={size}
        color={color}
        css={{
          fontWeight: 500,
          ...css,
        }}
      />
    );
  }
);
CardTitle.toString = () => `.${StyledText.className}`;

// ========================================================================= //

const CardSubtitle = forwardRef<typeof StyledText, CardSubtitleProps>(
  (
    { as = "h4", size = 1, color = "$colors$grey11", ...props },
    forwardedRef
  ) => {
    return (
      <Text {...props} ref={forwardedRef} as={as} size={size} color={color} />
    );
  }
);
CardSubtitle.toString = () => `.${StyledText.className}`;

// ========================================================================= //

const CardDescription = forwardRef<typeof StyledText, CardDescriptionProps>(
  (
    { as = "p", size = 2, color = "$colors$grey11", ...props },
    forwardedRef
  ) => {
    return (
      <Text {...props} ref={forwardedRef} as={as} size={size} color={color} />
    );
  }
);
CardDescription.toString = () => `.${StyledText.className}`;

// ========================================================================= //

const CardContainerAction = forwardRef<typeof StyledFlex, CardActionProps>(
  (
    { justifyContent = "flexStart", flexWrap = "wrap", ...props },
    forwardedRef
  ) => {
    return (
      <Flex
        {...props}
        ref={forwardedRef}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
      />
    );
  }
);
CardContainerAction.toString = () => `.${StyledFlex.className}`;

export {
  StyledCard,
  StyledText as StyledCardTitle,
  StyledText as StyledCardSubtitle,
  StyledText as StyledCardDescription,
  StyledFlex as StyledCardContainerAction,
};
export { Card, CardTitle, CardSubtitle, CardDescription, CardContainerAction };
