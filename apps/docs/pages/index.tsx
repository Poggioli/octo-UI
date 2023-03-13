import { theme } from "@octo-ui/core";
import { Box, Button } from "@octo-ui/react";

export default function Docs() {
  return (
    <Box
      className={theme}
      css={{
        padding: "$9",
      }}
    >
      <h1>Docs</h1>
      <Button>Test</Button>
    </Box>
  );
}
