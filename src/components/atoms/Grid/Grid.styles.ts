import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  & > div {
    border: 1px dashed hotpink;
    min-height: 100px;
  }
`;
