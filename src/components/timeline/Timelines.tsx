import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { personPath } from '../../routes';

export interface Periode {
  from: Date;
  to: Date;
  dotted: boolean;
  name: string;
  soknadId?: string;
}

const Timelines = ({
  onClickTimeline,
  perioder,
}: {
  onClickTimeline?: (id: string) => void;
  perioder: Periode[];
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const navigate = useNavigate();
  const params = useParams<{ soknadId: string; fnr: string }>();
  const { soknadId, fnr } = params as { soknadId: string; fnr: string };

  const start = startOfMonth(getTimelineStart(perioder));
  const end = startOfMonth(addMonths(getTimelineEnd(perioder), 1));
  const totalDays = differenceInDays(end, start);

  const gridSize = getGridSize(start, end);

  useEffect(() => {
    if (!selected) return;

    if (Number.isInteger(parseInt(selected))) {
      const url = personPath({ fnr, soknadId: selected });
      navigate(url, { replace: false });
    }

    onClickTimeline?.(selected);
  }, [selected]);

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
              onClick={() => setSelected(periode.soknadId)}
              selected={soknadId === periode.soknadId}
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

const getTimelineStart = (periods: Periode[]): Date => {
  const starts = periods
    .map((period) => new Date(period.from))
    .filter((date) => isValid(date));
  return min(starts);
};

const getTimelineEnd = (periods: Periode[]): Date => {
  const ends = periods
    .map((period) => new Date(period.to))
    .filter((date) => isValid(date));
  return max(ends);
};

export const getWidthPercent = (period: Periode, totalDays: number): number => {
  const days = differenceInDays(new Date(period.to), new Date(period.from));
  return (days / totalDays) * 100;
};

export const getOffsetPercent = (
  period: Periode,
  firstDay: Date,
  totalDays: number
): number => {
  const days = differenceInDays(new Date(period.from), firstDay);
  return (days / totalDays) * 100;
};

export default Timelines;
