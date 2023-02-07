import { ReactNode } from 'react';
import { Wrapper } from './Button.styles';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'positive';
}

export const Button = ({ variant, children, ...props }: ButtonProps) => (
  <Wrapper variant={variant} {...props}>
    {children}
  </Wrapper>
);

Button.defaultProps = {
  variant: null,
};
