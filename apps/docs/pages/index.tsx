import { resetCssStyles, theme } from "@octo-ui/core";
import { Button } from "ui";

export default function Docs() {
  resetCssStyles();

  return (
    <div className={theme}>
      <h1>Docs</h1>
      <Button />
    </div>
  );
}
