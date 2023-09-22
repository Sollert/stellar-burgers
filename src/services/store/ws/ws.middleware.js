import {getCookie} from '../../../utils/cookie/cookie'

export const socketMiddleware = (wsUrl, wsOptions, isAuth) => {
  return store => {
    let socket = null

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
