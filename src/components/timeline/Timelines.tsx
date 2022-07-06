import React from 'react';
import Timeline, { TimeLineType } from './Timeline';
import {
  addMonths,
  differenceInDays,
  isValid,
  max,
  min,
  startOfMonth,
} from 'date-fns';
import { getGridSize } from './gridSnapping';
import { TimeLabels } from './TimeLabels';

export interface NavigatablePeriode {
  from: Date;
  to: Date;
  dotted: boolean;
  name: string;
  soknadId?: string;
  onClick: () => void;
}

export interface Props {
  perioder: NavigatablePeriode[];
  selectedSoknadId: string;
}

const Timelines = ({ perioder, selectedSoknadId }: Props) => {
  const start = startOfMonth(getTimelineStart(perioder));
  const end = startOfMonth(addMonths(getTimelineEnd(perioder), 1));
  const totalDays = differenceInDays(end, start);
  const gridSize = getGridSize(start, end);

  return (
    <div className="flex  p-4 border-b border-t border-sky-400">
      <div className="flex flex-col flex-1">
        {isValid(start) && isValid(end) && (
          <TimeLabels start={start} end={end} gridSize={gridSize} />
        )}
        {perioder.map((periode, index) => {
          return (
            <Timeline
              key={index}
              type={TimeLineType.SOKNAD}
              onClick={periode.onClick}
              selected={selectedSoknadId === periode.soknadId}
              label={periode.name}
              style={{
                width: Math.max(2, getWidthPercent(periode, totalDays)) + '%',
                marginLeft: getOffsetPercent(periode, start, totalDays) + '%',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const getTimelineStart = (periods: NavigatablePeriode[]): Date => {
  const starts = periods
    .map((period) => new Date(period.from))
    .filter((date) => isValid(date));
  return min(starts);
};

const getTimelineEnd = (periods: NavigatablePeriode[]): Date => {
  const ends = periods
    .map((period) => new Date(period.to))
    .filter((date) => isValid(date));
  return max(ends);
};

export const getWidthPercent = (
  period: NavigatablePeriode,
  totalDays: number
): number => {
  const days = differenceInDays(new Date(period.to), new Date(period.from));
  return (days / totalDays) * 100;
};

export const getOffsetPercent = (
  period: NavigatablePeriode,
  firstDay: Date,
  totalDays: number
): number => {
  const days = differenceInDays(new Date(period.from), firstDay);
  return (days / totalDays) * 100;
};

export default Timelines;
