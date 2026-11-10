import React from 'react'
import { Typography, Button, Grid, IconButton, Dialog, DialogContent, Box } from '@mui/material'
import Image from 'next/image'
import { numberToPrice } from '../../utils/numberToPrice'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCartAction,
  reduceCartItemQuantityAction,
  removeFromCartAction,
} from '../../store/actions/cartActions/cartActions'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { MinusIcon, PlusIcon } from '../Icons'
import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
import dynamicImageLink from '../../utils/dynamicImageLink'
import cls from './ProductInfo.module.scss'

function ProductInfo({ data, open, handleClose }) {
  const dispatch = useDispatch()
  const { locale } = useRouter()
  const { cartItems } = useSelector((state) => state.cart)
  const { currentAddress } = useSelector((state) => state.address)

  const cartItem = cartItems && data?.id ? cartItems.find((item) => item.id === data.id) : null
  const openSansFont = '"Open Sans", sans-serif'

  if (!data) return null

  const addToCart = (event) => {
    if (currentAddress) {
      const itemToCart = { ...data, quantity: 1 }
      addToCartWithAnimation(event, itemToCart, dispatch, addToCartAction)
    } else {
      dispatch(setOpenAddress())
    }
  }

  const handleSubtract = (e) => {
    e.stopPropagation()
    if (cartItem?.quantity !== 1) {
      dispatch(reduceCartItemQuantityAction(data))
    } else {
      dispatch(removeFromCartAction(data))
    }
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    dispatch(addToCartAction(data))
  }

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="md" 
      fullWidth
      scroll="body"
      PaperProps={{
        style: { borderRadius: '20px', padding: '10px' }
      }}
    >
      <Box sx={{ position: 'absolute', right: 15, top: 15, zIndex: 10 }}>
        <IconButton onClick={handleClose}>
          <CloseIconEffect />
        </IconButton>
      </Box>

      <DialogContent>
        <Grid container spacing={3} alignItems="center">
          {/* CHAP TOMON - RASM */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ position: 'relative', width: '100%', borderRadius: '15px', overflow: 'hidden' }}>
              <Image
                loader={() => dynamicImageLink(data.dlvimg)}
                src={dynamicImageLink(data.dlvimg)}
                alt={data.title}
                width={500}
                height={400}
                layout="responsive"
                objectFit="contain"
                unoptimized
              />
            </Box>
          </Grid>

          {/* O'NG TOMON - MA'LUMOT */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ fontFamily: openSansFont, fontWeight: 800, fontSize: '28px', color: '#000' }}>
                {data.title}
              </Typography>

              <Typography 
                sx={{ fontFamily: openSansFont, color: '#666', fontSize: '15px' }}
                dangerouslySetInnerHTML={{ __html: data.desc }} 
              />

              {!!cartItem && (
                <Typography sx={{ color: '#007855', fontWeight: 700, fontSize: '14px' }}>
                  ✓ {menu[locale].addedToCart}
                </Typography>
              )}

              <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 800, fontSize: '22px', color: '#000' }}>
                  {numberToPrice(data.dprice)}
                </Typography>

                <Box sx={{ minWidth: '140px' }}>
                  {!!cartItem ? (
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      height: '45px',
                      border: '2px solid #007855',
                      borderRadius: '25px',
                    }}>
                      <IconButton onClick={handleSubtract} size="small" sx={{ color: '#007855' }}>
                        <MinusIcon />
                      </IconButton>
                      <Typography sx={{ fontWeight: 700, fontSize: '18px', color: '#007855' }}>
                        {cartItem.quantity}
                      </Typography>
                      <IconButton onClick={handleAdd} size="small" sx={{ color: '#007855' }}>
                        <PlusIcon />
                      </IconButton>
                    </Box>
                  ) : (
                    <Button
                      fullWidth
                      onClick={addToCart}
                      sx={{
                        height: '45px',
                        bgcolor: '#007855',
                        color: '#fff',
                        borderRadius: '25px',
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#005f43' }
                      }}
                    >
                      {menu[locale].addToCart}
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ProductInfo