import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import cls from './BlogDesc.module.scss'

function BlogDesc({ data }) {
  return (
    <Box>
      <Typography variant={`h1`} color={`black`} className={cls.title}>
        {data.title}
      </Typography>
      <Box
        width='100%'
        className={cls.paddingBox}
        sx={{ background: '#ffffff' }}
        display='flex'
        flexDirection='column'
      >
        <Image
          src={data.image}
          width={1184}
          height={454}
          alt={data.title}
          objectFit='cover'
        />
        <Box className={cls.marginBox} display='flex' flexDirection='column'>
          <Typography variant={`h14`}>{data.date}</Typography>
          <Typography
            variant={`h4`}
            className={cls.blogTitle}
            sx={{ marginBottom: '24px', marginTop: '4px' }}
          >
            {data.title}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Box>
      </Box>
    </Box>
  )
}

export default BlogDesc
