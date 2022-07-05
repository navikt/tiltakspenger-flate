import React from 'react';
import TimelineLabel from './TimelineLabel';
import { SuccessStroke, WarningFilled } from '@navikt/ds-icons';
import Link from "next/link";

interface Props {
  label: string;
  selected: string | undefined;
  items: { id: string; ok: boolean }[];
}

const PaymentBox = ({
  ok,
  selected,
  id,
}: {
  ok: boolean;
  selected: boolean;
  id: string;
}) => {
  return (
    <Link
      href={`payment/${id}`}
      className={`flex justify-center border ${
        ok
          ? 'border-green-400 bg-green-100 '
          : 'border-yellow-400 bg-yellow-200 '
      } ${selected ? 'border-2' : 'border'} rounded-sm w-28 p-1`}
    >
      {ok ? <SuccessStroke className={''} /> : <WarningFilled />}
    </Link>
  );
};

export const BoxTimeline = ({ label, selected, items }: Props) => {
  return (
    <div className="flex items-center">
      <TimelineLabel label={label} />
      {items.map(({ ok, id }) => (
        <PaymentBox id={id} ok={ok} key={id} selected={selected === id} />
      ))}
    </div>
  );
};

export default BoxTimeline;
