import { MouseEvent, ReactNode } from 'react';
import { Wrapper } from './Button.styles';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  variant?: 'positive';
  onClick?: (evt?: MouseEvent) => void;
}

export const Button = ({ type, variant, children, ...props }: ButtonProps) => (
  <Wrapper variant={variant} {...props}>
    {children}
  </Wrapper>
);

Button.defaultProps = {
  variant: null,
};
