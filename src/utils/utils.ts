import {setCookie} from './cookie/cookie'
import {TokensData} from "./utils.types";

export function saveTokens(data: TokensData) {
  localStorage.setItem('refreshToken', data.refreshToken)
  const accessToken = data.accessToken.split('Bearer ')[1]

  if (accessToken) {
    setCookie('token', accessToken, {path: '/'})
  }
}

export const formatOrderNumber = (n: number) => {
  return n.toString().padStart(6, '0')
}

export const getOrderStatus = (status: string) => {
  switch (status) {
    case 'created':
      return 'Создан'

    case 'pending':
      return 'Готовится'

    case 'done':
      return 'Выполнен'

    default:
      return ''
  }
}

const getDaysDiff = (orderDateISOString: string) => {
  const today = new Date()
  const todayISOstring = today.toISOString()
  const slicedTodayISOString = todayISOstring.slice(0, 10)
  const slicedOrderDateISOString = orderDateISOString.slice(0, 10)
  const parsedToday = Date.parse(slicedTodayISOString)
  const parsedOrderDate = Date.parse(slicedOrderDateISOString)

  const daysDiff = (parsedToday - parsedOrderDate) / (1000 * 60 * 60 * 24)

  return daysDiff
}

const formatDaysDiff = (num: number) => {
  if (num === 0) return 'Сегодня'
  if (num === 1) return 'Вчера'
  return num <= 4 ? `${num} дня назад` : `${num} дней назад`
}

export const getTimeStampString = (orderDateISOString: string) => {
  const date = new Date(orderDateISOString)
  const daysDiff = getDaysDiff(orderDateISOString)
  const formattedDaysDiff = formatDaysDiff(daysDiff)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const hoursToString = hours <= 9 ? `0${hours}` : `${hours}`
  const minutesToString = minutes <= 9 ? `0${minutes}` : `${minutes}`
  const timeZone = Math.abs(date.getTimezoneOffset() / 60)

  return `${formattedDaysDiff}, ${hoursToString}:${minutesToString} i-GMT+${timeZone}`
}
