import { resetCssStyles, theme } from "@octo-ui/core";
import { Button } from "ui";

export default function Web() {
  resetCssStyles();

  return (
    <div className={theme}>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
