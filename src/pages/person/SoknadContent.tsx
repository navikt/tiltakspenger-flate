import React, { FC } from 'react';
import { FileContent, Calender } from '@navikt/ds-icons';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../state/soknad';
import { useParams } from 'react-router-dom';

const posts = [
  {
    title: 'Tiltak',
    text:
      'Gruppe AMO\n' +
      '100 % - 5 dager\n' +
      'Kunnskapsfabrukken AS\n' +
      '10.08.21-02.06.22',
  },
  {
    title: 'Kvalifiseringsprogrammet',
    text: 'Nei',
  },
  {
    title: 'Opphold på instutisjon',
    text: 'Barnevernsinstitusjon',
  },
];

const ContentSection: FC<{ title: string }> = ({ title, children }) => {
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

  console.log(soknad);

  const start = soknad?.brukerStartDato || soknad?.systemStartDato;
  const slutt = soknad?.brukerSluttDato || soknad?.systemSluttDato;

  return (
    <div className="">
      <div className="flex space-x-12 text-base mb-8 p-4">
        <div className="flex items-center space-x-2">
          <FileContent />
          <div>{`Soknadsdato ${soknad?.opprettet}`}</div>
        </div>
        <div className="flex items-center space-x-2">
          <Calender />
          <div>{`${start}-${slutt}`}</div>
        </div>
      </div>
      <ul className="flex flex-wrap m-0">
        {posts.map(({ text, title }, i) => (
          <div key={i} className="m-4">
            <h1 className="text-base text-left text-gray-300">{title}</h1>
            <pre className="font-sans text-base font-bold text-left">
              {text}
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
    </div>
  );
};

export default SoknadContent;
