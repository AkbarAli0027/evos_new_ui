import ExcelJS from 'exceljs'
import * as Filesaver from 'file-saver'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
const qs = require('qs')

export default function DownloadExcelFile() {
  const router = useRouter()
  const { id, startDate, endDate } = router.query
  let query = qs.stringify(
    {
      filters: {
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.BASE_URL_STRAPI_HTTPS + `/location-applications?${query}`
      )
      const data = await response.json()
      const editedData = data?.data?.map((item) => item.attributes)
      if (id === 'c57eedc3-a954-4262-a0af-376c65b5a284' && editedData) {
        await exportToExcel(editedData)
        router.push('/')
      } else {
        router.push('/')
      }
    }
    if (startDate && endDate) {
      fetchData()
    }
  }, [startDate, endDate])

  const imageUrl = 'https://admin.evos.uz'
  const fileName = 'excel'
  const fileExtension = '.xlsx'

  const exportToExcel = async (newData) => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet1')

    worksheet.columns = [
      { header: 'Название', key: 'name', width: 30 },
      { header: 'Почта', key: 'email', width: 30 },
      { header: 'Телефонный номер', key: 'phone_number', width: 30 },
      { header: 'ИНН', key: 'INN', width: 30 },
      { header: 'Площадь помещения', key: 'square', width: 30 },
      { header: 'Этаж', key: 'floor', width: 30 },
      { header: 'Аренда', key: 'rent', width: 30 },
      { header: 'Продажа', key: 'sale_placement', width: 30 },
      { header: 'Ссылка адреса', key: 'location_link', width: 30 },
      { header: 'Создано в', key: 'createdAt', width: 30 },
      { header: 'Изменено в', key: 'updatedAt', width: 30 },
      { header: 'Выпущено в', key: 'publishedAt', width: 30 },
      { header: 'Заявитель', key: 'applicant', width: 30 },
      { header: 'Объект', key: 'object', width: 30 },
      { header: 'Название организации', key: 'organization_name', width: 30 },
      { header: 'Регион', key: 'region', width: 30 },
      { header: 'Страна', key: 'country', width: 30 },
      { header: 'Комментарий', key: 'description', width: 30 },
      { header: 'Коммуникация', key: 'communication', width: 30 },
      { header: 'Автостоянка', key: 'parking', width: 30 },
      { header: 'Документы', key: 'document', width: 30 },
      { header: 'Комментарии', key: 'comment', width: 30 },
      { header: 'Актуальное состояние', key: 'actual_status', width: 30 },
      { header: 'Изображение No1', key: 'images', width: 100 },
      { header: 'Изображение No2', key: 'images2', width: 100 },
      { header: 'Изображение No3', key: 'images3', width: 100 },
      { header: 'Изображение No4', key: 'images4', width: 100 },
      { header: 'Изображение No5', key: 'images5', width: 100 },
    ]

    newData.forEach((item) => {
      worksheet.addRow({
        name: item.name,
        email: item.email,
        phone_number: item.phone_number,
        INN: item.INN,
        square: item.square,
        floor: item.floor,
        rent: item.rent,
        sale_placement: item.sale_placement,
        location_link: item.location_link,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        applicant: item.applicant,
        object: item.object,
        organization_name: item.organization_name,
        region: item.region,
        region: item.region,
        country: item.country,
        description: item.description,
        communication: item.communication,
        parking: item.parking,
        document: item.document,
        comment: item.comment,
        actual_status: item.actual_status,
        // images: item?.images?.data?.map((el) => {
        //   console.log("image", el)
        //   return `${imageUrl + el?.attributes?.url}, `
        // }),
        images:
          item?.images?.data &&
          `${
            item?.images?.data[0]?.attributes?.url
              ? imageUrl + item?.images?.data[0]?.attributes?.url
              : 'No data'
          }`,
        images2:
          item?.images?.data &&
          `${
            item?.images?.data[1]?.attributes?.url
              ? imageUrl + item?.images?.data[1]?.attributes?.url
              : 'No data'
          }`,
        images3:
          item?.images?.data &&
          `${
            item?.images?.data[2]?.attributes?.url
              ? imageUrl + item?.images?.data[2]?.attributes?.url
              : 'No data'
          }`,
        images4:
          item?.images?.data &&
          `${
            item?.images?.data[3]?.attributes?.url
              ? imageUrl + item?.images?.data[3]?.attributes?.url
              : 'No data'
          }`,
        images5:
          item?.images?.data &&
          `${
            item?.images?.data[4]?.attributes?.url
              ? imageUrl + item?.images?.data[4]?.attributes?.url
              : 'No data'
          }`,
      })
    })

    const buffer = await workbook.xlsx.writeBuffer()
    const data = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    Filesaver.saveAs(data, fileName + fileExtension)
  }

  return <></>
}
