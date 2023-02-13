import { Button } from '@atoms/Button';
import { useEditor } from '@hooks/useEditor';
import { useState } from 'react';
import { Wrapper } from './JsonPreview.styles';

export const JsonPreview = () => {
  const { schema, setSchema } = useEditor();
  const [importValue, setImportValue] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
  };

  const handleImport = () => {
    console.log(JSON.parse(importValue));
    setSchema(JSON.parse(importValue));
  };

  return (
    <Wrapper>
      <Button onClick={handleCopy}>Copy</Button>
      <pre>{JSON.stringify(schema, null, 2)}</pre>

      <textarea
        onChange={(evt) => setImportValue(evt.target.value)}
        value={importValue}
      />
      <Button onClick={handleImport}>Import</Button>
    </Wrapper>
  );
};
