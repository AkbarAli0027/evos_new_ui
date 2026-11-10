import { createTheme, ThemeProvider } from '@mui/material'
import PromotionBanner from './components/PromotionBanner'
import PromotionFAQ from './components/PromotionFAQ'
import PromotionFooter from './components/PromotionFooter'
import PromotionGiveaway from './components/PromotionGiveaway'
import PromotionGiveawayGraph from './components/PromotionGiveawayGraph'
import PromotionPartners from './components/PromotionPartners'
import PromotionPrizes from './components/PromotionPrizes'
import PromotionRegister from './components/PromotionRegister'
import styles from './styles.module.scss'
import { deepmerge } from '@mui/utils'
import lightMode from '../../styles/theme/theme'
import PromotionLinks from './components/PromotionLinks'

export default function Promotion2025() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter',
    },
  })

  const merged = createTheme(deepmerge(lightMode, theme))

  return (
    <ThemeProvider theme={merged}>
      <div className={styles.root} style={{ fontFamily: 'Inter' }}>
        <PromotionBanner />
        <PromotionRegister />
        <PromotionLinks />
        <PromotionGiveaway />
        <PromotionGiveawayGraph />
        <PromotionPrizes />
        <PromotionPartners />
        <PromotionLinks />
        <PromotionFAQ />
        <PromotionFooter />
      </div>
    </ThemeProvider>
  )
}
