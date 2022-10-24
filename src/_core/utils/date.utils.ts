import { format, isValid, parse } from 'date-fns'

export const transformDateFormats = (
  value: string,
  formatFrom: string,
  formatTo: string,
): string | null => {
  try {
    const date: Date = parse(value, formatFrom, new Date())

    if (!isValid(date)) {
      throw new Error('Parse Error!')
    }

    const transformed = format(date, formatTo)

    if (!transformed) {
      throw new Error('Format Error!')
    }

    return transformed
  } catch (e) {
    return null
  }
}
