import React from 'react';
import { Success, File } from '@navikt/ds-icons';
import { Link } from '@navikt/ds-react';

const SummarySection = () => {
  return (
    <div className="m-8 text-left">
      <h1 className="text-lg font-bold">Oppsummering</h1>
      <div className="text-sm">Søknadsdato</div>
      <div className="text-sm">21.03.22-22.04.22</div>

      <div className="mt-8">
        <h1 className="text-sm font-bold">Registrerte tiltak</h1>
        <div>Gruppe AMO</div>
        <div>Joblearn</div>
        <div>40% - 2 dager</div>
        <div className="flex items-center">
          <Success />
          <span className="ml-2">Status: Godkjent tiltaksplass</span>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-sm font-bold">Barn</h1>
        <div className="mt-2">
          <div>Emma Flaks (7)</div>
          <div>123456789</div>
          <div>Bosatt: Norge</div>
        </div>
        <div className="mt-2">
          <div>Emil Flaks (7)</div>
          <div>123456789</div>
          <div>Bosatt: Norge</div>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <h1 className="text-sm font-bold">Vedlegg</h1>
        <Link>
          <File />
          <span>Dokument 1</span>
        </Link>
        <Link>
          <File />
          <span>Dokument 2</span>
        </Link>
        <Link>
          <File />
          <span>Dokument 3</span>
        </Link>
      </div>
    </div>
  );
};

export default SummarySection;
