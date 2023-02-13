import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing(20)};
  overflow-y: scroll;

  &:not(:last-child) {
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  pre {
    max-height: 50vh;
    margin-top: ${({ theme }) => theme.spacing(20)};
    padding: ${({ theme }) => theme.spacing(10)};
  }

  textarea {
    margin-top: ${({ theme }) => theme.spacing(30)};
    min-height: 300px;
  }
`;
