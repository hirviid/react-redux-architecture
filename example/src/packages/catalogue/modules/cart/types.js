// @flow
import type { Price } from '../../../../components/FormattedPrice/type';

export type CartProduct = {
  id: number,
  name: string,
  price: Price,
  summary?: string,
  quantity?: number,
}
