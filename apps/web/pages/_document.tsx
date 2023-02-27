import { getCssText, resetCssStyles } from "@octo-ui/core";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class Document extends NextDocument {
  render() {
    resetCssStyles();

    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
