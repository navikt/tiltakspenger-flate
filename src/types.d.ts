interface ImportMeta {
  env: { MODE: string; BASE_URL: string };
}

declare module '@navikt/ds-react-internal' {
  import { FC, ReactNode } from 'react';
  import {
    Dropdown as RealDropdown,
    Header as _Header,
  } from '@navikt/ds-react-internal';
  type FixedDropdownType = FC<{ children: ReactNode }> & {
    Toggle: ToggleType;
    Menu: MenuType;
  };
  export const Dropdown: FixedDropdownType = RealDropdown;
  export const Header = _Header;
}
