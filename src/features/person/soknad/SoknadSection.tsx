import React, { useEffect } from 'react';
import SoknadListe from './SoknadListe';
import SoknadContent from './SoknadContent';
import Spinner from '../../../components/Spinner';
import { useRequest } from '../../../api/common';
import { getSoknaderByIdent } from '../../../api/soknad';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { soknadState } from '../../../state/soknad';
import { useRouter } from 'next/router';

const SoknadSection = () => {
  const router = useRouter();
  const { slug } = router.query;
  const fnr: string | undefined = slug ? slug[1] : '';
  const {
    run: runGetSoknader,
    result,
    isLoading,
  } = useRequest(() => getSoknaderByIdent(fnr || ''));

  const setSoknader = useSetRecoilState(soknadState);

  useEffect(() => {
    runGetSoknader();
  }, [fnr]);

  useEffect(() => {
    if (!result) return;
    setSoknader(result?.data || []);
  }, [result]);

  return (
    <Spinner isLoading={isLoading}>
      <SoknadListe />
      <SoknadContent />
    </Spinner>
  );
};

export default SoknadSection;