import { requestAxios, requestV2 } from '../utils/axios'

export const fetchMultipleUrls = async (requests, cookies) => {
  let data
  //  console.log('cookies====>',cookies?.token)
  try {
    data = await Promise.all(
      requests?.map(async (request) => {
        const response =
          request?.version === 2
            ? await requestV2({
                url: request.endpoint,
                method: request?.method || 'GET',
                ...(request.body && { data: request.body }),
                headers: {
                  token: cookies?.token,
                },
              })
                .then((res) => {
                  return res
                })
                .catch((err) => {
                  console.log(`err====>`, err)
                  return err?.data
                })
            : request.endpoint
            ? await requestAxios({
                url: request.endpoint,
                method: request?.method || 'GET',
                ...(request.body && { data: request.body }),
                headers: {
                  token: cookies?.token,
                },
              })
                .then((res) => res)
                .catch((err) => err?.data)
            : await requestAxios
                .get(request)
                .then((res) => res)
                .catch((err) => err?.data)
        return response || null
      })
    )
  } catch (error) {
    console.log('fetchMultipleUrls =>', error?.response?.data)
  }
  return data
}
