import React, { CSSProperties } from 'react';
import TimelineLabel from './TimelineLabel';

export enum TimeLineType {
  VEDTAK,
  SOKNAD,
}

const colors: Record<TimeLineType, string> = {
  [TimeLineType.VEDTAK]: 'bg-blue-100 border border-blue-400 border-dashed',
  [TimeLineType.SOKNAD]: 'bg-green-100 border border-green-400',
};

const Timeline = ({
  label,
  style,
  onClick,
  selected,
  type = TimeLineType.VEDTAK,
}: {
  label: string;
  style: CSSProperties;
  onClick: () => void;
  selected: boolean;
  type: TimeLineType;
}) => {
  return (
    <div className="flex items-center bg-gray-100">
      <TimelineLabel label={label} />
      <div className={'flex flex-1'}>
        <button
          tabIndex={0}
          onClick={onClick}
          className={`rounded-full ${colors[type]} p-0 text-left ${
            selected ? 'font-bold bg-red-200 border-2 ' : ''
          }`}
          style={style}
        >
          <div className="pl-3 truncate hover:text-clip hover:overflow-visible">
            60% - 3 dager
          </div>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
