import {
  connectionClosed,
  connectionError,
  connectionSuccess,
  getOrders,
  wsClose,
  wsStart
} from "./ws.slice";
import {
  userAuthConnectionClosed,
  userAuthConnectionError,
  userAuthConnectionSuccess,
  userAuthGetOrders,
  userAuthWsClose,
  userAuthWsStart
} from "../userAuthWs/userAuthWs.slice";

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

type OrderDetailsData = {
  readonly _id: string;
  readonly ingredients: string[];
  readonly status: OrderStatus;
  readonly name: string;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type OrdersObject = {
  orders: OrderDetailsData[];
  total: number;
  totalToday: number;
}

export type InitialState = {
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