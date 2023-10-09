import {IngredientData} from "../burger-constructor.types";

export type DropObject = {
  index: number
}

export type Collect = {
  isHover: boolean;
  canDrop: boolean;
}

export type BurgerConstructorToppingProps = {
  ingredient: IngredientData;
  index: number;
}