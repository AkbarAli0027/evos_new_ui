import { inputText } from "../../../../mock/menu";

const formFieldsConfig = (locale) => {
  return {
    applicant: [
      // {
      //   label: 'Имя и фамилия',
      //   placeholder: 'Азат',
      //   type: 'text',
      //   name: 'name',
      //   required: true,
      // },
      {
        label: inputText[locale].email,
        placeholder: '@mail',
        type: 'email',
        name: 'email',
        required: false,
        rules: {
          validate: (value) => {
            if (!value)
              return
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || inputText[locale].enterCorrectEmail;
          }
        }
      },
      {
        label: inputText[locale].phoneNumber,
        placeholder: '+998 00 000 00 00',
        // type: 'tel',
        type: 'number',
        name: 'phone_number',
        pattern: '[0-9]{3} [0-9]{3} [0-9]{4}',
        maxLength: '13',
        title: 'Ten digits code',
        required: true,
      },
    ],
    organization: [
      {
        label: inputText[locale].oragnizationName,
        placeholder: 'OOO mac',
        name: "organization_name",
        type: 'text',
        // required: true,
      },
      {
        label: inputText[locale].email,
        placeholder: '@mail',
        type: 'text',
        name: 'email',
        type: 'email',
      },
      {
        label: inputText[locale].phoneNumber,
        placeholder: '+9989 00 00 00',
        type: 'number',
        name: 'phone_number',
        maxLength: '13',
        title: 'Ten digits code',
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
      {
        label: inputText[locale].inn,
        placeholder: '6546139446511465',
        type: 'number',
        name: 'INN',
        pattern: '[0-9]{3} [0-9]{3} [0-9]{4}',
        maxLength: '12',
        title: 'Ten digits code',
        // required: true,
        // rules: {
        //   validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        // }
      },
    ],
    object: [
      {
        label: inputText[locale].areaRoom,
        placeholder: '200 м2',
        type: 'number',
        name: 'square',
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
      // {
      //   label: 'Этаж помещения',
      //   placeholder: '1',
      //   type: 'number',
      //   name: 'floor',
      //   required: true,
      //   rules: {
      //     validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
      //   }
      // },
      {
        label: inputText[locale].rentRoom,
        placeholder: '10 000 000 сум',
        name: 'rent',
        required: true,
        type: "number",
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
      {
        label: inputText[locale].sellRoom,
        placeholder: '10 000 000 сум',
        name: 'sale_placement',
        type: "number",
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
    ],
    land: [
      {
        label: inputText[locale].area,
        placeholder: '200 м2',
        type: 'text',
        name: 'square',
        type: "number",
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
      {
        label: inputText[locale].rent,
        placeholder: '10 000 000 сум',
        name: 'rent',
        type: "number",
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
      {
        label: inputText[locale].sell,
        placeholder: '100 000 000 сум',
        name: 'sale_placement',
        type: "number",
        required: true,
        rules: {
          validate: (value) => parseFloat(value) >= 0 || inputText[locale].enterCorrectQuantity
        }
      },
    ],
  }
}

export default formFieldsConfig
