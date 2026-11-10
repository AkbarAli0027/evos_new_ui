export const formatWorkingHours = (
  workTimeFrom,
  workTimeTo,
  defaultTime = '09:00 – 3:00'
) => {
  if (workTimeFrom && workTimeTo) {
    return `${workTimeFrom.slice(0, 5)} - ${workTimeTo.slice(0, 5)}`
  }

  return defaultTime
}
