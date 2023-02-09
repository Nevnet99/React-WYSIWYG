import { GridDrop } from '@atoms/GridDrop';
import { IComponentInEditor } from '@models/Component';
import { Dispatch, SetStateAction } from 'react';
import { Wrapper } from './Grid.styles';

interface Props {
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
}

export const Grid = ({
  gridId,
  updateCanvas,
  child1,
  child2,
  child3,
  ...rest
}: Props) => (
  <Wrapper>
    <GridDrop index={0} gridId={gridId} updateCanvas={updateCanvas}>
      {child1}
    </GridDrop>
    <GridDrop index={1} gridId={gridId} updateCanvas={updateCanvas}>
      {child2}
    </GridDrop>
    <GridDrop index={2} gridId={gridId} updateCanvas={updateCanvas}>
      {child3}
    </GridDrop>
  </Wrapper>
);
