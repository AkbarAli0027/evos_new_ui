import React, { useRef } from 'react'
import { Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import cls from './HeroSection.module.scss'
import { useProgressiveImage } from '../../utils/useProgressiveImage'

const source = '/images/lavash.png'
const placeholder = ''

export default function HeroSection() {
  const ref = useRef()
  const loaded = useProgressiveImage(source)

  const handleClick = () => {
    if (!loaded) return
    const subtitle = document.getElementById('top-subtitle')
    const hand = document.getElementById('hand')
    const bot = document.getElementById('bot')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const element = ref.current
    if (element.className.includes('forward')) {
      element.className = 'led backward'
      setTimeout(() => {
        subtitle.classList.remove('hide')
        hand.classList.remove('hide')
      }, 1000)
      bot.classList.add('hide')
      left.classList.add('hide')
      right.classList.add('hide')
    } else {
      element.className = 'led forward'
      setTimeout(() => {
        subtitle.classList.add('hide')
        bot.classList.remove('hide')
        left.classList.remove('hide')
        right.classList.remove('hide')
      }, 800)
      hand.classList.add('hide')
    }
  }
  return (
    <div className={cls.root}>
      <div className={cls.background} />
      <div className={cls.container}>
        <div className={cls.topTitle}>
          <Typography variant='h1' color='inherit'>
            Первый национальный правильный фаст-фуд
          </Typography>
        </div>
        <div className={cls.topSubtitle} id='top-subtitle'>
          {loaded && (
            <Typography color='inherit'>
              Кликни на лаваш - раскрой состав
            </Typography>
          )}
        </div>

        <div className={`${cls.left} hide`} id='left'>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title=' Наш соус был разработан по специальному рецепту лучших мастеров
            нашей страны и дарит особый незабываемый вкус нашей продукции.'
            >
              <div className={cls.bomTitle}>
                <span>Соус </span>
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title='Мы используем только свежие чипсы высшего качества для наших
            продуктов. Наши чипсы делаются из отборных сортов картофеля и были
            выращены натуральным путем.'
            >
              <div className={cls.bomTitle}>
                <span>Чипсы </span>
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title='Тесто нашего лаваша особенное, оно самое лучшее. Это Yupqa Lavash.
            Которое изготавливается эксклюзивно для продукции ее легко отличить
            из-за ее тонкости и нежности.'
            >
              <div className={cls.bomTitle}>
                <span>Тесто лаваша </span>
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
        </div>
        <div
          className='led'
          ref={ref}
          onClick={handleClick}
          style={{ backgroundImage: `url(${loaded || placeholder})` }}
        />
        {loaded && (
          <div className={cls.handAnime} onClick={handleClick} id='hand' />
        )}
        <div className={`${cls.handIcon} hide`} onClick={handleClick} id='bot'>
          <img src='/images/bot.png' alt='hand' />
        </div>
        <div className={`${cls.right} hide`} id='right'>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title='Наши клиенты заслуживают самого лучшего. Из-за этого мы выбирает
            только свежий и самый вкусный сыр для продуктов компании Evos.'
            >
              <div className={cls.bomTitle}>
                <InfoIcon />
                <span> Сыр</span>
              </div>
            </Tooltip>
          </div>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title='Наше мясо производится из молодых бычков которые были выращены без
            гормонов и антибиотиков. Из-за этого мясо нашей продукции отличается
            своей сочностью, нежностью и насыщенным вкусом.'
            >
              <div className={cls.bomTitle}>
                <InfoIcon />
                <span> Мясо</span>
              </div>
            </Tooltip>
          </div>
          <div className={cls.bom}>
            <Tooltip
              enterTouchDelay={0}
              arrow
              title=' Шеф повара и технологи Evos выбирают самые свежие и натуральные
            овощи, которые являются основным фактором сочности наших продуктов
            Соус'
            >
              <div className={cls.bomTitle}>
                <InfoIcon />
                <span> Огурцы и помидоры</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
