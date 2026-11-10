import { Box, Container } from '@mui/material'
import cls from './PoliticsInfo.module.scss'
import strapiTranslater from '../../utils/strapiTranslater'
import { useRouter } from 'next/router'

const PoliticsInfo = ({ data }) => {
  const { locale } = useRouter()

  return (
    <Box id='boxRoot'>
      <Container className={cls.container} maxWidth='xl'>
        <div
          className={cls.description}
          dangerouslySetInnerHTML={{
            __html:  locale == `ru` ?  data?.offert : locale === `uz` ? data?.offert_uz : data?.offert_en ,
          }}
        />
      </Container>
    </Box>
  )
}

export default PoliticsInfo
