import { atom, selector, useResetRecoilState, useSetRecoilState } from 'recoil';
import logger from '../server/logger';

export const Scopes = {
  GLOBAL: undefined,
  APPLICATIONLIST: '/',
  DETAILS: '/*',
};

export interface AlertObject {
  key: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  scope?: string;
  technical?: string;
  ephemeral?: boolean;
}

export const alertsState = atom<AlertObject[]>({
  key: 'alertsState',
  default: [],
});

export const alertFilterState = atom<string | undefined>({
  key: 'alertFilter',
  default: Scopes.GLOBAL,
});

export const alertsForScope = selector({
  key: 'alertsForScope',
  get: ({ get }) => {
    const alerts = get(alertsState);
    const alertFilter = get(alertFilterState);
    return alerts.filter(
      ({ scope }) => scope === Scopes.GLOBAL || scope === alertFilter
    );
  },
});

export const useAddAlert = () => {
  const setAlerts = useSetRecoilState(alertsState);

  return (alert: AlertObject) => {
    setAlerts((alerts) => [
      ...alerts.filter((it) => it.key !== alert.key),
      alert,
    ]);
  };
};

export const useOperationErrorHandler = (operation: string) => {
  const alert: AlertObject = {
    key: operation,
    type: 'error',
    message: `Det oppsto en feil. Handlingen som ikke ble utført: ${operation}`,
    scope: Scopes.GLOBAL,
  };

  const setAlerts = useSetRecoilState(alertsState);

  return (ex: Error) => {
    logger.info(`Feil ved ${operation}. ${ex.message}`);
    setAlerts((alerts) => [
      ...alerts.filter((it) => it.key !== alert.key),
      alert,
    ]);
  };
};

export const useRemoveAlert = () => {
  const setAlerts = useSetRecoilState(alertsState);

  return (key: string) => {
    setAlerts((alerts) => alerts.filter((it) => it.key !== key));
  };
};

export const useAddEphemeralAlert = () => {
  const addAlert = useAddAlert();
  const removeAlert = useRemoveAlert();

  return (alert: AlertObject, timeToLiveMs: number) => {
    addAlert({ ...alert, ephemeral: true });
    setTimeout(() => removeAlert(alert.key), timeToLiveMs);
  };
};

export const useRemoveAllAlerts = () => useResetRecoilState(alertsState);
