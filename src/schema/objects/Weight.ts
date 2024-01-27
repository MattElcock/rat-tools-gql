import { Metric } from "../../types";
import { builder } from "../builder";

export class Weight {
  metric: Metric;
  value: number;
  dateTaken: Date;

  constructor(metric: Metric, value: number, dateTaken: Date) {
    this.metric = metric;
    this.value = value;
    this.dateTaken = dateTaken;
  }
}

builder.objectType(Weight, {
  name: "Weight",
  description: "A weight",
  fields: (t) => ({
    metric: t.exposeString("metric"),
    value: t.exposeInt("value"),
    dateTaken: t.field({
      type: "String",
      resolve: (parent) => parent.dateTaken.toString(),
    }),
  }),
});
