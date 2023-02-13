import styled from 'styled-components';

export const Tag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => `${theme.colors.background}`};
  padding: ${({ theme }) => theme.spacing(5)};
  opacity: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  z-index: 50;
`;

export const Actions = styled.div`
  button {
    all: unset;
    cursor: pointer;

    svg {
      width: ${({ theme }) => theme.spacing(15)};
      height: ${({ theme }) => theme.spacing(15)};
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  border: 1px dashed white;
  cursor: drag;
  transition: all 0.4s;

  &:hover {
    border: 1px dashed hotpink;

    & > ${Tag} {
      opacity: 1;
    }
  }
`;
