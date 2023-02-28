import { styled } from "@octo-ui/core";

const StyledFlex = styled("div", {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    flexDirection: {
      column: {
        flexDirection: "column",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
      inherit: {
        flexDirection: "inherit",
      },
      initial: {
        flexDirection: "initial",
      },
      revert: {
        flexDirection: "revert",
      },
      row: {
        flexDirection: "row",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      unset: {
        flexDirection: "unset",
      },
    },
    flexWrap: {
      inherit: {
        flexWrap: "inherit",
      },
      initial: {
        flexWrap: "initial",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
      revert: {
        flexWrap: "revert",
      },
      unset: {
        flexWrap: "unset",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    justifyContent: {
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      flexEnd: {
        justifyContent: "flex-end",
      },
      flexStart: {
        justifyContent: "flex-start",
      },
      inherit: {
        justifyContent: "inherit",
      },
      initial: {
        justifyContent: "initial",
      },
      left: {
        justifyContent: "left",
      },
      normal: {
        justifyContent: "normal",
      },
      revert: {
        justifyContent: "revert",
      },
      right: {
        justifyContent: "right",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      spaceEvenly: {
        justifyContent: "space-evenly",
      },
      start: {
        justifyContent: "start",
      },
      stretch: {
        justifyContent: "stretch",
      },
      unset: {
        justifyContent: "unset",
      },
    },
    alignItems: {
      baseline: {
        alignItems: "baseline",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
      flexEnd: {
        alignItems: "flex-end",
      },
      flexStart: {
        alignItems: "flex-start",
      },
      inherit: {
        alignItems: "inherit",
      },
      initial: {
        alignItems: "initial",
      },
      normal: {
        alignItems: "normal",
      },
      revert: {
        alignItems: "revert",
      },
      selfEnd: {
        alignItems: "self-end",
      },
      selfStart: {
        alignItems: "self-start",
      },
      start: {
        alignItems: "start",
      },
      stretch: {
        alignItems: "stretch",
      },
      unset: {
        alignItems: "unset",
      },
    },
    alignContent: {
      baseline: {
        alignContent: "baseline",
      },
      center: {
        alignContent: "center",
      },
      end: {
        alignContent: "end",
      },
      flexEnd: {
        alignContent: "flex-end",
      },
      flexStart: {
        alignContent: "flex-start",
      },
      inherit: {
        alignContent: "inherit",
      },
      initial: {
        alignContent: "initial",
      },
      normal: {
        alignContent: "normal",
      },
      revert: {
        alignContent: "revert",
      },
      spaceAround: {
        alignContent: "space-around",
      },
      spaceBetween: {
        alignContent: "space-between",
      },
      spaceEvenly: {
        alignContent: "space-evenly",
      },
      start: {
        alignContent: "start",
      },
      stretch: {
        alignContent: "stretch",
      },
      unset: {
        alignContent: "unset",
      },
    },
    alignSelf: {
      auto: {
        alignSelf: "auto",
      },
      baseline: {
        alignSelf: "baseline",
      },
      center: {
        alignSelf: "center",
      },
      end: {
        alignSelf: "end",
      },
      flexEnd: {
        alignSelf: "flex-end",
      },
      flexStart: {
        alignSelf: "flex-start",
      },
      inherit: {
        alignSelf: "inherit",
      },
      initial: {
        alignSelf: "initial",
      },
      normal: {
        alignSelf: "normal",
      },
      revert: {
        alignSelf: "revert",
      },
      selfEnd: {
        alignSelf: "self-end",
      },
      selfStart: {
        alignSelf: "self-start",
      },
      start: {
        alignSelf: "start",
      },
      stretch: {
        alignSelf: "stretch",
      },
      unset: {
        alignSelf: "unset",
      },
    },
  },

  defaultVariants: {
    flexDirection: "initial",
    flexWrap: "initial",
    justifyContent: "initial",
    alignItems: "initial",
    alignContent: "initial",
    alignSelf: "initial",
  },
});
StyledFlex.toString = () => `.${StyledFlex.className}`;

export { StyledFlex };
