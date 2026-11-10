//!this function for collection type data

const dataToArrayStrapiConverter = (data) =>
  data['data'].map((item) => item['attributes'])

  export default dataToArrayStrapiConverter