import {ForwardedRef} from "react";

export type BurgerIngredientsTypesListProps = {
  config: {
    bun: {
      title: 'Булки',
    },
    sauce: {
      title: 'Соусы',
    },
    main: {
      title: 'Начинки',
    },
  };
  bunRef: ForwardedRef<HTMLDivElement>;
  sauceRef: ForwardedRef<HTMLDivElement>;
  mainRef: ForwardedRef<HTMLDivElement>;
  onScrollHandler: () => void;
  scrollContainerRef: ForwardedRef<HTMLUListElement>;
}