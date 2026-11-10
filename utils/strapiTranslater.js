//!  type of property is string
const strapiTranslater = (data, property, locale) => {
  if (locale != 'ru') {
    return data[`${property}_${locale}`]
  } else {
    return data?.[property]
  }
}
export default strapiTranslater
