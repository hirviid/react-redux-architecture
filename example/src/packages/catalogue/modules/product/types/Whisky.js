// @flow
import type { Price } from '@example/components/FormattedPrice/type';

export type Whisky = {
  'id': number,
  'name': string,
  'price': Price,
  'description': string,
  'type': string,
  'distillery': string,
  'content': string,
  'region': string,
  'country': string,
  'alcohol': number,
};
