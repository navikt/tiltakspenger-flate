import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines, {
  NavigatablePeriode,
} from '../../components/timeline/Timelines';
import TiltakSection from './TiltakSection';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../state/soknad';
import { isValid } from 'date-fns';
import PersonInfo from './PersonInfo';
import Spinner from '../../components/Spinner';
import { personPath } from '../../routes';
import { useRouter } from 'next/router';
import { usePersonPageParams } from '../../util/usePersonPageParams';

const PersonPage = () => {
  const [soknader] = useRecoilState(soknadState);

  const router = useRouter();
  const { fnr, selectedSoknadId } = usePersonPageParams();
  const isLoading = !fnr || !selectedSoknadId;
  const gotoSoknad = ({ fnr, soknadId }: { fnr: string; soknadId: string }) => {
    const url = personPath({ fnr, soknadId });
    router.replace(url);
  };

  const soknadPerioder = (soknader || []).map((soknad) => {
    return {
      from: new Date(soknad.systemRegistrertStartDato || 'NaN'),
      to: new Date(soknad.systemRegistrertSluttDato || 'NaN'),
      name: 'Søknad: ' + soknad.tiltaksArrangoer,
      dotted: true,
      soknadId: soknad.id,
      onClick: () => gotoSoknad({ fnr, soknadId: soknad.id }),
    };
  });
  const tiltaksPerioder = (soknader || []).map((soknad) => {
    return {
      from: new Date(soknad.brukerRegistrertStartDato || 'NaN'),
      to: new Date(soknad.brukerRegistrertSluttDato || 'NaN'),
      name: soknad.tiltaksArrangoer,
      soknadId: soknad.id,
      dotted: false,
      onClick: () => gotoSoknad({ fnr, soknadId: soknad.id }),
    };
  });
  const perioder = [...soknadPerioder, ...tiltaksPerioder].filter(
    (period) =>
      period.from && period.to && isValid(period.from) && isValid(period.to)
  ) as NavigatablePeriode[];

  return (
    <div className="flex flex-col bg-gray-150">
      <Breadcrumbs />
      <Spinner isLoading={isLoading}>
        <Timelines selectedSoknadId={selectedSoknadId} perioder={perioder} />
        <div className="grid grid-cols-12 flex-1">
          <div className="col-span-2 border-sky-400">
            <TiltakSection />
          </div>
          <div className="col-span-10 col-start-3">
            <PersonInfo />
          </div>
        </div>
      </Spinner>
    </div>
  );
};

export default PersonPage;
