import type * as Stitches from "@stitches/react";
import { ElementType } from "react";
import { defaultOctoConfig } from "./theme";

export type OctoVariants<T extends { [key: string]: any; [key: symbol]: any }> =
  Stitches.VariantProps<T>;

export type OctoProperty<T extends keyof Stitches.CSSProperties> =
  Stitches.PropertyValue<T>;

export type OctoScale<T extends keyof Stitches.ScaleValue<T>> =
  Stitches.ScaleValue<T>;

export const OctoUI = defaultOctoConfig;

export const {
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  createTheme,
} = OctoUI;

export const resetCssStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: "$untitled",
  },

  "body, html": {
    height: "100%",
  },

  [`html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
      blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,
      img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u,
      i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
      caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
      embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output,
      ruby, section, summary, time, mark, audio, video`]: {
    margin: 0,
    padding: 0,
    border: 0,
  },

  [`article, aside, details, figcaption, figure, footer, header, hgroup, main,
      menu, nav, section`]: {
    display: "block",
  },

  "*[hidden]": {
    display: "none",
  },

  a: {
    textDecoration: "none",
  },

  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    outline: "inherit",
  },

  body: {
    background: "$background-app",
    lineHeight: "1",
    scrollBehavior: "smooth",
    textRendering: "optimizeSpeed",
  },

  "ol, ul, li": {
    listStyle: "none",
  },

  "blockquote, q": {
    quotes: "none",
  },

  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
  },

  table: {
    borderSpacing: 0,
  },

  fieldset: {
    border: 0,
    margin: 0,
    padding: 0,
  },
});

export type CSS = Stitches.CSS<typeof config>;

export type ComponentCSSProp = {
  css?: CSS;
  as?: ElementType;
};

export type Theme = ReturnType<typeof createTheme>;
