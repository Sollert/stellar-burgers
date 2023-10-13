import {SyntheticEvent, useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import {resetPasswordRequest} from '../../utils/api/api'

import Form from '../../components/form/form'
import FormInput from '../../components/form/form-input/form-input'

export default function ResetPassword() {
  const navigate = useNavigate()
  const location = useLocation()
  const previousPage = location?.state?.from.pathname
  const [passwordValue, setPasswordValue] = useState('')
  const [tokenValue, setTokenValue] = useState('')

  useEffect(() => {
    if (previousPage !== '/forgot-password') {
      navigate('/forgot-password')
    }
  }, [previousPage, navigate])

  const body = {
    password: passwordValue,
    token: tokenValue,
  }

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    resetPasswordRequest(body)
      .then(() => {
        navigate('/login', {state: {from: location}})
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
