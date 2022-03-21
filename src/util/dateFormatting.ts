import { format as dateFnsFormat } from 'date-fns';
export const format = (
  date: string | number | Date | undefined | null,
  pattern: string
): string => {
  if (!date) return '-';
  if (typeof date !== 'string' || isNaN(Date.parse(date))) return '-';
  return dateFnsFormat(Date.parse(date), pattern);
};
