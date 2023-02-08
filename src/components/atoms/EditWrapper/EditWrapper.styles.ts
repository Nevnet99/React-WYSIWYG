import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px dashed white;
  cursor: drag;

  & > * {
    pointer-events: none;
  }
`;
