import styled from 'styled-components';
import { ButtonProps } from './Button';

export const Wrapper = styled.button<Pick<ButtonProps, 'variant'>>`
  background: ${({ variant, theme }) =>
    variant === 'positive' &&
    `${theme.colors.positive}; color: ${theme.colors.positiveText}`};

  svg {
    width: ${({ theme }) => theme.spacing(24)};
    height: ${({ theme }) => theme.spacing(24)};
  }
`;
