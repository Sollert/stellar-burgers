type OrderStatus = 'created' | 'pending' | 'done';

export type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: string[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}