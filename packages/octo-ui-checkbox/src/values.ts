import { CheckboxContextType } from "./types";

export const DEFAULT_CONTEXT_VALUE: CheckboxContextType = {
  state: {
    disabled: false,
    name: "",
    defaultValue: [],
    value: [],
  },
  setState: () => null,
};

export const DEFAULT_CONTEXT_NAME_VALUE: string = "CheckboxGroup";
