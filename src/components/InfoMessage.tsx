import React from 'react';
import { Error } from '@navikt/ds-icons';
import { ErrorFilled } from '@navikt/ds-icons';
import { Information } from '@navikt/ds-icons';
import { InformationFilled } from '@navikt/ds-icons';
import { Success } from '@navikt/ds-icons';
import { SuccessFilled } from '@navikt/ds-icons';
import { Warning } from '@navikt/ds-icons';
import { WarningFilled } from '@navikt/ds-icons';
import { useRecoilState } from 'recoil';
import { alertsState } from '../state/alerts';

type WarningType = 'info' | 'success' | 'warning' | 'error';

export const classname = (warningtype: WarningType) => {
  switch (warningtype) {
    case 'success':
      return 'border border-green-400 bg-green-100';
    case 'info':
      return 'border border-blue-400 bg-blue-100';
    case 'warning':
      return 'border border-amber-400 bg-amber-100';
    case 'error':
      return 'border border-red-400 bg-red-100';
  }
};

export const icon = (icontype: WarningType) => {
  switch (icontype) {
    case 'success':
      return <Success fontSize="32" className="text-green-400 text-3xl" />;
    case 'info':
      return <Information fontSize="32" className="text-blue-400" />;
    case 'warning':
      return <Warning fontSize="32" className="text-red-400" />;
    case 'error':
      return <Error fontSize="32" className="text-red-400" />;
  }
};

const InfoMessage = () => {
  const [alerts] = useRecoilState(alertsState);
  console.log(alerts);

  return alerts.map(({ key, type, message }) => (
    <div key={key} className={classname(type)}>
      {icon(type)} {message}
    </div>
  ));
};
export default InfoMessage;
