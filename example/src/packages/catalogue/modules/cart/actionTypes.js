import createActionType from '@example/app/lib/createActionType';
import { NAME } from './constants';

export const PRODUCT_ADDED = createActionType(NAME, 'product added');
