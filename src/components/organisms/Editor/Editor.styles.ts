import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100vh;
`;

export const Canvas = styled.div`
  background: ${({ theme }) => theme.colors.canvas};
`;
