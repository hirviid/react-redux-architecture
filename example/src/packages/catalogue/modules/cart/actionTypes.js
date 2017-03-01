import createActionType from '@example/app/lib/createActionType';
import { NAME } from './constants';

export const CART_ADDED = createActionType(NAME, 'added');
