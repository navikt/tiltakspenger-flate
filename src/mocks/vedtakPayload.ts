export const response = {
  isRefreshing: false,
  saker: [
    {
      id: '45jhg645jh-4k5jh6-kj54h6',
      saksPeriode: { fra: '12-12-22', til: '01-02-23' },
      behandlinger: [
        {
          type: 'Førstegangsbehandling',
          status: 'Iverksatt',
          periode: { fra: '2022-05-01', til: '2022-05-31' },
          søknad: {
            id: '12312-12313-1231',
            vedlegg: [],
            søknadsdato: 'asds',
            fra: 'asda',
            til: 'asdas',
            tiltak: {
              test: 'Er info om tiltak en egen ting her, eller ligger det i behandling?',
              tiltak: 'Et kult tiltak',
              dager:
                'Kanskje hvilke dager det er forventet at bruker møter opp?',
              periode: { fra: '11-12-12', til: '11-12-12' },
            },
          },
          vilkårsvurderinger: [
            {
              kategori: 'Institusjonsopphold',
              utfall: 'IkkeOppfylt',
              vurderinger: [
                {
                  utfall: 'IkkeOppfylt',
                  vilkår: 'Opphold på institusjon',
                  periode: { fra: '11-12-12', til: '11-12-12' },
                  kilde: 'Inst2',
                },
                {
                  utfall: 'Oppfylt',
                  vilkår: 'Opphold på institusjon',
                  periode: { fra: '11-12-12', til: '11-12-12' },
                  kilde: 'Bruker',
                },
              ],
            },
            {
              kategori: 'Statlige ytelser',
              utfall: 'Oppfylt',
              vurderinger: [
                {
                  utfall: 'Oppfylt',
                  vilkår: 'Ikke Dagpenger',
                  periode: { fra: '11-12-12', til: '11-12-12' },
                  kilde: 'Arena',
                },
                {
                  utfall: 'Oppfylt',
                  vilkår: 'Ikke AAP',
                  periode: { fra: '11-12-12', til: '11-12-12' },
                  kilde: 'Arena',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  vedtak: [
    {
      id: '435kjh34-kj43h5-k3j4h5',
      utfall: 'Avslag',
      søknadsId: 'asdsa',
    },
  ],
  utbetalinger: [
    {
      test: 'Denne må kanskje et nivå lengre ut hvis den skal gjelde alle sakene?',
      id: '345jhg-45g5-h45h45hy-5ht',
      periode: { fra: '2022-05-01', til: '2022-05-31' },
      beløp: 3000,
    },
  ],
  meldekort: 'Skal meldekort ligge på dette nivået?',
  oppmøte: 'Dette nivået? Skal dette være en felles ting med meldekort?',
  personalia: {
    fornavn: 'asds',
    etter: 'asds',
    ident: '12312312312',
    barn: [
      {
        fornavn: 'Emma',
        etternavn: 'Flaks',
        fødselsdato: '11.12.12',
        bosatt: 'Norge',
      },
    ],
  },
};
