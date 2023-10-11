import {ChangeEvent, Dispatch, FormEvent, ForwardedRef, ReactNode, SetStateAction} from "react";
import {
  connectionClosed,
  connectionError,
  connectionSuccess,
  getOrders,
  wsClose,
  wsStart
} from "../store/ws/ws.slice";
import {
  userAuthConnectionClosed,
  userAuthConnectionError,
  userAuthConnectionSuccess,
  userAuthGetOrders,
  userAuthWsClose,
  userAuthWsStart
} from "../store/userAuthWs/userAuthWs.slice";

export type Collect = {
  isHover: boolean;
  canDrop: boolean;
}

export type Location = {
  pathname: string;
};

export type LocationState = {
  state: {
    from?: {
      pathname: string;
    };
  };
};

export type PassInputType = 'password' | 'text' | 'email'

export type OrderStatus = 'created' | 'pending' | 'done';

export type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: string[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

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

export type IngredientDataWithCount = IngredientData & { count: number }

export type DropObject = {
  index: number
}

export type Config = {
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

export type CartState = {
  bun: IngredientData | null;
  toppings: IngredientData[];
  totalPrice: number;
}

export type FormBody = {
  name?: string;
  password?: string;
  email?: string;
  token?: string
}

export type OnSubmitHandler = (e: FormEvent<HTMLFormElement>, body: FormBody) => void;

export type FormInputState = {
  icon: 'ShowIcon' | 'HideIcon';
  type: 'password' | 'text';
};

export type FormInputOnChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFn: Dispatch<SetStateAction<string>>
) => void;

export type FormInputOnIconClickHandler = (
  setFn: Dispatch<SetStateAction<FormInputState>>
) => void;

export type OrdersObject = {
  orders: OrderDetailsData[];
  total: number;
  totalToday: number;
}

// Store Types

export type WsInitialState = {
  wsConnected: boolean,
  orders: OrdersObject,
}

export type WsOptions = {
  wsInit: typeof wsStart;
  onOpen: typeof connectionSuccess;
  onClose: typeof connectionClosed;
  onError: typeof connectionError;
  onMessage: typeof getOrders;
  wsClose: typeof wsClose;
}

export type UserAuthWsOptions = {
  wsInit: typeof userAuthWsStart;
  onOpen: typeof userAuthConnectionSuccess;
  onClose: typeof userAuthConnectionClosed;
  onError: typeof userAuthConnectionError;
  onMessage: typeof userAuthGetOrders;
  wsClose: typeof userAuthWsClose;
}

export type UserInitialState = {
  isRequest: boolean;
  isError: boolean;
  isAuth: boolean;
  user: UserInfoData | null;
}

export type UserInfoData = {
  email: string;
  name: string;
  password: string;
}

export type OrderDetailsInitialState = {
  isLoading: boolean,
  isError: boolean,
  order: OrderDetailsData | null,
  modalVisible: boolean,
}

export type IngredientsInitialState = {
  isLoading: boolean;
  isError: boolean;
  ingredients: IngredientData[]
}

export type CartInitialState = {
  bun: IngredientData | null;
  toppings: IngredientData[];
  totalPrice: number;
}

// Utils Types
export type CookieOptions = {
  readonly expires?: Date;
  readonly path: string;
  readonly domain?: string;
  readonly secure?: string;
}

export type TokensData = {
  accessToken: string;
  refreshToken: string;
}

// API types
export type RegisterUserData = {
  name: string;
  email: string;
  body: string
}

export type ResetTokenRequestData = {
  email: string
}

export type ResetPasswordData = {
  password: string;
  token: string
}

export type LoginUserData = {
  email: string;
  password: string
}

export type PatchUserData = {
  name: string;
  email: string;
  password: string
}

// Props Types
export type BurgerConstructorToppingProps = {
  ingredient: IngredientData;
  index: number;
}

export type BurgerIngredientsProps = {
  config: Config
}

export type BurgerIngredientsTypesListProps = {
  config: Config;
  bunRef: ForwardedRef<HTMLDivElement>;
  sauceRef: ForwardedRef<HTMLDivElement>;
  mainRef: ForwardedRef<HTMLDivElement>;
  onScrollHandler: () => void;
  scrollContainerRef: ForwardedRef<HTMLUListElement>;
}

export type BurgerIngredientsTypeProps = {
  type: "sauce" | "main" | "bun";
  config: Config;
}

export type BurgerIngredientsTabsProps = {
  current: string;
  setCurrent: (value: string) => void;
}

export type BurgerIngredientsCardsListProps = {
  type: "bun" | "sauce" | "main"
}

export type BurgerIngredientsCardProps = {
  item: IngredientData;
}

export type FormProps = {
  children: ReactNode;
  title: string;
  buttonText: string;
  body: FormBody;
  onSubmit: OnSubmitHandler;
  text: string;
  link: string;
  linkText: string;
  isLoginPage?: boolean;
}

export type FormInputProps = {
  name: string;
  type: 'password' | 'text' | 'email';
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  icon?: boolean;
}

export type HeaderLinkProps = {
  isActive: boolean;
  text: string;
}

export type IngredientIconProps = {
  imageUrl: string;
  index?: number;
  count?: number;
  position?: 'absolute' | 'relative';
}

export type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
  title?: string;
}

export type ProtectedRouteProps = {
  children: ReactNode;
  anonymous: boolean
}

export type OrderCardProps = {
  order: OrderDetailsData;
  isUser: boolean;
}

export type OrderInfoItemProps = {
  ingredient: IngredientDataWithCount;
}

export type OrdersCounterProps = {
  title: string;
  number: number
}

export type OrdersListProps = {
  orders: OrderDetailsData[];
  to: string;
  isUser: boolean;
}

export type OrdersNumbersProps = {
  doneOrders: boolean;
  title: string;
}