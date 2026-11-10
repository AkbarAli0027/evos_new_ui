export default function dynamicImageLink(item) {
  if (item?.includes('https://')) {
    return item
  } else {
    return `${process.env.CDN}/${item}`
  }
}
