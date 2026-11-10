const strapiImageUrlMaker = (data) =>
  process.env.BASE_URL_STRAPI_IMAGE + data?.data?.attributes?.url

export default strapiImageUrlMaker
