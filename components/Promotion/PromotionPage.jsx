import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material'
import cls from './PromotionPage.module.scss'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { DownIcon, TopIcon } from '../Icons'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import OfertRu from './ofert/OfertRu'
import OfertUz from './ofert/OfertUz'

export default function PromotionPage() {
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const { locale } = useRouter()
  return (
    <>
      <div className={cls.root}>
        <div className={cls.topIcon}>
          <img
            className={cls.imgJuniper}
            src='/images/svg/allTop.svg'
            alt='juniper'
          />

          <img
            className={cls.imgJuniperMobile}
            src='/images/svg/happy2.svg'
            alt='juniper'
          />
        </div>
        <Container sx={`xl`}>
          <section>
            <Grid container spacing={2}>
              <Grid
                style={{ marginTop: '150px' }}
                sx={{
                  '@media (max-width: 500px)': {
                    marginTop: '120px !important',
                  },
                }}
                item
                xs={12}
                md={8}
              >
                {locale == `uz` ? (
                  <h1 className={cls.titleComponent}>
                    {menu[locale].sectonTitle} <br />
                    <span className={cls.signColor}>
                      {menu[locale].sectonTitle1}
                    </span>
                  </h1>
                ) : (
                  <h1 className={cls.titleComponent}>
                    <span className={cls.signColor}>
                      {menu[locale].sectonTitle1}
                    </span>
                    <br />
                    {menu[locale].sectonTitle}
                  </h1>
                )}
                <p className={cls.achievement}>{menu[locale].sectionDeck1}</p>

                <p className={cls.descriptionText}>
                  {menu[locale].sectionDeck2}
                </p>
                <p className={cls.descriptionText}>
                  {menu[locale].sectionDeck3}
                </p>
                <p className={cls.descriptionText}>
                  {menu[locale].sectionDeck4}
                </p>
              </Grid>
              <Grid style={{ marginTop: '150px' }} xs={0} md={4}>
                <div className={cls.qrCodeWrap}>
                  <a href='https://t.me/evospromo_bot'>
                    <div className={cls.qrHeader}>
                      <img src='/images/qrCode.png' alt='qrcode' />
                    </div>
                    <div className={cls.qrBody}>
                      <Typography
                        className={cls.bodyTtile}
                        dangerouslySetInnerHTML={{
                          __html: `${menu[locale].linkbtn}`,
                        }}
                      ></Typography>
                      <a href='https://t.me/evospromo_bot' className={cls.link}>
                        https://t.me/evospromo_bot
                      </a>
                    </div>
                  </a>
                </div>
              </Grid>
            </Grid>
          </section>
        </Container>
        <div>
          <img
            className={cls.carIm}
            src='/images/svg/carall.svg'
            alt='carall'
          />
        </div>
      </div>

      <section className={cls.section2}>
        <div className={cls.participation}>
          <img
            className={cls.ellipseImg}
            src='/images/svg/ellipse.svg'
            alt='ellipse'
          />
        </div>
        <div className={cls.contentWrap}>
          <Container sx={`xl`}>
            <div className={cls.text}>
              <p>{menu[locale].sectionDeck5}</p>
            </div>

            <h1 id='КАК УЧАСТВОВАТЬ' className={cls.titleComponent}>
              <span className={cls.signColor}>{menu[locale].numberTitle}</span>
            </h1>
            <Box className={cls.box}>
              <Box display='flex' alignItems='center'>
                <h1 className={cls.number}>1</h1>
                <p className={cls.achievement}>{menu[locale].numberTitle1}</p>
              </Box>
              <Box display='flex' alignItems='center'>
                <h1 className={cls.number}>2</h1>
                <p className={cls.achievement}>{menu[locale].numberTitle2}</p>
              </Box>
              <Box display='flex' alignItems='center'>
                <h1 className={cls.number}>3</h1>
                <p className={cls.achievement}>{menu[locale].numberTitle3}</p>
              </Box>
              <Box display='flex' alignItems='center'>
                <h1 className={cls.number}>4</h1>
                <p
                  className={cls.achievement}
                  dangerouslySetInnerHTML={{
                    __html: `${menu[locale].numberTitle4}`,
                  }}
                ></p>
              </Box>
            </Box>
            <div className={cls.participationDesc}>
              <p>{menu[locale].yellovTitle}</p>
              <p>{menu[locale].yellovdesc}</p>
              <p>{menu[locale].yellovdesc2}</p>
              <p>{menu[locale].yellovdesc3}</p>
              <p>{menu[locale].yellovdesc4}</p>
            </div>
          </Container>
        </div>
        <div className={cls.leftImg}>
          <img
            className={cls.ellipseImg}
            src='/images/svg/happy3.svg'
            alt='ellipse'
          />
        </div>
      </section>

      <section className={cls.section3}>
        <div className={cls.section3WrapCon}>
          <Container sx={`xl`}>
            <div id='ВИДЫ СЮРПРИЗОВ' className={cls.section3Wrap}>
              <h1 className={cls.titleComponent}>
                <span className={cls.signColor}>
                  {menu[locale].giftTitle}
                  <br /> {menu[locale].giftTitle2}
                </span>
              </h1>

              <div className={cls.gridCon}>
                <div className={cls.gridItem}>
                  <h1 className={cls.gridItemTitle}>
                    {menu[locale].superGift}
                  </h1>
                  <p className={cls.achievement}>
                    {menu[locale].superGiftname}
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc1}
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc2}
                  </p>
                </div>

                <div className={cls.gridItem}>
                  <h1 className={cls.gridItemTitle}>
                    {menu[locale].superGift2}
                  </h1>
                  <p className={cls.achievement}></p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc3}
                  </p>
                </div>

                <div className={cls.gridItem}>
                  <h1 className={cls.gridItemTitle}>
                    {menu[locale].superGift3}
                  </h1>
                  <p className={cls.achievement}>
                    {menu[locale].superGiftname3} <br />
                    {menu[locale].superGiftname4}
                    <br />
                    {menu[locale].superGiftname5}
                    <br />
                    {menu[locale].superGiftname6} <br />
                    {menu[locale].superGiftname7} <br />
                    {menu[locale].superGiftname8} <br />
                    {menu[locale].superGiftname9} <br />
                    {menu[locale].superGiftname10} <br />
                    {menu[locale].superGiftname11} <br />
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc4}
                  </p>
                </div>

                <div className={cls.gridItem}>
                  <h1 className={cls.gridItemTitle}>
                    {menu[locale].superGift4}
                  </h1>
                  <p className={cls.achievement}>
                    {menu[locale].superGiftname12}
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc5}
                  </p>
                  <p className={cls.achievement}>
                    {menu[locale].superGiftname13}
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc6}
                  </p>
                  <p className={cls.achievement}>
                    {menu[locale].superGiftname14}
                  </p>
                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc7}
                  </p>

                  <p
                    style={{ color: '#FFE500' }}
                    className={cls.descriptionText}
                  >
                    {menu[locale].superGiftdesc8}
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <img
            className={cls.giftImg}
            src='/images/svg/gift.svg'
            alt='carall'
          />
          <img
            className={cls.carImg}
            src='/images/svg/megago2.svg'
            alt='carall'
          />
        </div>
      </section>
      <section className={cls.section4}>
        <div className={cls.section4Wrap}>
          <div className={cls.conpanyLogo}>
            <img src='/images/svg/realmes.svg' alt='realme' />
            <img src='/images/svg/uklons.svg' alt='uklon' />
            <img src='/images/svg/mark2.svg' alt='mark' />
            <img src='/images/svg/smarts.svg' alt='smarts' />
            <img src='/images/svg/pepsei.svg' alt='pepsi' />
            <img src='/images/svg/megogo.svg' alt='megogo' />
            <img src='/images/svg/denas.svg' alt='dena' />
          </div>

          <div className={cls.acardion}>
            <Box className={cls.carTextCon}>
              <img src='/images/svg/car3.svg' alt='car' />

              <Typography className={cls.carTitle}>
                {menu[locale].questionTitle} <br />
                {menu[locale].questionTitle2} <br />
                {menu[locale].questionTitle3} <br />
              </Typography>
            </Box>
            <Container sx={`xl`}>
              <Accordion
                style={{
                  boxShadow: 'none',
                  background: '#f6f8f9',
                }}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={<TopIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                  className={cls.accordionSummary}
                >
                  <Typography className={cls.acardionTitle}>
                    {menu[locale].questionName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionDetails}>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc1}
                  </Typography>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc2}
                  </Typography>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc3}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                style={{
                  boxShadow: 'none',
                  background: '#f6f8f9',
                }}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={<TopIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                  className={cls.accordionSummary}
                >
                  <Typography className={cls.acardionTitle}>
                    {menu[locale].questionName7}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionDetails}>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc7}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                style={{
                  boxShadow: 'none',
                  background: '#f6f8f9',
                }}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={<TopIcon />}
                  aria-controls='panel3a-content'
                  id='panel3a-header'
                  className={cls.accordionSummary}
                >
                  <Typography className={cls.acardionTitle}>
                    {menu[locale].questionName2}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionDetails}>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc4}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                style={{
                  boxShadow: 'none',
                  background: '#f6f8f9',
                }}
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  expandIcon={<TopIcon />}
                  aria-controls='panel4a-content'
                  id='panel4a-header'
                  className={cls.accordionSummary}
                >
                  <Typography className={cls.acardionTitle}>
                    {menu[locale].questionName3}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionDetails}>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc5}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                style={{
                  boxShadow: 'none',
                  background: '#f6f8f9',
                }}
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
              >
                <AccordionSummary
                  expandIcon={<TopIcon />}
                  focusVisible
                  aria-controls='panel5a-content'
                  id='panel5a-header'
                  className={cls.accordionSummary}
                >
                  <Typography className={cls.acardionTitle}>
                    {menu[locale].questionName4}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={cls.accordionDetails}>
                  <Typography className={cls.accordionText}>
                    {menu[locale].questionDesc6}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Container>
          </div>
        </div>
      </section>
      <section className={cls.section5}>
        <div id='ПРАВИЛА УЧАСТИЯ' className={cls.allWrap}>
          <Container>
            <Box className={cls.oferWrap}>
              <h1
                style={{ color: 'black', textAlign: 'center' }}
                className={cls.titleComponent}
              >
                {menu[locale].ofertTitle3}
              </h1>
              <p style={{ color: 'black' }} className={cls.achievement}>
                {menu[locale].ofertNewTitle}
              </p>

              <p style={{ color: 'black' }} className={cls.descriptionText}>
                {menu[locale].ofertNewDesc}
                <br />
                {menu[locale].ofertNewDesc2}
                <br />
                {menu[locale].ofertNewDesc3}
                <br />
                {menu[locale].ofertNewDesc4}
                <br />
                {menu[locale].ofertNewDesc5}
                Телефон: +998 93 512 0 512
              </p>
            </Box>
          </Container>

          {!open && (
            <button onClick={() => setOpen(true)}>
              {menu[locale].informationAll} <br />
              <DownIcon />
            </button>
          )}
        </div>

        {open && (
          <div className={cls.textWrap}>
            {locale === 'ru' ? <OfertRu cls={cls} /> : <OfertUz cls={cls} />}
          </div>
        )}
        <div className={cls.allClose}>
          {open && <button onClick={() => setOpen(false)}>ЗАКРЫТЬ</button>}
        </div>
      </section>
    </>
  )
}
