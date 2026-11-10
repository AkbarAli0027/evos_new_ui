import DOMPurify from 'dompurify'

const sanitizeHtml = (htmlContent) => DOMPurify.sanitize(htmlContent)

export default sanitizeHtml
