import { v4 } from "uuid";
import { Group } from "../schema/objects/Group";

const createGroupResolver = () => {
  const uuid = v4();

  return new Group(uuid, []);
};

export default createGroupResolver;
