import React, { FC, useContext } from 'react';
import { Soknad } from '../../api/soknad';
import {
  Collapse,
  Expand,
  SuccessFilled,
  SuccessStroke,
  WarningFilled,
} from '@navikt/ds-icons';
import { SoknadContext } from '../DetailsPage';

interface Props {
  soknad: Soknad;
}

interface Requirement {
  fulfilled: boolean;
  description: string;
}

const getPrivateRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: true,
    description: 'Søknad om dagpenger ikke registrert',
  },
  {
    fulfilled: false,
    description: 'Ingen vedtak om statlige ytelser registrert',
  },
];
const getKommunaleRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: true,
    description: 'KVP oppgitt',
  },
  {
    fulfilled: false,
    description: 'KVP utbetalinger registrert',
  },
  {
    fulfilled: true,
    description: 'Introduksjonsprogrammet oppgitt',
  },
  {
    fulfilled: false,
    description: 'Introduksjonsprogrammet registrert',
  },
];
const getStatligeRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: false,
    description: 'Søker oppgir å ha privat pensjonsordning',
  },
  {
    fulfilled: true,
    description: 'Det er ikke registrert utbetalinger på privat pensjon',
  },
];

const Section = ({
  title,
  requirements,
}: {
  title: string;
  requirements: Requirement[];
}) => {
  return (
    <details className="flex flex-col group mb-4">
      <summary className="flex items-center justify-between">
        <h1 className="text-base font-bold text-left flex items-center">
          <SuccessStroke className="mr-2" />
          {title}
        </h1>
        <div className="flex ml-2 items-center">
          <span className="text-stone-400 mr-2">§2.3</span>
          <Expand className="group-open:block hidden mr-2" />
          <Collapse className="group-open:hidden block mr-2" />
        </div>
      </summary>
      {requirements.map((requirement, index) => (
        <div key={index} className={'flex'}>
          <span className={'flex items-center'}>
            {requirement.fulfilled ? (
              <SuccessStroke className="mr-2 text-green-400" />
            ) : (
              <WarningFilled className="mr-2 text-yellow-300" />
            )}{' '}
            {requirement.description}
          </span>
        </div>
      ))}
    </details>
  );
};

const RequirementChecks: FC<Props> = ({ soknad }) => {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-xl font-bold flex items-center">
        <SuccessFilled className="text-green-400 mr-2" />
        Vilkår for tiltakspenger
      </h1>
      <span>12.01.2021 - 02.06.2021</span>
      <div className={'flex-1'}>
        <Section
          title={'Søknad dagpenger'}
          requirements={getStatligeRequirements(soknad)}
        />
        <Section
          title={'Statlige ytelser'}
          requirements={getKommunaleRequirements(soknad)}
        />
        <Section
          title={'Kommunale ytelser'}
          requirements={getPrivateRequirements(soknad)}
        />
        <Section
          title={'Institusjon m/kost og logi'}
          requirements={getStatligeRequirements(soknad)}
        />
        <Section
          title={'Private ordninger'}
          requirements={getKommunaleRequirements(soknad)}
        />
        <Section
          title={'Lønnsinntekt'}
          requirements={getPrivateRequirements(soknad)}
        />
      </div>
    </div>
  );
};

const WrappedRequirementChecks = () => {
  const { soknad } = useContext(SoknadContext);

  return (
    <div className="flex flex-col items-start p-8">
      <div className="self-stretch flex mb-16">
        {soknad ? <RequirementChecks soknad={soknad} /> : null}
      </div>
    </div>
  );
};

export default WrappedRequirementChecks;
