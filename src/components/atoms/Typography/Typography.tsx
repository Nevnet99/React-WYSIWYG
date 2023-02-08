import { Wrapper } from './Typography.styles';

interface Props {}

export const Typography: Props = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
