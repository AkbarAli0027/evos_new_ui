import React, { useRef } from 'react'
import { ButtonBase } from '@mui/material'
import cls from './ArrowButton.module.scss'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

function ArrowButton({ display = '', justify = '', sliderRef }) {
  return (
    <>
      <div
        className={cls.arrowBtns}
        style={{ display: display, justifyContent: justify }}
      >
        <ButtonBase
          className={cls.prevBtn}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIos />
        </ButtonBase>
        <ButtonBase
          className={cls.nextBtn}
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIos />
        </ButtonBase>
      </div>
    </>
  )
}

export default ArrowButton
