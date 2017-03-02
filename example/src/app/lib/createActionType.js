// @flow
const createActionType = (module: string, type: string): string =>
  `${module}/${type.replace(/ /g, '_').toUpperCase()}`;

export default createActionType;
