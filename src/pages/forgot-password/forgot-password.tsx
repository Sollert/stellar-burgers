import {SyntheticEvent, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {sendResetTokenRequest} from '../../utils/api/api'

import Form from '../../components/form/form'
import FormInput from '../../components/form/form-input/form-input'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const location = useLocation()

  const [emailValue, setEmailValue] = useState('')

  const body = {
    email: emailValue,
  }

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    sendResetTokenRequest(body)
      .then(() => {
        navigate('/reset-password', {state: {from: location}})
      })
      .catch(err => console.log(err))
  }

  return (
    <Form
      title='Восстановление пароля'
      body={body}
      buttonText='Восстановить'
      onSubmit={onSubmitHandler}
      text='Вспомнили пароль?'
      link='/login'
      linkText='Войти'
    >
      <FormInput
        name='email'
        type={'email'}
        placeholder='Укажите e-mail'
        value={emailValue}
        setValue={setEmailValue}
      />
    </Form>
  )
}
