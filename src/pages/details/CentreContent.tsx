import React, { FC } from 'react';
import { Soknad } from '../../api/soknad';
import { SuccessStroke, WarningFilled } from '@navikt/ds-icons';

interface Props {
  soknad: Soknad;
}

interface Requirement {
  fulfilled: boolean;
  description: string;
}

const getPrivateRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: soknad.KVP,
    description: 'Søknad om dagpenger ikke registrert',
  },
  {
    fulfilled: soknad.KVP,
    description: 'Ingen vedtak om statlige ytelser registrert',
  },
];
const getKommunaleRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: soknad.KVP,
    description: 'KVP oppgitt',
  },
  {
    fulfilled: soknad.KVP,
    description: 'KVP utbetalinger registrert',
  },
  {
    fulfilled: soknad.KVP,
    description: 'Introduksjonsprogrammet oppgitt',
  },
  {
    fulfilled: soknad.KVP,
    description: 'Introduksjonsprogrammet registrert',
  },
];
const getStatligeRequirements = (soknad: Soknad): Requirement[] => [
  {
    fulfilled: soknad.pensjonEtterlønn,
    description: 'Søker oppgir å ha privat pensjonsordning',
  },
  {
    fulfilled: soknad.pensjonEtterlønn,
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
    <div className="flex flex-col">
      <h1 className="text-base font-bold text-left">{title}</h1>
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
    </div>
  );
};

const CentreContent: FC<Props> = ({ soknad }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">
        Vilkår for tiltakspenger 12.01.2021 - 02.06.2021
      </h1>
      <Section
        title={'Overlappende livsopphold - statlig'}
        requirements={getStatligeRequirements(soknad)}
      />
      <Section
        title={'Overlappende livsopphold - kommunalt'}
        requirements={getKommunaleRequirements(soknad)}
      />
      <Section
        title={'Overlappende livsopphold - private ordninger'}
        requirements={getPrivateRequirements(soknad)}
      />
    </div>
  );
};

export default CentreContent;
