import React from 'react';
import { Alert } from '@navikt/ds-react';
import VurderingsKategori from './VurderingsKategori';
import { useRecoilValue } from 'recoil';
import { vilkarsKategoriState } from '../../../state/person';
import { VilkarsVurderingsKategori } from 'generated';
import { Skeleton } from 'antd';

interface Props {
  isLoading: boolean;
}

const VurderingsSection = ({ isLoading }: Props) => {
  const vilkarsKategori = useRecoilValue(vilkarsKategoriState);

  return (
    <div className="border-x border-gray-200 flex flex-col flex-1">
      <div className="self-start py-4 px-4 border-b border-gray-200 flex flex-col self-stretch items-start">
        <h1 className="pl-4 pb-0 mb-0 text-left text-2xl">Søknader</h1>
        <Skeleton title paragraph={false} loading={isLoading}>
          <h2 className="pl-4 text-lg">Gruppe AMO - Jobblearn</h2>
        </Skeleton>
      </div>
      <Alert
        style={{
          borderRadius: 0,
          border: 0,
        }}
        variant="warning"
        className="mb-4"
      >
        Vilkår for tiltakspenger må vurderes for perioden
      </Alert>
      <div className="px-8">
        <Skeleton loading={isLoading} paragraph={{ rows: 6 }}>
          {vilkarsKategori.map(
            (kategori: VilkarsVurderingsKategori, index: number) => {
              return (
                <VurderingsKategori
                  key={index}
                  title={kategori.tittel}
                  vurderinger={kategori.vilkårsvurderinger}
                />
              );
            }
          )}
        </Skeleton>
      </div>
    </div>
  );
};

export default VurderingsSection;
