import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(20)};
  overflow-y: scroll;
  max-height: calc(100vh - 5vh);
  padding-bottom: 5vh;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(30)};
  }

  label {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;
export const StyledLabel = styled.div`
  text-transform: capitalize;
`;
