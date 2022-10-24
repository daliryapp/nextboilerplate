import { format } from 'date-fns'

export const dateFormat = (inputDate: Date, strFormat: string) => {
    return format(inputDate, strFormat);
}