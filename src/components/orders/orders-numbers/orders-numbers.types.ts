type IngredientData = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  uid?: string;
}

type OrderStatus = 'created' | 'pending' | 'done';

export type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: IngredientData[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type OrdersNumbersProps = {
  doneOrders: boolean;
  title: string;
}