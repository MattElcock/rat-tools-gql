import createGroupResolver from "../resolvers/createGroupResolver";
import groupResolver from "../resolvers/groupResolver";
import { builder } from "./builder";
import { Group } from "./objects/Group";
import { Pet } from "./objects/Pet";

// Queries
builder.queryType({
  description: "The query root type.",
  fields: (t) => ({
    groups: t.field({
      type: [Group],
      resolve: groupResolver,
    }),
  }),
});

// Mutations
builder.mutationType({
  fields: (t) => ({
    createGroup: t.field({ type: Group, resolve: createGroupResolver }),
  }),
});

export default builder.toSchema();
