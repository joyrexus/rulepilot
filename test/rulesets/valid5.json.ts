import { Rule } from "../../src";

export const valid5Json: Rule = {
  conditions: {
    all: [
      {
        field: "countries",
        operator: "contains",
        value: "US"
      },
      {
        field: "countries",
        operator: "contains-any",
        value: ["FR", "GB"]
      },
      {
        field: "word",
        operator: "contains",
        value: "phone"
      }
    ],
  },
};
