import React, { FC, ReactNode } from 'react';
import { FileContent, Calender } from '@navikt/ds-icons';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../../state/soknad';
import { useParams } from 'react-router-dom';
import { format } from '../../../util/dateFormatting';
import { Soknad } from '../../../api/soknad';

const posts: {
  title: string;
  text: string;
  getValue?: (soknad: Soknad) => ReactNode;
}[] = [
  {
    title: 'Tiltak',
    text: '-',
    getValue: (soknad) => (
      <div>
        <p className="mb-0">{soknad?.tiltaksArrangoer}</p>
        <p>{soknad?.tiltaksType}</p>
      </div>
    ),
  },
  {
    title: 'Kvalifiseringsprogrammet',
    text: 'Nei',
    getValue: (soknad) => (soknad?.deltarKvp ? 'Ja' : 'Nei'),
  },
  {
    title: 'Opphold på instutisjon',
    text: 'Nei',
    getValue: (soknad) => soknad?.typeInstitusjon || 'Nei',
  },
];

const ContentSection: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-base text-left text-gray-300 border-b border-gray-200">
        {title}
      </h1>
      {children}
    </div>
  );
};

const SoknadContent = () => {
  const [soknader] = useRecoilState(soknadState);
  const { soknadId } = useParams<{ soknadId: string }>();
  const soknad = soknader?.find((s) => s.id === soknadId);

  const start =
    soknad?.brukerRegistrertStartDato || soknad?.systemRegistrertStartDato;
  const slutt =
    soknad?.brukerRegistrertSluttDato || soknad?.systemRegistrertSluttDato;

  if (!soknad) {
    return null;
  }

  return (
    <div>
      <div className="flex space-x-12 text-base mb-8 p-4">
        <div className="flex items-center space-x-2">
          <FileContent />
          <div>{`Soknadsdato ${format(soknad?.opprettet, 'dd.MM.y')}`}</div>
        </div>
        <div className="flex items-center space-x-2">
          <Calender />
          <div>{`Søknadsperiode ${format(start, 'dd.MM.y')}-${format(
            slutt,
            'dd.MM.y'
          )}`}</div>
        </div>
      </div>
      <ul className="flex flex-wrap m-0">
        {posts.map(({ text, title, getValue }, i) => (
          <div key={i} className="m-4">
            <h1 className="text-base text-left text-gray-300">{title}</h1>
            <pre className="font-sans text-base font-bold text-left">
              {getValue !== undefined ? getValue(soknad) : text}
            </pre>
          </div>
        ))}
      </ul>
      <ContentSection title={'Andre utbetalinger'}>
        <ul className="flex">
          <li className="flex flex-col text-left font-bold text-base">
            <div>KLP</div>
            <div>100%</div>
            <div>11.06.2021-10.06.31</div>
          </li>
        </ul>
      </ContentSection>
      <ContentSection title={'Barnetillegg'}>
        <ul className="flex">
          <li className="flex flex-col text-left font-bold text-base">
            <div>Vindfrøy Frøys (5)</div>
            <div>123456 78901</div>
          </li>
        </ul>
      </ContentSection>
      <ContentSection title={'Tilleggsopplysninger'}>
        <div className="text-base text-left font-bold">
          Jeg har søkt om penger til et annet tiltak også.
        </div>
      </ContentSection>
    </div>
  );
};

export default SoknadContent;
