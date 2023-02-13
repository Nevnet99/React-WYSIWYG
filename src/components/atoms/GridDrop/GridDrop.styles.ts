import styled from 'styled-components';

export const GridDropContainer = styled.div<{
  blocks: boolean;
  preview: boolean;
}>`
  ${({ blocks }) =>
    !blocks
      ? `  
      min-height: 100px;  
      `
      : ``};
  ${({ preview }) => (!preview ? ` border: 1px dashed #e0e0e0;` : ``)};
`;
