import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {Button, Input,} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './profile-form.module.css'
import {getUserInfo, patchUserInfo,} from '../../services/store/user/user.actions'
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import {PassInputType} from "./profile-form.types";

export default function ProfileForm() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(store => store.user.user)
  const name = user ? user.name : "";
  const email = user ? user.email : "";

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  const [isChange, setIsChange] = useState(false)
  const [nameValue, setNameValue] = useState(name)
  const [loginValue, setLoginValue] = useState(email)
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passInputType, setPassInputType] = useState<PassInputType>('password')

  const nameInputRef = useRef(null)
  const loginInputRef = useRef(null)
  const passInputRef = useRef(null)

  const body = useMemo(
    () => ({
      name: nameValue,
      email: loginValue,
      password: passwordValue,
    }),
    [nameValue, loginValue, passwordValue]
  )

  const onChangeHandler = useCallback((e, setFn) => {
    setFn(e.target.value)
    setIsChange(true)
  }, [])

  const onBlurHandler = useCallback(e => {
    e.target.disabled = true
  }, [])

  const onIconClickHandler = useCallback(ref => {
    ref.current.disabled = false
    ref.current.focus()
  }, [])

  const passOnIconClickHandler = useCallback(
    ref => {
      onIconClickHandler(ref)
      setPassInputType('text')
    },
    [onIconClickHandler]
  )

  const passOnBlurHandler = useCallback(
    e => {
      onBlurHandler(e)
      setPassInputType('password')
    },
    [onBlurHandler]
  )

  const submitHandler = useCallback(
    e => {
      e.preventDefault()
      dispatch(patchUserInfo(body)).then(() => {
        setIsChange(false)
      })
    },
    [dispatch, body]
  )

  const cancelHandler = useCallback(
    e => {
      e.preventDefault()
      setNameValue(name)
      setLoginValue(email)
      setPasswordValue('password')
      setIsChange(false)
    },
    [email, name]
  )

  return (
    <form className={styles['profile-form']} onSubmit={submitHandler}>
      <div className='mb-6'>
        <Input
          ref={nameInputRef}
          type={'text'}
          placeholder='Имя'
          icon='EditIcon'
          name='name'
          value={nameValue}
          onChange={e => onChangeHandler(e, setNameValue)}
          onIconClick={() => onIconClickHandler(nameInputRef)}
          onBlur={e => onBlurHandler(e)}
          disabled
        />
      </div>
      <div className='mb-6'>
        <Input
          ref={loginInputRef}
          type={'text'}
          placeholder='Логин'
          icon='EditIcon'
          name='login'
          value={loginValue}
          onChange={e => onChangeHandler(e, setLoginValue)}
          onIconClick={() => onIconClickHandler(loginInputRef)}
          onBlur={e => onBlurHandler(e)}
          disabled
        />
      </div>
      <div className='mb-6'>
        <Input
          ref={passInputRef}
          type={passInputType}
          placeholder='Пароль'
          icon='EditIcon'
          name='password'
          value={passwordValue}
          onChange={e => onChangeHandler(e, setPasswordValue)}
          onIconClick={() => passOnIconClickHandler(passInputRef)}
          onBlur={e => passOnBlurHandler(e)}
          disabled
        />
      </div>
      {isChange && (
        <div className={styles['button-container']}>
          <Button
            type='secondary'
            htmlType='reset'
            onClick={e => cancelHandler(e)}
          >
            Отмена
          </Button>
          <Button type='primary' htmlType='submit'>
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}
