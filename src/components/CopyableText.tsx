import React, { FC } from 'react';
import { Copy } from '@navikt/ds-icons';

const CopyableText: FC<{ text: string }> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button onClick={copyToClipboard} className="flex">
      {text}
      <Copy className="ml-3" />
    </button>
  );
};

export default CopyableText;
