import React from 'react'
import cls from './Input.module.scss'

export default function Input(props) {
  return (
    <input
      type='text'
      className={cls.input}
      style={props.error ? { borderColor: 'red' } : {}}
      {...props}
    />
  )
}
