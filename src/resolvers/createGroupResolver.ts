import { Group } from "../schema/objects/Group";

const createGroupResolver = () => {
  return new Group("1", []);
};

export default createGroupResolver;
