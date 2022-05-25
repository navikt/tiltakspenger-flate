import TimelineLabel from './TimelineLabel';
import { months } from './months';
import React from 'react';
import { Periode } from './Timelines';
import { monthDivide } from './gridSnapping';
import {
  addMonths,
  differenceInDays,
  getMonth,
  intervalToDuration,
  isSameDay,
} from 'date-fns';

interface Props {
  start: Date;
  end: Date;
  gridSize: Duration;
}

const defaultPeriode = { name: '', dotted: false };

const getPeriods = (start: Date, end: Date, gridSize: Duration): Periode[] => {
  if (isSameDay(start, end))
    return [
      {
        from: start,
        to: addMonths(end, 1),
        ...defaultPeriode,
      },
    ];
  const numberOfPeriods = monthDivide(
    intervalToDuration({ start, end }),
    gridSize
  );
  return Array(numberOfPeriods)
    .fill(0)
    .map((_, index) => {
      const periodStart = addMonths(start, index);
      return {
        ...defaultPeriode,
        name: months[getMonth(periodStart)],
        from: periodStart,
        to: addMonths(periodStart, 1),
      };
    });
};

const getDays = (period: Periode): number => {
  return differenceInDays(period.from, period.to);
};

export const TimeLabels = ({ start, end, gridSize }: Props) => {
  const periods = getPeriods(start, end, gridSize);
  const periodDays = periods.map((it) => ({
    ...it,
    days: getDays(it),
  }));
  const totalDays = differenceInDays(start, end);
  const percentWidth = (days: number): number => (days / totalDays) * 100;

  return (
    <div className="flex flex-row">
      <TimelineLabel label={'Måned'} />
      <div className="flex flex-1 divide-x divide-solid">
        {periodDays.map((periode, index) => (
          <div
            key={index}
            className=""
            style={{
              width: percentWidth(periode.days) + '%',
            }}
          >
            {periode.name}
          </div>
        ))}
      </div>
    </div>
  );
};
