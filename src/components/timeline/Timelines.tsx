import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TimelineLabel from './TimelineLabel';
import { months } from './months';
import Timeline, { TimeLineType } from './Timeline';
import { differenceInDays, isValid, max, min } from 'date-fns';

const TimeLabels = () => {
  return (
    <div className="flex flex-row">
      <TimelineLabel label={'Måned'} />
      <div className="flex flex-1 divide-x divide-solid">
        {months.map((month, index) => (
          <div key={index} className="flex-1">
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export interface Periode {
  from: string;
  to: string;
  dotted: boolean;
  name: string;
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
  const location = useLocation();

  const start = getTimelineStart(perioder);
  const end = getTimelineEnd(perioder);
  const totalDays = differenceInDays(end, start);

  useEffect(() => {
    if (!selected) return;

    if (Number.isInteger(parseInt(selected))) {
      navigate(`${location.pathname}/payment/${selected}`);
    }

    onClickTimeline?.(selected);
  }, [selected]);

  return (
    <div className="flex  p-4 border-b border-t border-sky-400">
      <div className="flex flex-col flex-1">
        <TimeLabels />
        {perioder.map((periode, index) => {
          return (
            <Timeline
              key={index}
              type={TimeLineType.SOKNAD}
              onClick={() => setSelected(periode.name)}
              selected={selected === 'AAP'}
              label={'AAP'}
              style={{
                width: getWidthPercent(periode, totalDays) + '%',
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

const getWidthPercent = (period: Periode, totalDays: number): number => {
  const days = differenceInDays(new Date(period.to), new Date(period.from));
  return (days / totalDays) * 100;
};

const getOffsetPercent = (
  period: Periode,
  firstDay: Date,
  totalDays: number
): number => {
  const days = differenceInDays(new Date(period.from), firstDay);
  return (days / totalDays) * 100;
};

export default Timelines;
