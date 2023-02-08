import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 200px;

  & > div {
    border: 1px dashed white;
  }
`;
