import React from 'react'
import cls from './FullButton.module.scss'
import { CircularProgress } from '@mui/material'

function FullButton(props) {
  return props.loading ? (
    <button className={cls.button} {...props}>
      <CircularProgress color='inherit' size={18} />
    </button>
  ) : (
    <a className={cls.link} href='#Хиты-продаж'>
      <button className={cls.button} {...props}>
        {props.text}
      </button>
    </a>
  )
}

export default FullButton
