export const response = {
  personalia: {
    fornavn: 'Fornavn',
    etternavn: 'Etternavn',
    ident: '123454',
    barn: [
      {
        fornavn: 'Emil',
        etternavn: 'Flaks',
        ident: '987654',
        bosted: 'NORGE',
      },
      {
        fornavn: 'Emma',
        etternavn: 'Flaks',
        ident: '987655',
        bosted: 'NORGE',
      },
    ],
  },
  behandlinger: [
    {
      id: 'behandlingId',
      søknad: {},
      tiltak: {
        arrangør: 'Joblearn',
        navn: 'Gruppe AMO',
        periode: {
          fra: '2022-04-01',
          til: '2022-04-20',
        },
        prosent: 80,
        dagerIUken: 4,
        status: 'Godkjent',
      },
      periode: {
        fra: '2022-04-01',
        til: '2022-04-20',
      },
      vurderinger: [
        {
          tittel: 'Statlige ytelser',
          utfall: 'Uavklart',
          vilkrsvurderinger: [
            {
              utfall: 'Oppfylt',
              periode: {
                fra: '2022-04-01',
                til: '2022-04-20',
              },
              vilkår: 'Dagpenger',
              kilde: 'Arena',
            },
            {
              utfall: 'Oppfylt',
              periode: {
                fra: '2022-04-01',
                til: '2022-04-20',
              },
              vilkår: 'AAP',
              kilde: 'Arena',
            },
            {
              utfall: 'Uavklart',
              periode: {
                fra: '2022-04-01',
                til: '2022-04-20',
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
