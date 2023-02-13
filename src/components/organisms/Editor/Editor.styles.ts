import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: ${({ theme }) => theme.spacing(50)}; 1fr;
  height: 100vh;
`;

export const Canvas = styled.div`
  background: ${({ theme }) => theme.colors.canvas};
  padding: ${({ theme }) => theme.spacing(100)}
    ${({ theme }) => theme.spacing(30)};
  grid-row: 2 / 3;
  ${({ preview }) => (preview ? 'grid-column: 1 / 3;' : 'grid-column: 1 / 2;')};
`;
