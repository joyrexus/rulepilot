import { Rule } from "../../src";

export const valid5Json: Rule = {
  conditions: {
    all: [
      {
        field: "countries",
        operator: "contains",
        value: "US",
      },
    ],
  },
};
