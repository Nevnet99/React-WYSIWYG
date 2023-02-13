import { GridDrop } from '@atoms/GridDrop';
import { IComponentInEditor } from '@models/Component';
import { CSSProperties } from 'react';
import { Wrapper } from './Grid.styles';

interface Props {
  id: string;
  customProps?: IComponentInEditor['props']['customProps'];
  style?: CSSProperties;
}

export const Grid = ({ id, customProps, style, ...rest }: Props) => {

  const { cols: editorCols, rows: editorRows } = customProps || {};
  const amountOfChildren = [
    ...Array(parseInt(Math.max(editorCols, editorRows), 10)).keys(),
  ] || [0, 1, 2];

  return (
    <Wrapper editorCols={editorCols} editorRows={editorRows} style={style}>
      {amountOfChildren.map((_, index) => {
        const replacementChildren = rest[`child${index}`] || [];

        return <GridDrop index={index} id={id} blocks={replacementChildren} />;
      })}
    </Wrapper>
  );
};
