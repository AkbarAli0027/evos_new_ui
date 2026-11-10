import React from 'react'
import { ArrowIcon } from '../Icons'
import cls from './ArrowIcon.module.scss'

function ArrowIconEffect(props) {
  return (
    <div className={cls.icon} {...props}>
        <ArrowIcon />
    </div>
  )
}

export default ArrowIconEffect