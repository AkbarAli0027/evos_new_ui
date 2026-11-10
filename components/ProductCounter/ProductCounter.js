import React from 'react'
import cls from './ProductCounter.module.scss'
import { MinusIcon, PlusIcon } from '../Icons'
import { IconButton, Typography } from '@mui/material'

function ProductCounter({ count, setCount, data, ...props }) {
  const handleSubtract = () => {
    setCount((num) => (num !== 1 ? --num : 1))
  }
  const handleAdd = () => {
    setCount((num) => ++num)
  }

  return (
    <div className={cls.root} {...props}>
      <IconButton onClick={handleSubtract} sx={{ padding: 0.5 }}>
        <MinusIcon />
      </IconButton>
      <span>
        <Typography variant={`h4`}>{count}</Typography>
      </span>
      <IconButton onClick={handleAdd} sx={{ padding: 0.5 }}>
        <PlusIcon />
      </IconButton>
    </div>
  )
}

export default ProductCounter
