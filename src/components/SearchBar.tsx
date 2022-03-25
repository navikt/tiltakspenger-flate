// hentet fra helse-speil
import React, { useState } from 'react';
import { Search as SearchIcon } from '@navikt/ds-icons';

interface SearchBarProps {
  onSearch: (value: string) => Promise<void>;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState('');

  const search = () => {
    if (value.length > 0) {
      onSearch(value.replace(/\s/g, '')).then(() => setValue(''));
    }
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && value.length > 0) {
      search();
    }
  };

  const onChange = (event: React.ChangeEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="flex mx-4 my-2">
      <div className="flex border border-gray-200 place-content-center rounded">
        <input
          className="bg-black focus:outline-none text-white p-2"
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={value}
        />
        <button onClick={search}>
          <SearchIcon
            aria-label="Søk fødselsnummer"
            className="m-1  text-gray-200"
          />
        </button>
      </div>
    </div>
  );
};
