import { Box } from "@octo-ui/box";
import { theme } from "@octo-ui/core";
import { Button } from "ui";

export default function Web() {
  return (
    <Box
      className={theme}
      css={{
        padding: "$9",
      }}
    >
      <h1>Web</h1>
      <Button />
    </Box>
  );
}
