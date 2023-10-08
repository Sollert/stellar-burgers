export const headers = {
  'Content-Type': 'application/json',
}

export const headersWithAuth = (token: string | null) => {
  return {
    'Content-Type': 'application/json',
    Authorization: token
  }
}