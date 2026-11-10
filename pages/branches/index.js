import React from 'react'
import BranchMain from '../../components/BranchMainPage/BranchMain'
import SEO from '../../components/seo'
import { fetchMultipleUrls } from '../../utils/fetchMultipleUrls'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData'
import { useRouter } from 'next/router'

function branches({ branches }) {
  const { locale } = useRouter()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.branch?.title}
        description={metaData[locale]?.branch?.description}
        keywords={metaData[locale]?.branch?.keywords}
      />
      <BranchMain branches={branches} />
    </motion.div>
  )
}

export default branches

export async function getServerSideProps() {
  const [branches] = await fetchMultipleUrls([
    {
      version: 2,
      endpoint: '/service/branch-list',
    },
  ])

  return {
    props: {
      branches,
    },
  }
}
