import React, { useState } from 'react'
import cls from './StickyNotice.module.scss'
import { Box, Container } from '@mui/material'
import { NoticeCloseIcon, WarningIcon } from '../Icons'

export default function StickyNotice({ text, visibleDefault = true }) {
  const [visible, setVisible] = useState(visibleDefault)

  const onClose = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={cls.stickyWrap} role='status'>
      <Container maxWidth='xl' className={cls.inner}>
        <Box className={cls.noticeContent}>
          <WarningIcon />
          <p className={cls.text}>{text}</p>
          <button
            aria-label='close notice'
            className={cls.closeBtn}
            onClick={onClose}
          >
            <NoticeCloseIcon />
          </button>
        </Box>
      </Container>
    </div>
  )
}
