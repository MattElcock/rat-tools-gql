import { Fur } from "../schema/enums/Fur";
import { Metric } from "../schema/enums/Metric";
import { Sex } from "../schema/enums/Sex";
import { Species } from "../schema/enums/Species";
import { Pet } from "../schema/objects/Pet";
import { Weight } from "../schema/objects/Weight";

type resolverArgs = {
  name: string;
  species: Species;
  sex: Sex;
  fur: Fur[];
  weightReading: number;
  weightDateTaken: string;
  weightMetric: Metric;
};

const createPetResolver = (_parent: any, args: resolverArgs) => {
  const weight = new Weight(
    args.weightMetric,
    args.weightReading,
    new Date(args.weightDateTaken)
  );

  return new Pet("1", args.species, args.name, args.sex, args.fur, [weight]);
};

export default createPetResolver;
