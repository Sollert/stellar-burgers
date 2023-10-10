export type BurgerIngredientsTypeProps = {
  type: "sauce" | "main" | "bun";
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
  }
}