export const ACTION_SET_ASIDE_PATH = "SET_ASIDE_PATH";

export function setAsidePath(path) {
  return {
    type: ACTION_SET_ASIDE_PATH,
    payload: path,
  };
}
