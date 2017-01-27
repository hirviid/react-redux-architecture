// @flow
import type { Price } from '../../../../components/FormattedPrice/type';

export type CartProduct = {
  id: number,
  name: string,
  summary?: string,
  price: Price
}
