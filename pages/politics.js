import React from 'react'

import SEO from '../components/seo'
import { metaData } from '../mock/metaData'
import { useRouter } from 'next/router'
import PoliticsInfo from '../components/PoliticsInfo/PoliticsInfo'

export default function NewSingle({ data }) {
  const { locale } = useRouter()

  return (
    <>
      <SEO
        title={metaData[locale]?.about.title}
        description={metaData[locale]?.about.description}
        keywords={metaData[locale]?.about.keywords}
      />
      <PoliticsInfo data={data} />
    </>
  )
}
export async function getServerSideProps({ locale }) {
  const response = await fetch(process.env.BASE_URL_STRAPI + `/public-offert`)
  const data = await response.json()

  return {
    props: {
      data: data?.data?.attributes,
    },
  }
}
