import { useRouter } from 'next/router';

export const usePersonPageParams = (): {
  fnr: string;
  selectedSoknadId: string;
} => {
  const router = useRouter();
  const params = (router.query?.slug || []) as unknown as [
    string,
    string,
    string
  ];
  const {
    0: fnr,
    2: selectedSoknadId,
  } = params;
  return {
    fnr,
    selectedSoknadId,
  };
};
