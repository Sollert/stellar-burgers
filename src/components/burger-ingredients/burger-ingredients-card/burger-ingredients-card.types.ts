export type IngredientData = {
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

export type CartState = {
  bun: IngredientData | null;
  toppings: IngredientData[];
  totalPrice: number;
}

export type BurgerIngredientsCardProps = {
  item: IngredientData;
}