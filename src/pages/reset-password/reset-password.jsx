import { useMemo, useState } from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form-input/form-input'
import { resetPasswordRequest } from '../../utils/api'
import { useLocation, useNavigate } from 'react-router-dom'

export function ResetPassword() {
	const navigate = useNavigate()
	const location = useLocation()
	const [passwordValue, setPasswordValue] = useState('')
	const [tokenValue, setTokenValue] = useState('')

	const body = useMemo(
		() => ({
			password: passwordValue,
			token: tokenValue,
		}),
		[tokenValue, passwordValue]
	)

	const onSubmitHandler = e => {
		e.preventDefault()
		resetPasswordRequest(body)
			.then(() => {
				navigate('/login', { state: { from: location } })
			})
			.catch(err => console.log(err))
	}

	return (
		<Form
			title='Восстановление пароля'
			body={body}
			buttonText='Сохранить'
			onSubmit={onSubmitHandler}
			text='Вспомнили пароль?'
			link='/login'
			linkText='Войти'
		>
			<FormInput
				name='password'
				type={'password'}
				placeholder='Введите новый пароль'
				value={passwordValue}
				setValue={setPasswordValue}
				icon
			/>
			<FormInput
				name='code'
				type={'text'}
				placeholder='Введите код из письма'
				value={tokenValue}
				setValue={setTokenValue}
			/>
		</Form>
	)
}
