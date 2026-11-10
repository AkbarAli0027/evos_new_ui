import * as React from 'react'
import cls from './Accordion.module.scss'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/material'
import ParallaxMousemove from 'react-parallax-mousemove'
import { btnText, menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { accordion, accordion_uz } from '../../mock/accordion.js'

function CustomAccordion() {
  const [expanded, setExpanded] = React.useState(false)
  const { locale } = useRouter()
  const translatedData = locale === 'ru' ? accordion : accordion_uz

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const style = {
    bgLayerStyle: {
      position: 'absolute',
      height: '100%',
      transform: 'translate(-15%, 17%)',
    },
  }
  return (
    <>
      <ParallaxMousemove>
        <Box className={cls.wrapper}>
          <Typography variant={`h1`} color={`black`} className={cls.title}>
            {menu[locale].accordionTxt}
          </Typography>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.03,
              yFactor: 0.03,
              springSettings: {
                stiffness: 100,
                // damping: 30,
              },
            }}
          >
            <Box className={cls.animation_1}>
              <img src='../../images/shapes.png' alt='animated' />
            </Box>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: -0.03,
              yFactor: -0.03,
              springSettings: {
                stiffness: 100,
                // damping: 30,
              },
            }}
          >
            <Box className={cls.animation_2}>
              <img src='../../images/shapes-1.png' alt='animated' />
            </Box>
          </ParallaxMousemove.Layer>
          {translatedData.map((elem) => (
            <Accordion
              key={elem.id}
              expanded={expanded === `panel${elem.id}`}
              onChange={handleChange(`panel${elem.id}`)}
              className={cls.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id={elem.id}
                className={cls.accordionSummary}
              >
                <Typography variant='h3'>{elem.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div
                    className={cls.description}
                    dangerouslySetInnerHTML={{
                      __html: elem.description,
                    }}
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </ParallaxMousemove>
    </>
  )
}

export default CustomAccordion
