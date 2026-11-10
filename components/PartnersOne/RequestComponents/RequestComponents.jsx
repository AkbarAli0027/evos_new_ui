import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ModeIcon from '@mui/icons-material/Mode'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import nookies, { parseCookies } from 'nookies'
import React, { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'
import cls from '../PartnersOne.module.scss'
import Hooks from './Hooks/useRequestForm'
import MapDialog from './MapDialog/MapDialog'
import InputField from './formFieldsConfig/InputField'
import formFieldsConfig from './formFieldsConfig/inputFieldConfig'
import { inputText } from '../../../mock/menu'
import { useRouter } from 'next/router'
import DeleteIcon from '@mui/icons-material/Delete';
import Compressor from 'compressorjs';
import { menu } from '../../../mock/menu'
import { requestV2 } from '../../../utils/axios'


const TitleOne = () => {
  const { locale } = useRouter()
  return <p className={cls.titleOne}>
    {menu[locale].applicationForAddition}
  </p>
}



const RequestLeft = () => {
  const [fileName, setFileName] = useState(null)
  const [file, setFile] = useState(null)
  const [fileArray, setFileArray] = useState([])
  const [mapValidation, setMapValidation] = useState(false)
  const cookies = parseCookies()
  const { locale } = useRouter()
  const formFieldsConfigVar = formFieldsConfig(locale)
  const { control, handleSubmit, setValue, getValues, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      applicant: 'физическое_лицо',
      object: "коммерческое_помещение",
      square: 0,
      rent: 0,
      floor: 0,
      sale_placement: 0
    }
  })
  const {
    activeButton,
    activeButton2,
    showAboutPerson,
    showAboutPerson1,
    showAboutPer,
    showAboutPer1,
    requestSent,
    selectedMapCoordinates,
    showMapModal,
    handleButtonClick,
    handleMapButtonClick,
    handleCloseMapModal,
    handleMapSave,
    handleSendRequest,
    setRequestSent
  } = Hooks()
  const { token } = nookies.get()




  const onSubmit = (data) => {
    if (country) {
      const formData = new FormData()
      // for (let i = 0; i < fileArray.length; i++) {
      //   formData.append("files.images", fileArray[i])

      // }
      fileArray.forEach((file, index) => {
        formData.append(`files.images[${index}]`, file);
      });

      // fileArray.forEach((file, index) => {
      //   const fileName = file.name || `file_${index}.jpg`;  // Ensure each file has a name
      //   formData.append(`files.images[${index}]`, file, fileName);
      // });



      formData.append('data', JSON.stringify({ ...data, floor: data.floor.toString(), rent: data.rent.toString(), sale_placement: data.sale_placement.toString(), INN: data.INN.toString(), square: data.square.toString() }))




      axios.post('https://admin.evos.uz/api/location-applications',
        formData
      )
        .then((res) => {
          reset({
            applicant: 'физическое_лицо',
            object: "коммерческое_помещение",
          })
          toast.success("Ваша заявка успешно отправлено")
          setFile(null)
          setFileName(null)
          setRequestSent(true)
          setFileArray([])
        })
        .catch((err) => {
          console.error(err)
          toast.error('Произошла ошибка, попробуйте позже')
        })
        .finally(() => {
        })

      requestV2.post('https://evsapi.ectn.uz/service/offers-create', formData).then(() => {
        reset({
          applicant: 'физическое_лицо',
          object: "коммерческое_помещение",
        })
        setFile(null)
        setFileName(null)
        setRequestSent(true)
        setFileArray([])
      }).catch((err) => {
        console.error(err)
        toast.error('Произошла ошибка, попробуйте позже')
      })
        .finally(() => {
        })

    }
  }

  const country = useWatch({ control, name: "country" })


  const multipleUpload = (event) => {
    const files = event.target.files
    const selectedFilesArray = Array.from(files);
    const compressedFilesArray = [];

    selectedFilesArray.forEach((file) => {
      new Compressor(file, {
        quality: 0.1,
        success(result) {
          const compressedFile = new File([result], file.name, { type: file.type });
          compressedFilesArray.push(compressedFile)
          if (fileArray?.length) {
            setFileArray([...fileArray, compressedFile])
          } else {
            setFileArray([...compressedFilesArray])

          }
        },
        error(err) {
          console.error(err.message);
        },
      });
    });
  }

  const renderInputFields = (fields) =>
    fields.map((field) => (
      <InputField required={showAboutPerson ? false : field.required}
        key={field.label} {...field} control={control} rules={field.rules} />
    ))

  return (
    <>
      <form
        className={cls.requestLeft}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={cls.requestPerson}>
          <p className={cls.requestText}>{inputText[locale].applicant}</p>
          <div className={cls.induvidualEntity}>
            <Button
              variant='outlined'
              type='button'
              className={
                activeButton === 'individual' ? cls.induvidualEntityActive : ''
              }
              onClick={() => {
                handleButtonClick('individual')
                setValue("applicant", "физическое_лицо")
              }}
            >
              {inputText[locale].indiv}
            </Button>
            <Button
              variant='outlined'
              type='button'
              className={
                activeButton === 'entity' ? cls.induvidualEntityActive : ''
              }
              onClick={() => {
                handleButtonClick('entity')
                setValue("applicant", "юридическое_лицо")
              }}
            >
              {inputText[locale].entity}
            </Button>
          </div>

          <div
            className={cls.aboutPerson}
            style={{ display: showAboutPerson ? 'flex' : 'none' }}
          >
            <InputField required={showAboutPerson} label={inputText[locale].fullname} placeholder="Азат" control={control} name={"name"} />
            {renderInputFields(formFieldsConfigVar.applicant)}
          </div>
          <div
            className={cls.aboutPerson1}
            style={{ display: showAboutPerson1 ? 'flex' : 'none' }}
          >
            {renderInputFields(formFieldsConfigVar.organization)}
          </div>
        </div>
        <div className={cls.requestPerson}>
          <p className={cls.requestText}>{inputText[locale].object}
          </p>
          <div className={cls.induvidualEntity}>
            <button
              type='button'
              className={
                activeButton2 === 'individual2'
                  ? cls.induvidualEntityActive
                  : ''
              }
              onClick={() => {
                handleButtonClick('individual2')
                setValue("object", "коммерческое_помещение")
              }}
            >
              {inputText[locale].commerce}
            </button>
            <Button
              variant='outlined'
              type='button'
              className={
                activeButton2 === 'entity2' ? cls.induvidualEntityActive : ''
              }
              onClick={() => {
                handleButtonClick('entity2')
                setValue("object", "земельный_участок")
              }}
            >
              {inputText[locale].land}
            </Button>
          </div>
          <Button
            variant='outlined'
            type='button'
            style={{ borderColor: !country ? "red" : "", color: !country ? "red" : "" }}
            className={cls.chooseMap}
            onClick={handleMapButtonClick}
          >
            {country ? country : inputText[locale].chooseFromMap} {country && <ModeIcon />}
          </Button>
          <p className={cls.orderText}>
            {inputText[locale].add}
          </p>
          <div
            className={cls.aboutPerson}
            style={{ display: showAboutPer ? 'flex' : 'none' }}
          >
            <InputField type="number" required={showAboutPer} label={inputText[locale].roomStage} rules={{ validate: (value) => showAboutPer ? parseFloat(value) >= 0 || "Введите положительное число" : null }} placeholder="1" control={control} name={"floor"} />
            {renderInputFields(formFieldsConfigVar.object)}
          </div>

          <div
            className={cls.aboutPerson1}
            style={{ display: showAboutPer1 ? 'flex' : 'none' }}
          >
            {renderInputFields(formFieldsConfigVar.land)}
          </div>
        </div>
        <div className={cls.requestPerson}>
          <p className={cls.requestText}> {inputText[locale].document}</p>
          <div className={cls.documentImport}>
            {fileArray.length ? <DeleteIcon onClick={() => setFileArray([])} /> : null}
            <p className={cls.importText}>
              {fileArray.length ?
                fileArray.map((item) => (
                  `${item?.name}, `
                ))
                : inputText[locale].nothingIsSelected}  <br />
              <label htmlFor='multiple' className={cls.selectFile}>{inputText[locale].choose}</label>
              <input
                multiple
                id='multiple'
                accept="image/png, image/webp, image/jpeg"
                type='file'
                onChange={multipleUpload}
                className={cls.hiddenInput}
              />
            </p>
          </div>
          <Button
            variant='outlined'
            className={cls.sendRequest}
            onClick={handleSendRequest}
            type='submit'
          >
            {inputText[locale].sentapp}
          </Button>
        </div>
        <div
          className={cls.requestText}
        >
          <p className={cls.successText} style={{ display: requestSent ? 'flex' : 'none' }}
          >
            {inputText[locale].sended} <CheckCircleIcon />
          </p>
          <p className={cls.informationText} style={{ display: requestSent ? 'flex' : 'none' }}
          >
            {inputText[locale].thanksFor}
          </p>
          <div style={{ marginTop: requestSent ? '0' : '50px' }}>
            {/* <p className={cls.informationLink}>
              {inputText[locale].anotherQuestion}
            </p> */}
            <p className={cls.informationLink}>
              {inputText[locale].corpEmail} <a href="mailto: oppbo@evos.uz" >oppbo@evos.uz</a>
            </p>
            {/* <p className={cls.informationLink}>
              {inputText[locale].corpTel} <a href='tel:+998948181212'>+998948181212</a>
            </p> */}
          </div>
        </div>
      </form>
      <MapDialog
        setParentValue={setValue}
        getParentValues={getValues}
        open={showMapModal}
        onClose={handleCloseMapModal}
        onSave={handleMapSave}
      />
    </>
  )
}

const RequestRight = () => (
  <Typography className={cls.requestRight}>
    <div className={cls.imgEvos}>
      <img src='/images/EvosImg.png' alt='EvosImg' />
    </div>
    <div className={cls.imgSxema}>
      {['EvosSxema.png', 'EvosDocument.png'].map((img, i) => (
        <img key={i} src={`/images/${img}`} alt='EvosImg' />
      ))}
    </div>
  </Typography>
)

export { InputField, RequestLeft, RequestRight, TitleOne }

