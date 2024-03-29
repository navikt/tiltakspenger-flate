export const basePath = process.env.NEXT_PUBLIC_BASE_URL || '/';

export const soknadPath = (soknadId: string) => `${basePath}soknad/${soknadId}`;
export const behandlingsPath = (behandlingsId: string) =>
  `${basePath}behandling/${behandlingsId}`;
export const personPath = ({
  fnr,
  soknadId,
}: {
  fnr: string;
  soknadId: string;
}) => `${basePath}person/${fnr}/soknad/${soknadId}`;
