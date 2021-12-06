import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BoxTimeline from './BoxTimeline';
import TimelineLabel from './TimelineLabel';
import { months } from './months';
import Timeline from './Timeline';

const payments = [
  { id: '1', ok: true },
  { id: '2', ok: true },
  { id: '3', ok: true },
  { id: '4', ok: false },
];

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

const Timelines = ({
  onClickTimeline,
}: {
  onClickTimeline?: (id: string) => void;
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const navigate = useNavigate();
  const location = useLocation();

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
        <BoxTimeline
          items={payments}
          selected={selected}
          label={'Utbetalinger'}
        />
        <Timeline
          onClick={() => setSelected('AAP')}
          selected={selected === 'AAP'}
          label={'AAP'}
          style={{ width: 300 }}
        />
        <Timeline
          onClick={() => setSelected('Dag')}
          selected={selected === 'Dag'}
          label={'Dag'}
          style={{ width: 400, marginLeft: 250 }}
        />
      </div>
    </div>
  );
};

export default Timelines;
