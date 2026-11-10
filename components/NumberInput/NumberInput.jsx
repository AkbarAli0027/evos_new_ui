import React from 'react'
import InputMask from 'react-input-mask'

export default function NumberInput(props) {
  return (
    <InputMask
      mask={`999999`}
      maskChar={null}
      style={props.error ? { borderColor: 'red' } : {}}
      {...props}
    />
  )
}
