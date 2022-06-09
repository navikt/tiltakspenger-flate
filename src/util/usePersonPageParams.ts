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
  const [fnr, _, selectedSoknadId] = params;
  return {
    fnr,
    selectedSoknadId,
  };
};
