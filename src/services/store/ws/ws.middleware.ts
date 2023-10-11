import {getCookie} from '../../../utils/cookie/cookie'
import {UserAuthWsOptions, WsOptions} from "../../types/types";
import {Middleware} from "redux";
import {RootState} from "../store";

export const socketMiddleware =
  (wsUrl: string,
   wsOptions: WsOptions | UserAuthWsOptions,
   isAuth: boolean = false
  ): Middleware<{}, RootState> => {
    return store => {
      let socket: WebSocket | null = null

      return next => action => {
        const {dispatch} = store
        const {type} = action
        const {wsInit, onOpen, onClose, onError, onMessage, wsClose} = wsOptions

        if (type === wsInit.toString()) {
          if (!isAuth) {
            socket = new WebSocket(wsUrl)
          } else {
            const accessToken = getCookie('token')
            socket = new WebSocket(`${wsUrl}?token=${accessToken}`)
          }
        }

        if (socket) {
          socket.onopen = () => {
            dispatch(onOpen())
          }

          socket.onclose = () => {
            dispatch(onClose())
          }

          socket.onerror = () => {
            dispatch(onError())
          }

          socket.onmessage = event => {
            const {data} = event
            const parsedData = JSON.parse(data)
            const {success, ...restParsedData} = parsedData
            dispatch(onMessage(restParsedData))
          }

          if (type === wsClose.toString()) {
            socket.close()
            socket = null
          }
        }

        next(action)
      }
    }
  }
