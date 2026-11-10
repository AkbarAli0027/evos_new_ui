import React from 'react'
import cls from './FullButtonGrey.module.scss'

function FullButtonGrey(props) {
  return (
    <button className={cls.button} {...props}>
      {props.text}
    </button>
  )
}

export default FullButtonGrey
