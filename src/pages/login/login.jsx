import { useCallback, useMemo, useState } from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form-input/form-input'

export function Login() {
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const body = useMemo(
		() => ({
			email: emailValue,
			password: passwordValue,
		}),
		[emailValue, passwordValue]
	)

	const onSubmitHandler = useCallback(e => {
		e.preventDefault()
		console.log('submit success')
	}, [])

	return (
		<Form
			title='Вход'
			body={body}
			buttonText='Войти'
			onSubmit={onSubmitHandler}
			text='Вы — новый пользователь?'
			link='/register'
			linkText='Зарегистрироваться'
			isLoginPage
		>
			<FormInput
				name='email'
				type={'email'}
				placeholder='E-mail'
				value={emailValue}
				setValue={setEmailValue}
			/>
			<FormInput
				name='password'
				type={'password'}
				placeholder='Пароль'
				value={passwordValue}
				setValue={setPasswordValue}
				icon
			/>
		</Form>
	)
}
