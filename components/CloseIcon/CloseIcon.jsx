import React from 'react'
import { CloseIcon } from '../Icons'
import cls from './CloseIcon.module.scss'

function CloseIconEffect(props) {
  return (
    <div className={cls.icon} {...props}>
      <CloseIcon />
    </div>
  )
}

export default CloseIconEffect
