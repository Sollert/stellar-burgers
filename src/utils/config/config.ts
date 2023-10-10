import {
  connectionClosed,
  connectionError,
  connectionSuccess,
  getOrders,
  wsClose,
  wsStart,
} from '../../services/store/ws/ws.slice'

import {
  userAuthConnectionClosed,
  userAuthConnectionError,
  userAuthConnectionSuccess,
  userAuthGetOrders,
  userAuthWsClose,
  userAuthWsStart,
} from '../../services/store/userAuthWs/userAuthWs.slice'
import {BurgerIngredientsConfig} from "./config.type";

export const burgerIngredientsConfig: BurgerIngredientsConfig = {
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

export const wsConfig = {
  wsInit: wsStart,
  onOpen: connectionSuccess,
  onClose: connectionClosed,
  onError: connectionError,
  onMessage: getOrders,
  wsClose: wsClose,
}

export const userAuthWsConfig = {
  wsInit: userAuthWsStart,
  onOpen: userAuthConnectionSuccess,
  onClose: userAuthConnectionClosed,
  onError: userAuthConnectionError,
  onMessage: userAuthGetOrders,
  wsClose: userAuthWsClose,
}
