import React, { useState } from 'react'
import cls from './Region.module.scss'
import location from '../../public/images/svg/address.svg'
import SimpleDialog from '../SimpleDialog/SimpleDialog'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'

function Region() {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const { locale } = useRouter()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div className={cls.root}>
      <form className={cls.form}>
        <div className={cls.logo}>
          <Image src={location} width={24} height={24} alt='region' />
        </div>
        <input
          className={cls.input}
          onClick={handleClickOpen}
          value={selectedValue}
          placeholder={menu[locale].yourCity}
          readOnly
        />
      </form>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

export default Region
