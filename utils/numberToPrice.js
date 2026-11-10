import {menu} from '../mock/menu'
import { useRouter } from 'next/router'

export const numberToPrice = (number) => {
  const { locale } = useRouter()
  return `${Math.trunc(number)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${menu[locale].sum}`
}
