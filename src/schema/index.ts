import { Species, Sex, Fur, Metric } from "../types";
import { builder } from "./builder";
import { Pet } from "./objects/Pet";
import { Weight } from "./objects/Weight";
import mockData from "../mocks/pet.json";

builder.queryType({
  description: "The query root type.",
  fields: (t) => ({
    pets: t.field({
      type: [Pet],
      resolve: () => {
        const json = mockData;

        const pets = json.map(
          (item) =>
            new Pet(
              item.id,
              Species.Rat,
              item.name,
              item.sex as Sex,
              item.fur as Fur[],
              item.weights.map(
                (weight) =>
                  new Weight(
                    weight.metric as Metric,
                    weight.value,
                    new Date(weight.dateTaken)
                  )
              )
            )
        );

        return pets;
      },
    }),
  }),
});

export default builder.toSchema();
