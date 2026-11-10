import React from 'react'
import cls from './SimpleButton.module.scss'

function SimpleButton(props) {
  const {active} = props
  return (
     <button className={`${cls.button} ${active && cls.active}`} {...props}>{props.text}</button>
  )
}

export default SimpleButton