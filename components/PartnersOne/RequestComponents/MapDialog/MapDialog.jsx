import React, { useEffect, useRef, useState } from 'react'
import {
  Dialog,
  DialogContent,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material'
import { useForm, Controller, useWatch } from 'react-hook-form'
import cls from './MapDialog.module.scss'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import { apikey, mapDefaults } from '../../../../utils/yandex'
import { Margin } from '@mui/icons-material'
import { regions } from '../../../../utils/options'
import { inputText } from '../../../../mock/menu'
import { useRouter } from 'next/router'
import { CanceledIcon } from '../../../Icons'

const MapDialog = ({
  open,
  onClose,
  onSave,
  getParentValues,
  setParentValue,
}) => {
  const [placemarkGeometry, setPlacemarkGeometry] = useState([])
  const [data, setData] = useState(null)
  const yandexMap = useRef(null)
  const { locale } = useRouter()
  const { handleSubmit, control, setValue, reset, } = useForm({
    defaultValues: {
      region: "Ташкент",
    }
  })

  const country = useWatch({ control, name: "country" })
  const region = useWatch({ control, name: "region" })
  const description = useWatch({ control, name: "description" })

  useEffect(() => {
    const { country, description, region } = getParentValues() || {}

    if (open && country && description) {
      setValue('country', country)
      setValue('description', description)
      setValue('region', region)
    }
  }, [open, setValue, getParentValues])

  const onSubmit = (data, event) => {
    const { country, description, region } = data || {}
    setParentValue('country', country)
    setParentValue('description', description)
    setParentValue('region', region)
    setParentValue("location_link", data?.location_link)
    onSave()
  }

  function getAddress(ymap, e) {
    ymap.api.geocode(e.get('coords')).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0)
      setValue("country", firstGeoObject.getAddressLine())
    })
  }

  const setMapRef = (e) => {
    let location = e.get('coords')
    setData((old) => ({
      ...old,
      lat: location[1],
      long: location[0],
    }))
    setPlacemarkGeometry(e.get('coords'))
    const baseUrl = 'https://yandex.ru/maps/?';
    const queryParams = new URLSearchParams({
      ll: `${location[1]},${location[0]}`,
      pt: `${location[1]},${location[0]},pm2rdm~${location[1]},${location[0]}`,
      z: '12'
    });
    getAddress(yandexMap.current.ymaps, e)
    setValue("location_link", `${baseUrl}${queryParams}`)
  }


  const handleClose = () => {
    onClose()
    reset()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='md'
      fullWidth
      className={cls.dialogM}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '30px',
        },
      }}
      id='map_dialog'
    >
      <DialogContent className={cls.dialogContent}>
        <Button
          onClick={handleClose}
          className={cls.cancel}
        >
          <CanceledIcon />
        </Button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cls.contentWrapper}>
            <div className={cls.dialogHeader}>Добавить адрес</div>


            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>

              <Controller
                name='country'
                control={control}
                defaultValue=''
                // rules={{ required: inputText[locale].required }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label='Город, улица и дом'
                    size='small'
                    disabled
                    error={error}
                    style={{
                      marginBottom: "86px"
                    }}
                    InputProps={{ sx: { borderRadius: '10px' } }}
                    helperText={error ? (error?.message ?? ' ') : null}
                    FormHelperTextProps={{
                      className: cls.helperText
                    }}
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} size='small'>
              <InputLabel id='region-label'>Регион</InputLabel>
              <Controller
                name='region'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <Select
                    labelId='region-label'
                    id='region'
                    // defaultValue={"tashkent"}
                    {...field}
                    className={cls.selectBox}
                    label='Регион'
                    sx={{ borderRadius: '10px' }}
                  >
                    {regions.map((el) => (
                      <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>

            <Controller
              name='description'
              control={control}
              defaultValue=''
              rules={{ required: inputText[locale].required }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  id='description'
                  label='Комментарий'
                  size='small'
                  error={error}
                  InputProps={{ sx: { borderRadius: '10px' } }}
                  helperText={error ? (error?.message ?? ' ') : null}
                  FormHelperTextProps={{
                    className: cls.helperText
                  }}
                />
              )}
            />

            <Button
              type='submit'
              variant='outlined'
              disableElevation
              style={{
                background: "#00704A",
                color: "#fff"
              }}
              className={cls.saveButton}
              color='primary'
            >
              Сохранить
            </Button>
          </div>
        </form>

        <div className={cls.mapSection}>
          <YMaps
            ref={yandexMap}
            query={{
              apikey: apikey,
              lang: 'ru_RU',
              load: 'package.full',
            }}
          >
            <Map
              width='100%'
              height='100%'
              borderRadius='40%'
              defaultState={mapDefaults}
              state={
                data ? { center: [data?.long, data?.lat], zoom: 16 } : mapDefaults
              }
              onClick={setMapRef}
            >
              {/* Render Placemark based on form data */}
              {/* <Placemark geometry={[data?.long, data?.lat]} /> */}
              {placemarkGeometry.length ? (
                <Placemark geometry={[data?.long, data?.lat]} />
              ) : (
                <></>
              )}
            </Map>
          </YMaps>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MapDialog
