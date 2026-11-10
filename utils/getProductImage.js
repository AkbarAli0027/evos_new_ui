export function getProductImage(fileUrl) {
  const url = fileUrl.replace('dlv', 'web')
  return process.env.CDN + '/' + url
}
