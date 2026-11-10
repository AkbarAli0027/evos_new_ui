import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import cls from './Styles.module.scss'
import { ExpandIcon } from '../Icons'
import { useRouter } from 'next/router'

export default function KidsFAQ({ title, description, faq }) {
  const router = useRouter()
  return (
    <div className={cls.root}>
      <h3 className={cls.root__title}>{title}</h3>
      {description && <p className={cls.root__description}>{description}</p>}
      {faq?.map((item, index) => (
        <Accordion
          key={index}
          className={cls.root_accordion}
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderBottom: 'none',
            borderTop: '1px solid #CFCFCF',
            borderRadius: '0 !important',
            paddingTop: '6px',
            paddingBottom: '0',

            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            sx={{
              fontWeight: 700,
            }}
          >
            {item.country}
          </AccordionSummary>
          {item.details.map((el, idx) => (
            <AccordionDetails
              key={idx}
              sx={{
                borderBottom: '1px solid #CFCFCF',
                '&:last-of-type': {
                  borderBottom: 'none',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: {
                    xs: 'wrap',
                    md: 'nowrap',
                  },
                  width: {
                    xs: '100%',
                    md: '80%',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    cursor: 'pointer',
                    width: {
                      xs: '95%',
                      md: '70%',
                    },
                  }}
                  onClick={() => {
                    if (el?.branchId) {
                      router.push(`/branches/${el?.branchId}`)
                    }
                  }}
                >
                  <Typography color='black' width='50%'>
                    {el?.summary}
                  </Typography>
                  <Typography
                    color='black'
                    width='50%'
                    style={{
                      textDecoration: 'underline',
                    }}
                    dangerouslySetInnerHTML={{ __html: el?.content }}
                  />
                </Box>
                <Typography
                  width={{ xs: '100%', md: '50%' }}
                  marginLeft={'8px'}
                  color='black'
                >
                  {el?.days}
                </Typography>
              </Box>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  )
}
