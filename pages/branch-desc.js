import React from 'react'
import BranchDesc from '../components/BranchDesc/BranchDesc'
import { Box, Container } from '@mui/material'
import SEO from '../components/seo'
import { useRouter } from 'next/router'
import { metaData } from '../mock/metaData'

function branchDescription() {
  const { locale } = useRouter()

  return (
    <>
      <SEO
        title={metaData[locale].branch.title}
        description={metaData[locale].branch.description}
        keywords={metaData[locale].branch.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <BranchDesc />
        </Container>
      </Box>
    </>
  )
}

export default branchDescription
