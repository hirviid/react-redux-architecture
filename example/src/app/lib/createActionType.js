// @flow
const createActionType = (module: string, type: string): string =>
  `${module.toUpperCase()}/${type.replace(/ /g, '_').toUpperCase()}`;

export default createActionType;
