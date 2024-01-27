import { Species, Sex, Fur } from "../../types";
import { builder } from "../builder";
import { Weight } from "./Weight";

export class Pet {
  id: string;
  species: Species;
  name: string;
  sex: Sex;
  fur: Fur[];
  weights: Weight[];

  constructor(
    id: string,
    species: Species,
    name: string,
    sex: Sex,
    fur: Fur[],
    weights: Weight[]
  ) {
    this.id = id;
    this.species = species;
    this.name = name;
    this.sex = sex;
    this.fur = fur;
    this.weights = weights;
  }
}

builder.objectType(Pet, {
  name: "Pet",
  description: "A pet",
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    sex: t.exposeString("sex"),
    fur: t.exposeStringList("fur"),
    weights: t.field({
      type: [Weight],
      resolve: (parent) =>
        parent.weights.map(
          (weight) => new Weight(weight.metric, weight.value, weight.dateTaken)
        ),
    }),
  }),
});
