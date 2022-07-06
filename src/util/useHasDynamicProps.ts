import { useEffect, useState } from 'react';

export const useHasDynamicProps = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return isLoading;
};
