import * as React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PropTypes from 'prop-types'
import CloseIcon from '../CloseIcon/CloseIcon'
import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'
import cls from './SimpleDialog.module.scss'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '4px',
  },
  container: {
    alignItems: 'flex-start',
    marginTop: '70px',
  },
}))

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props
  const classes = useStyles(props)
  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value) => {
    onClose(value)
  }

  const regions = ['Toshkent', 'Andijan', 'Khorezm', 'Kashkadarya']

  return (
    <Box width='100%'>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{ margin: '0' }}
        fullWidth
        maxWidth='sm'
        classes={{ paper: classes.paper, container: classes.container }}
        BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.8)' } }}
      >
        <Box padding='24px' className={cls.wrapper}>
          <DialogTitle className={cls.title}>
            <CloseIcon onClick={handleClose} />
            <Typography variant={`h1`} sx={{ marginBottom: '24px' }}>
              Выберите город
            </Typography>
          </DialogTitle>
          <div className={cls.box}>
            {regions.map((el, ind) => (
              <Box key={ind}>
                <Box
                  sx={{ padding: '16px', borderBottom: '1.5px solid #F6F8F9' }}
                  className={cls.regionElement}
                  onClick={() => handleListItemClick(el)}
                >
                  {el}
                </Box>
              </Box>
            ))}
          </div>
        </Box>
      </Dialog>
    </Box>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}
