import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(50)};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing(20)};
  ${({ preview }) => (preview ? 'grid-column: 1 / 3;' : 'grid-column: 1 / 2;')};

  button {
    all: unset;
    width: auto;
    cursor: pointer;
  }
`;
