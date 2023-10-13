import {useCallback, useState} from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form/form-input/form-input'
import {loginUser} from '../../services/store/user/user.actions'
import {useAppDispatch} from "../../services/hooks/hooks";

export default function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useAppDispatch()

  const body = {
    email: emailValue,
    password: passwordValue,
  }

  const onSubmitHandler = useCallback(
    (e, body) => {
      e.preventDefault()
      dispatch(loginUser(body))
    },
    [dispatch]
  )

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
