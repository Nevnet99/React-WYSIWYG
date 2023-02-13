import styled from 'styled-components';

// change div to be more semantic where possible
export const Wrapper = styled.div<{ editorCols: string; editorRows: string }>`
  position: relative;
  display: grid;

  opacity: 0.99;
  grid-template-columns: repeat(${({ editorCols }) => editorCols}, 1fr);
  grid-template-rows: repeat(${({ editorRows }) => editorRows}, 1fr);
`;
