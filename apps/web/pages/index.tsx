import { resetCssStyles } from "@octo-ui/core";
import { Button } from "ui";

export default function Web() {
  resetCssStyles();

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
