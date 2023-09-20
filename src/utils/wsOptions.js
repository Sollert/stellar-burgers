import {
	connectionClosed,
	connectionError,
	connectionSuccess,
	getOrders,
	wsClose,
	wsStart,
} from '../services/store/ws/ws.slice.js'

import {
	userAuthConnectionClosed,
	userAuthConnectionError,
	userAuthConnectionSuccess,
	userAuthGetOrders,
	userAuthWsClose,
	userAuthWsStart,
} from '../services/store/userAuthWs/userAuthWs.slice.js'

export const wsOptions = {
	wsInit: wsStart,
	onOpen: connectionSuccess,
	onClose: connectionClosed,
	onError: connectionError,
	onMessage: getOrders,
	wsClose: wsClose,
}

export const userAuthWsOptions = {
	wsInit: userAuthWsStart,
	onOpen: userAuthConnectionSuccess,
	onClose: userAuthConnectionClosed,
	onError: userAuthConnectionError,
	onMessage: userAuthGetOrders,
	wsClose: userAuthWsClose,
}
