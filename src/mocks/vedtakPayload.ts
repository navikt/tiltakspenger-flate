import { Person } from 'generated';

export const vedtakPayload: Person = {
  personopplysninger: {
    fornavn: 'Fornavn',
    etternavn: 'Etternavn',
    ident: '123454',
    barn: [
      {
        fornavn: 'SULTEN',
        etternavn: 'TEPPE',
        ident: '987654',
        bosted: 'NORGE',
      },
      {
        fornavn: 'LUNKEN',
        etternavn: 'FLAMME',
        ident: '987655',
        bosted: 'NORGE',
      },
    ],
  },
  behandlinger: [
    {
      id: 'behandlingId',
      søknad: {
        opprettet: '2022-04-01',
      },
      tiltak: {
        arrangør: 'Joblearn',
        navn: 'Gruppe AMO',
        periode: {
          fra: new Date('2022-04-01'),
          til: new Date('2022-04-20'),
        },
        prosent: 80,
        dagerIUken: 4,
        status: 'Godkjent',
      },
      periode: {
        fra: new Date('2022-04-01'),
        til: new Date('2022-04-20'),
      },
      vurderinger: [
        {
          tittel: 'Statlige ytelser',
          utfall: 'Uavklart',
          vilkårsvurderinger: [
            {
              utfall: 'Oppfylt',
              periode: {
                fra: new Date('2022-04-01'),
                til: new Date('2022-04-20'),
              },
              vilkår: 'Dagpenger',
              kilde: 'Arena',
            },
            {
              utfall: 'Oppfylt',
              periode: {
                fra: new Date('2022-04-01'),
                til: new Date('2022-04-20'),
              },
              vilkår: 'AAP',
              kilde: 'Arena',
            },
            {
              utfall: 'Uavklart',
              periode: {
                fra: new Date('2022-04-01'),
                til: new Date('2022-04-20'),
              },
              vilkår: 'Tiltakspenger',
              kilde: 'Arena',
            },
          ],
        },
      ],
    },
  ],
};
