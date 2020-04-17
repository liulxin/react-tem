import { ACTION_SET_ASIDE_PATH } from "./actions";
import updateObject from "../../util/update_object";

const initialState = {
  asidePath: '/',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_SET_ASIDE_PATH:
      return updateObject(state, { asidePath: payload });
    default:
      break;
  }
  return state;
};
