import { Button } from '@atoms/Button';
import { useEditor } from '@hooks/useEditor';
import { MdPreview } from 'react-icons/md';
import { Wrapper } from './Toolbar.styles';

interface Props {}

export const Toolbar: Props = () => {
  const { preview, setPreview } = useEditor();

  return (
    <Wrapper preview={preview}>
      <Button
        variant="icon"
        title="Preview"
        onClick={() => setPreview(!preview)}
      >
        <MdPreview />
      </Button>
    </Wrapper>
  );
};
