import {useCallback, useMemo, useState} from 'react'

import Form from '../../components/form/form'
import FormInput from '../../components/form/form-input/form-input'
import {registerUser} from '../../services/store/user/user.actions'
import {useAppDispatch} from "../../services/hooks/hooks";

export default function Register() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const dispatch = useAppDispatch()

  const body = useMemo(
    () => ({
      email: emailValue,
      password: passwordValue,
      name: nameValue,
    }),
    [emailValue, passwordValue, nameValue]
  )

  const onSubmitHandler = useCallback(
    (e, body) => {
      e.preventDefault()
      dispatch(registerUser(body))
    },
    [dispatch]
  )

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
