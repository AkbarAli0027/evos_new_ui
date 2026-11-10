import { useEffect, useState } from 'react'
import cls from './Input.module.scss'

export default function AddressInput(props) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    if (props.required === '') {
      setValue(true)
    } else {
      setValue(false)
    }
  }, [props.required])

  return (
    <input
      type='text'
      className={cls.input}
      style={
        props.error
          ? { borderColor: 'red' }
          : value
          ? { borderColor: 'red' }
          : {}
      }
      {...props}
    />
  )
}
