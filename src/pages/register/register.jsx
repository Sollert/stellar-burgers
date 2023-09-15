import { useCallback, useMemo, useState } from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form-input/form-input'

export function Register() {
	const [nameValue, setNameValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const body = useMemo(
		() => ({
			email: emailValue,
			password: passwordValue,
			name: nameValue,
		}),
		[emailValue, passwordValue, nameValue]
	)

	const onSubmitHandler = useCallback(e => {
		e.preventDefault()
		console.log('register success')
	}, [])

	return (
		<Form
			title='Регистрация'
			body={body}
			buttonText='Зарегистрироваться'
			onSubmit={onSubmitHandler}
			text='Уже зарегистрированы?'
			link='/login'
			linkText='Войти'
		>
			<FormInput
				name='name'
				type={'text'}
				placeholder='Имя'
				value={nameValue}
				setValue={setNameValue}
			/>
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
