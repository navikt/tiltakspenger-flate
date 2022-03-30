import React from 'react';
import { ErrorFilled } from '@navikt/ds-icons';
import { InformationFilled } from '@navikt/ds-icons';
import { SuccessFilled } from '@navikt/ds-icons';
import { WarningFilled } from '@navikt/ds-icons';
import { useRecoilState } from 'recoil';
import { alertsState } from '../state/alerts';

type WarningType = 'info' | 'success' | 'warning' | 'error';
const classnameAll = 'flex items-center pl-6 py-2 border';

export const classname = (warningtype: WarningType) => {
  switch (warningtype) {
    case 'success':
      return classnameAll + ' border-green-400 bg-green-100';
    case 'info':
      return classnameAll + ' border-blue-400 bg-blue-100 ';
    case 'warning':
      return classnameAll + ' border-amber-400 bg-amber-100';
    case 'error':
      return classnameAll + ' border-red-400 bg-red-100';
  }
};

export const icon = (icontype: WarningType) => {
  switch (icontype) {
    case 'success':
      return (
        <SuccessFilled
          aria-label="Systemikon suksess"
          fontSize="28"
          className="text-green-400"
        />
      );
    case 'info':
      return (
        <InformationFilled
          aria-label="Systemikon informasjon"
          fontSize="28"
          className="text-blue-400"
        />
      );
    case 'warning':
      return (
        <WarningFilled
          aria-label="Systemikon advarsel"
          fontSize="28"
          className="text-amber-400"
        />
      );
    case 'error':
      return (
        <ErrorFilled
          aria-label="Systemikon feil"
          fontSize="28"
          className="text-red-400"
        />
      );
  }
};

const InfoMessage = () => {
  const [alerts] = useRecoilState(alertsState);

  return (
    <div>
      {alerts.map(({ key, type, message }) => (
        <div key={key} className={classname(type)}>
          {icon(type)}
          <span className="pl-4">{message}</span>
        </div>
      ))}
    </div>
  );
};
export default InfoMessage;
