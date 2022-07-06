import { useRouter } from 'next/router';

export const usePersonPageParams = (): {
  fnr: string;
  selectedSoknadId: string;
} => {
  const router = useRouter();
  const params = (router.query?.slug || []) as unknown as [
    string,
    string,
    string,
    string
  ];
  const { 1: fnr, 3: selectedSoknadId } = params;
  return {
    fnr,
    selectedSoknadId,
  };
};
