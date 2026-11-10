require('dotenv').config()
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import cls from '../../PartnersOne.module.scss'
import { inputText } from '../../../../mock/menu'
import { useRouter } from 'next/router'
// const { MuiTelInput } = require('mui-tel-input')

// const InputField = ({
//   label,
//   defaultValue = '',
//   type,
//   control,
//   name,
//   pattern,
//   ...props
// }) => {
//   const controllerProps = {
//     control,
//     name: name || label.toLowerCase(),
//     defaultValue: type === 'tel' ? '+998' : '',
//     render: ({ field }) => {
//       console.log("field", field)
//       console.log("props", props.error)
//       return (
//         <TextField
//           required
//           type={type}
//           label={label}
//           className={cls.inputText}
//           InputProps={{
//             style: {
//               borderRadius: '10px',
//             },
//           }}
//           defaultValue={defaultValue}
//           inputProps={{ pattern, maxLength: props.maxLength }}
//           helperText={props.error && props.error.numberInput.message}
//           {...field}
//           {...props}
//         />
//       )
//     }
//   }

//   return <Controller {...controllerProps} rules={{
//     validate: (value) => parseFloat(value) >= 0 || "Введите положительное число"
//   }} />
// }

const InputField = ({
  label,
  defaultValue = '',
  type,
  control,
  name,
  pattern,
  disabledHelperText,
  required,
  rules,
  ...props
}) => {
  const { locale } = useRouter()
  const max = 1000000000000000
  const min = 0
  return (
    <Controller
      control={control}
      name={name || label.toLowerCase()}
      defaultValue=""
      rules={{ required: required ? inputText[locale].required : false, ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (

        <TextField
          value={value}
          onChange={(e) => {
            if (type === "number" && name !== "phone_number") {
              var value = parseInt(e.target.value, 10);
              if (value > max) value = max;
              if (value < min) value = min;
              onChange(value)
            } else {
              if (!e.target.value.includes("-")) {
                onChange(e.target.value)
              }
            }
          }
          }
          name={name}
          type={type}
          error={error}
          label={label}
          className={cls.inputText}
          InputProps={{
            style: {
              borderRadius: '10px',
            },
            min,
            max
          }}
          defaultValue={defaultValue}
          inputProps={{ pattern, maxLength: props.maxLength }}
          helperText={!disabledHelperText && error ? (error?.message ?? ' ') : null}
          FormHelperTextProps={{
            className: cls.helperText
          }}
          {...props}
        />
      )}
    >
    </Controller>
  )
}


export default InputField
