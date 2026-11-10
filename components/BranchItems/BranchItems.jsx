import React from 'react'
import { Box, Typography } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import Image from 'next/image'
import cls from './BranchesItems.module.scss'
import { ArrowIcon } from '../Icons'
import Link from 'next/link'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { formatWorkingHours } from '../../utils/formatWorkingHours'
import { fontGrid } from '@mui/material/styles/cssUtils'

export default function BranchItems({ active, branches }) {
  const { locale } = useRouter()

  return (
    <div className={` ${cls.root} ${active && cls.active}`}>
      {branches?.data?.map((el, ind) => (
        <Box
          display='flex'
          key={el.id}
          justifyContent='space-between'
          className={cls.marginVertical}
        >
          <Box style={{ cursor: 'pointer' }} className={cls.boxWidth}>
            <Link href={`/branches/${el?.id}`} passHref>
              <div className={cls.box}>
                <CardWrapper>
                  <Box display='flex'>
                    <Box display='flex' className={cls.branchBox}>
                      <div className={cls.imageBox}>
                        <Image
                          loader={() =>
                            `https://cp.ectn.uz/files/branches/${el.id}.png`
                          }
                          src={`https://cp.ectn.uz/files/branches/${el.id}.png`}
                          alt={el.title}
                          width={450}
                          height={327}
                          unoptimized={true}
                          placeholder='blur'
                          blurDataURL={`https://cp.ectn.uz/files/branches/${el.id}.png`}
                        />
                      </div>
                      <Box
                        display='flex'
                        flexDirection='column'
                        flexWrap='nowrap'
                        sx={{
                          marginLeft: 3,
                          '@media (max-width: 576px)': { marginLeft: 0 },
                        }}
                      >
                        <Typography
                          variant={`h6`}
                          color={`black`}
                          sx={{ marginBottom: '8px' }}
                          className={cls.title}
                        >
                          {
                            el?.details?.find(
                              (item) => item?.language === locale
                            )?.title
                          }
                        </Typography>
                        <Typography
                          variant={`h14`}
                          sx={{ maxWidth: '250px' }}
                          className={cls.text}
                        >
                          {el.address}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={cls.workingHoursBox} flexBasis='30%'>
                      <Box
                        display='flex'
                        mt={2}
                        flexDirection='column'
                        alignItems='flex-start'
                        justifyContent='flex-start'
                        marginLeft='16px'
                      >
                        <Typography
                          variant={`h15`}
                          sx={{ marginBottom: '8px' }}
                        >
                          {menu[locale].workingHours}
                        </Typography>
                        <Typography>
                          {formatWorkingHours(
                            el.details[1]?.work_time_from,
                            el.details[1]?.work_time_to
                          )}
                        </Typography>
                        {/* BETA KOD TEST */}
                        
                      </Box>
                    </Box>
                    <div className={cls.icon}>
                      <ArrowIcon />
                    </div>
                  </Box>
                </CardWrapper>
              </div>
            </Link>
          </Box>
        </Box>
      ))}
    </div>
  )
}
