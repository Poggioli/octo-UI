import {
  blackA,
  blue,
  green,
  orange,
  red,
  slate,
  whiteA,
  yellow,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import { ElementType } from "react";

export type OctoVariants<T extends { [key: string]: any; [key: symbol]: any }> =
  Stitches.VariantProps<T>;

export type OctoProperty<T extends keyof Stitches.CSSProperties> =
  | Stitches.PropertyValue<T>
  | Stitches.ScaleValue<T>
  | string
  | number;

export type OctoScale<T extends keyof Stitches.ScaleValue<T>> =
  Stitches.ScaleValue<T>;

const defaultTheme = {
  prefix: "octo-UI",
  theme: {
    colors: {
      primary1: blue.blue1,
      primary2: blue.blue2,
      primary3: blue.blue3,
      primary4: blue.blue4,
      primary5: blue.blue5,
      primary6: blue.blue6,
      primary7: blue.blue7,
      primary8: blue.blue8,
      primary9: blue.blue9,
      primary10: blue.blue10,
      primary11: blue.blue11,
      primary12: blue.blue12,

      secondary1: orange.orange1,
      secondary2: orange.orange2,
      secondary3: orange.orange3,
      secondary4: orange.orange4,
      secondary5: orange.orange5,
      secondary6: orange.orange6,
      secondary7: orange.orange7,
      secondary8: orange.orange8,
      secondary9: orange.orange9,
      secondary10: orange.orange10,
      secondary11: orange.orange11,
      secondary12: orange.orange12,

      accent1: yellow.yellow1,
      accent2: yellow.yellow2,
      accent3: yellow.yellow3,
      accent4: yellow.yellow4,
      accent5: yellow.yellow5,
      accent6: yellow.yellow6,
      accent7: yellow.yellow7,
      accent8: yellow.yellow8,
      accent9: yellow.yellow9,
      accent10: yellow.yellow10,
      accent11: yellow.yellow11,
      accent12: yellow.yellow12,

      grey1: slate.slate1,
      grey2: slate.slate2,
      grey3: slate.slate3,
      grey4: slate.slate4,
      grey5: slate.slate5,
      grey6: slate.slate6,
      grey7: slate.slate7,
      grey8: slate.slate8,
      grey9: slate.slate9,
      grey10: slate.slate10,
      grey11: slate.slate11,
      grey12: slate.slate12,

      error1: red.red1,
      error2: red.red2,
      error3: red.red3,
      error4: red.red4,
      error5: red.red5,
      error6: red.red6,
      error7: red.red7,
      error8: red.red8,
      error9: red.red9,
      error10: red.red10,
      error11: red.red11,
      error12: red.red12,

      success1: green.green1,
      success2: green.green2,
      success3: green.green3,
      success4: green.green4,
      success5: green.green5,
      success6: green.green6,
      success7: green.green7,
      success8: green.green8,
      success9: green.green9,
      success10: green.green10,
      success11: green.green11,
      success12: green.green12,

      black1: blackA.blackA1,
      black2: blackA.blackA2,
      black3: blackA.blackA3,
      black4: blackA.blackA4,
      black5: blackA.blackA5,
      black6: blackA.blackA6,
      black7: blackA.blackA7,
      black8: blackA.blackA8,
      black9: blackA.blackA9,
      black10: blackA.blackA10,
      black11: blackA.blackA11,
      black12: blackA.blackA12,

      white1: whiteA.whiteA1,
      white2: whiteA.whiteA2,
      white3: whiteA.whiteA3,
      white4: whiteA.whiteA4,
      white5: whiteA.whiteA5,
      white6: whiteA.whiteA6,
      white7: whiteA.whiteA7,
      white8: whiteA.whiteA8,
      white9: whiteA.whiteA9,
      white10: whiteA.whiteA10,
      white11: whiteA.whiteA11,
      white12: whiteA.whiteA12,
    },
    sizes: {
      1: "1px",
      2: "2px",
      3: "4px",
      4: "6px",
      5: "8px",
      6: "10px",
      7: "12px",
      8: "14px",
      9: "16px",
      10: "20px",
      11: "24px",
      12: "32px",
      13: "40px",
      14: "48px",
      15: "56px",
      16: "64px",
      17: "72px",
    },
    space: {
      1: "1px",
      2: "2px",
      3: "4px",
      4: "6px",
      5: "8px",
      6: "10px",
      7: "12px",
      8: "14px",
      9: "16px",
      10: "20px",
      11: "24px",
      12: "32px",
      13: "40px",
      14: "48px",
      15: "56px",
      16: "64px",
      17: "72px",
    },
    fonts: {
      untitled: "Untitled Sans, -apple-system, system-ui, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "22px",
      7: "28px",
      8: "36px",
      9: "60px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      4: "16px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    borderStyles: {},
    borderWidths: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
    shadows: {},
    transitions: {},
  },
  media: {
    small: "(min-width: 520px)",
    medium: "(min-width: 900px)",
    large: "(min-width: 1200px)",
    extraLarge: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
  },
  utils: {
    p: (value: OctoProperty<"padding">) => ({
      padding: value,
    }),
    pt: (value: OctoProperty<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: OctoProperty<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: OctoProperty<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: OctoProperty<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: OctoProperty<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: OctoProperty<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: OctoProperty<"margin">) => ({
      margin: value,
    }),
    mt: (value: OctoProperty<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: OctoProperty<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: OctoProperty<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: OctoProperty<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: OctoProperty<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: OctoProperty<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: OctoProperty<"textAlign">) => ({ textAlign: value }),
    fd: (value: OctoProperty<"flexDirection">) => ({ flexDirection: value }),
    fw: (value: OctoProperty<"flexWrap">) => ({ flexWrap: value }),
    ai: (value: OctoProperty<"alignItems">) => ({ alignItems: value }),
    ac: (value: OctoProperty<"alignContent">) => ({ alignContent: value }),
    jc: (value: OctoProperty<"justifyContent">) => ({ justifyContent: value }),
    as: (value: OctoProperty<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: OctoProperty<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: OctoProperty<"flexShrink">) => ({ flexShrink: value }),
    fb: (value: OctoProperty<"flexBasis">) => ({ flexBasis: value }),
    bc: (value: OctoProperty<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    br: (value: OctoProperty<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: OctoProperty<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: OctoProperty<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: OctoProperty<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: OctoProperty<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),
    bs: (value: OctoProperty<"boxShadow">) => ({ boxShadow: value }),
    lh: (value: OctoProperty<"lineHeight">) => ({ lineHeight: value }),
    ox: (value: OctoProperty<"overflowX">) => ({ overflowX: value }),
    oy: (value: OctoProperty<"overflowY">) => ({ overflowY: value }),
    pe: (value: OctoProperty<"pointerEvents">) => ({ pointerEvents: value }),
    us: (value: OctoProperty<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: (value: OctoProperty<"width">) => ({
      width: value,
      height: value,
    }),
    appearance: (value: OctoProperty<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (value: OctoProperty<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (value: OctoProperty<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    fullscreen: (value: OctoProperty<"position">) => ({
      position: value,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
  },
};

export const OctoUI = createStitches(defaultTheme);

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
