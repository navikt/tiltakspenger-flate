import React from 'react';
import { Success, File } from '@navikt/ds-icons';
import { Link } from '@navikt/ds-react';
import { useRecoilValue } from 'recoil';
import { barnState, soknadState, tiltakState } from '../../state/person';
import { BarnDTO } from '../../../generated';
import { Skeleton } from 'antd';

interface Props {
  isLoading: boolean;
}

const SummarySection = ({ isLoading }: Props) => {
  const barn: BarnDTO[] = useRecoilValue(barnState);
  const tiltak = useRecoilValue(tiltakState);
  const soknad = useRecoilValue(soknadState);

  const soknadDate = '21.03.22-22.04.22';

  return (
    <div className="m-8 text-left">
      <h1 className="text-lg font-bold">Oppsummering</h1>
      <div className="text-sm">Søknadsdato</div>
      <div className="text-sm">
        <Skeleton loading={isLoading} title paragraph={false}>
          {soknadDate}
        </Skeleton>
      </div>

      <div className="mt-8">
        <h1 className="text-sm font-bold">Registrerte tiltak</h1>
        <Skeleton loading={isLoading}>
          <div>{tiltak?.navn}</div>
          <div>{tiltak?.arrangr}</div>
          <div>{`${tiltak?.prosent}% - ${tiltak?.dagerIUken} dager i uken`}</div>
          <div className="flex items-center">
            <Success />
            <span className="ml-2">Status: {tiltak?.status}</span>
          </div>
        </Skeleton>
      </div>

      <div className="mt-8">
        <h1 className="text-sm font-bold">Barn</h1>
        <Skeleton loading={isLoading}>
          {barn.map(({ ident, fornavn, etternavn }, index) => {
            return (
              <div key={index} className="mt-2">
                <div>{`${fornavn} ${etternavn}`}</div>
                <div>{ident}</div>
                <div>Bosatt: Norge</div>
              </div>
            );
          })}
        </Skeleton>
      </div>

      <div className="mt-8 flex flex-col">
        <h1 className="text-sm font-bold">Vedlegg</h1>
        <Link>
          <File />
          <span>Dokument 1</span>
        </Link>
        <Link>
          <File />
          <span>Dokument 2</span>
        </Link>
        <Link>
          <File />
          <span>Dokument 3</span>
        </Link>
      </div>
    </div>
  );
};

export default SummarySection;
