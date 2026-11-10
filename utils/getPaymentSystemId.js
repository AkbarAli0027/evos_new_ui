export function getPaymentSystemId(paymentType) {
  switch (paymentType) {
    case 'cash':
      return 1
    case 'click':
      return 2
    case 'payme':
      return 4
    case 'apelsin':
      return 4

    default:
      break
  }
}
