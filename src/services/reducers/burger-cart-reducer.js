export const inititalCartState = {
  bun: null,
  toppings: [],
  ids: [],
  totalPrice: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUN':
      return {
        ...state,
        bun: action.item,
        ids: [
          ...state.ids.filter((id) => id !== state?.bun?._id),
          action.item._id,
        ],
        totalPrice: state.bun
          ? state.totalPrice - state['bun'].price * 2 + action.item.price * 2
          : state.totalPrice + action.item.price * 2,
      };
    case 'ADD_TOPPING':
      return {
        ...state,
        toppings: [...state.toppings, action.item],
        ids: [...state.ids, action.item._id],
        totalPrice: state.totalPrice + action.item.price,
      };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};
