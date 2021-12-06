import React, { CSSProperties, useEffect, useState } from 'react';

const TimelineLabel = ({ label }: { label: string }) => {
  return (
    <span className="font-bold w-36 mr-2 border-r self-stretch py-2">
      {label}
    </span>
  );
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'];
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

const Timeline = ({
  label,
  style,
  onClick,
  selected,
}: {
  label: string;
  style: CSSProperties;
  onClick: () => void;
  selected: boolean;
}) => {
  return (
    <div className="flex items-center">
      <TimelineLabel label={label} />
      <button
        tabIndex={0}
        onClick={onClick}
        className={`border border-red-400 rounded-full bg-red-200 p-4 ${
          selected ? 'border-2' : ''
        }`}
        style={style}
      />
    </div>
  );
};

const Timelines = ({
  onClickTimeline,
}: {
  onClickTimeline?: (id: string) => void;
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!selected) return;
    onClickTimeline?.(selected);
  }, [selected]);

  return (
    <div className="flex  p-4 border-b border-t border-sky-400">
      <div className="flex flex-col flex-1">
        <TimeLabels />
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
