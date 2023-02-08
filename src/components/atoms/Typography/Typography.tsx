import { FC, PropsWithChildren } from 'react';
import { Wrapper } from './Typography.styles';

export const Typography: FC<PropsWithChildren> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
