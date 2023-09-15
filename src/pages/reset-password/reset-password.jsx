import { useCallback, useMemo, useState } from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form-input/form-input'

export function ResetPassword() {
	const [passwordValue, setPasswordValue] = useState('')
	const [codeValue, setCodeValue] = useState('')

	const body = useMemo(
		() => ({
			code: codeValue,
			password: passwordValue,
		}),
		[codeValue, passwordValue]
	)

	const onSubmitHandler = useCallback(e => {
		e.preventDefault()
		console.log('Пароль сброшен')
	}, [])

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
				value={codeValue}
				setValue={setCodeValue}
			/>
		</Form>
	)
}
