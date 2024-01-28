import groupResolver from "../resolvers/groupResolver";
import { builder } from "./builder";
import { Group } from "./objects/Group";

builder.queryType({
  description: "The query root type.",
  fields: (t) => ({
    groups: t.field({
      type: [Group],
      resolve: groupResolver,
    }),
  }),
});

export default builder.toSchema();
