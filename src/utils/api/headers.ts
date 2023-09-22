export const headers = {
    'Content-Type': 'application/json',
}

export const headersWithAuth = (token: string) => {
    return {
        'Content-Type': 'application/json',
        Authorization: token
    }
}