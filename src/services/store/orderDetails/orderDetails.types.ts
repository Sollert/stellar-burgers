type OrderStatus = 'created' | 'pending' | 'done';

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

export type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: IngredientData[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type InitialState = {
  isLoading: boolean,
  isError: boolean,
  order: OrderDetailsData | null,
  modalVisible: boolean,
}