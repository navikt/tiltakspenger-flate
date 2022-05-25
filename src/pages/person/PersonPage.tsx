import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines, { Periode } from '../../components/timeline/Timelines';
import TiltakSection from './TiltakSection';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../state/soknad';
import { isValid } from 'date-fns';

const PersonPage = () => {
  const [soknader] = useRecoilState(soknadState);

  const soknadPerioder = (soknader || []).map((soknad) => {
    return {
      from: new Date(soknad.systemRegistrertStartDato || 'NaN'),
      to: new Date(soknad.systemRegistrertSluttDato || 'NaN'),
      name: 'Søknad: ' + soknad.tiltaksArrangoer,
      dotted: true,
      soknadId: soknad.id,
    };
  });
  const tiltaksPerioder = (soknader || []).map((soknad) => {
    return {
      from: new Date(soknad.brukerRegistrertStartDato || 'NaN'),
      to: new Date(soknad.brukerRegistrertSluttDato || 'NaN'),
      name: soknad.tiltaksArrangoer,
      soknadId: soknad.id,
      dotted: false,
    };
  });
  const perioder = [...soknadPerioder, ...tiltaksPerioder].filter(
    (period) =>
      period.from && period.to && isValid(period.from) && isValid(period.to)
  ) as Periode[];

  return (
    <div className="flex flex-col bg-gray-150">
      <Breadcrumbs />
      <Timelines perioder={perioder} />
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-2 border-sky-400">
          <TiltakSection />
        </div>
        <div className="col-span-10 col-start-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
