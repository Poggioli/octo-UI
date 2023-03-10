import { HTMLOctoProps, OctoVariants } from "@octo-ui/core";
import { StyledInput } from "./styles";

export type InputProps = HTMLOctoProps<typeof StyledInput> &
  OctoVariants<typeof StyledInput>;
