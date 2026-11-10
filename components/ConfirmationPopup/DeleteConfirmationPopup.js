import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Box,
} from '@mui/material'
import { useRouter } from 'next/router'
import { menu, btnText } from '../../mock/menu'
import { makeStyles } from '@mui/styles'
import FullButton from '../FullButton/FullButton'
import FullButtonGrey from '../FullButton/FullButtonGrey'
import { shallowEqual, useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0',
  },
}))

export default function DeletePopup({
  open,
  onClose,
  clearProduct,
  selectedItem,
}) {
  const { locale } = useRouter()
  const classes = useStyles()

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        classes={{ paper: classes.paper }}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
      >
        <Box
          sx={{
            margin: 4,
            '@media (max-width: 800px)': {
              margin: 2,
            },
          }}
        >
          <Box sx={{ paddingTop: 0 }}>
            <Typography variant={`h1`} sx={{ paddingBottom: 5 }}>
              {menu[locale].clearProduct}
            </Typography>
            <DialogContent
              sx={{
                padding: 0,
                paddingBottom: 5,
                maxWidth: 330,
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              <Typography variant='h3' textAlign='left'>
                {menu[locale].areYouSureClearProduct}
              </Typography>
            </DialogContent>
            <DialogActions
              disableSpacing
              sx={{
                padding: 0,
                display: 'flex',
                '@media (max-width: 800px)': {
                  display: 'block',
                },
              }}
            >
              <FullButtonGrey
                text={btnText[locale].no}
                onClick={() => onClose()}
              />
              <Box
                sx={{
                  '@media (min-width: 800px)': {
                    minWidth: '16px',
                  },
                }}
              />
              <FullButton
                text={btnText[locale].clear}
                onClick={() => clearProduct(selectedItem)}
              />
            </DialogActions>
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}
