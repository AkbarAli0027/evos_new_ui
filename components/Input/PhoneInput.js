import React from 'react'
import cls from './Input.module.scss'
import InputMask from 'react-input-mask'

export default function InputPhone(props) {
  return (
    <InputMask
      mask={`+\\9\\9\\8 99 999 99 99`}
      maskChar={null}
      className={cls.input}
      style={props.error ? { borderColor: 'red' } : {}}
      {...props}
    />
  )
}
