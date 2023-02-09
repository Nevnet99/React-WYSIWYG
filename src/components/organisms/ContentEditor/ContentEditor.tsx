import { Wrapper } from './ContentEditor.styles';

interface Props {
  defaultValue: string | null;
}

export const ContentEditor = ({ defaultValue }: Props) => (
  <Wrapper>
    <label htmlFor="content">
      Content
      <textarea name="content" defaultValue={defaultValue || ''} />
    </label>
  </Wrapper>
);
