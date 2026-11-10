import React from 'react'
import cls from './Counter.module.scss'
import { MinusIcon, PlusIcon } from '../Icons'
import { IconButton, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  addToCartAction,
  reduceCartItemQuantityAction,
} from '../../store/actions/cartActions/cartActions'

function Counter({ data, ...props }) {
  const dispatch = useDispatch()

  const handleSubtract = () => {
    if (data.quantity !== 1) {
      dispatch(reduceCartItemQuantityAction(data))
    }
  }
  const handleAdd = () => {
    dispatch(addToCartAction(data))
  }

  return (
    <div className={cls.root} {...props}>
      <IconButton onClick={handleSubtract} sx={{ padding: 0 }}>
        <MinusIcon />
      </IconButton>
      <span>
        <Typography variant={`h4`}>{data.quantity || 0}</Typography>
      </span>
      <IconButton onClick={handleAdd} sx={{ padding: 0 }}>
        <PlusIcon />
      </IconButton>
    </div>
  )
}

export default Counter
