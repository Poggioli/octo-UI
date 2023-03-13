import { theme } from "@octo-ui/core";
import { Box, Button } from "@octo-ui/react";

export default function Web() {
  return (
    <Box
      className={theme}
      css={{
        padding: "$9",
      }}
    >
      <h1>Web</h1>
      <Button>Test</Button>
    </Box>
  );
}
