import { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export default function FormInput({
	name,
	type,
	placeholder,
	value,
	setValue,
	icon = false,
}) {
	const [inputType, setInputType] = useState({
		icon: 'ShowIcon',
		type: 'password',
	})

	const onIconClickHandler = setFn => {
		setFn(prev => {
			return {
				icon: prev.type === 'password' ? 'HideIcon' : 'ShowIcon',
				type: prev.type === 'password' ? 'text' : 'password',
			}
		})
	}

	const inputOnChangeHandler = (e, setFn) => {
		setFn(e.target.value)
	}

	return (
		<div className='mb-6'>
			<Input
				name={name}
				type={type === 'password' ? inputType.type : type}
				placeholder={placeholder}
				value={value}
				onChange={e => inputOnChangeHandler(e, setValue)}
				icon={icon ? inputType.icon : undefined}
				onIconClick={() => onIconClickHandler(setInputType)}
			/>
		</div>
	)
}

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['email', 'password', 'text']).isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	icon: PropTypes.bool,
}
