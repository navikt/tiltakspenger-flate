import { format as dateFnsFormat, isDate } from 'date-fns';
export const format = (
  date: string | number | Date | undefined | null,
  pattern: string
): string => {
  if (!date) return '-';

  if (isDate(date)) {
    return dateFnsFormat(date as Date, pattern);
  }

  if (typeof date !== 'string' || isNaN(Date.parse(date))) return '-';
  return dateFnsFormat(Date.parse(date), pattern);
};
