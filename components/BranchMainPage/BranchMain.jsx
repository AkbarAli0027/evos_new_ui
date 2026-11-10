import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import cls from './BranchMain.module.scss'
import SimpleButton from '../SimpleButton/SimpleButton'
import BranchItems from '../BranchItems/BranchItems.jsx'
import BranchesMap from '../BranchesMap/BranchesMap'
import { btnText, menu } from '../../mock/menu'
import { useRouter } from 'next/router'

export default function BranchMain({ branches }) {
  const [mapState, setMapState] = useState(0)
  const { locale } = useRouter()


  const handleMap = () => {
    setMapState(1)
  }
  const handleBraches = () => {
    setMapState(0)
  }
  return (
    <>
      <Box className={cls.wrapper}>
        <Container maxWidth='xl'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant={`h1`} color={`black`} className={cls.title}>
              {menu[locale].branches}
            </Typography>
            <Box className={cls.btnWrapper}>
              <SimpleButton
                text={btnText[locale].list}
                active={mapState === 0}
                onClick={handleBraches}
              />
              <SimpleButton
                text={btnText[locale].map}
                active={mapState === 1}
                onClick={handleMap}
              />
            </Box>
          </Box>
          {mapState === 1 ? (
            <BranchesMap branches={branches} />
          ) : (
            <BranchItems branches={branches} />
          )}
        </Container>
      </Box>
    </>
  )
}
