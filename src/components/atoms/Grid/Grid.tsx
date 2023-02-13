import { GridDrop } from '@atoms/GridDrop';
import { IComponentInEditor } from '@models/Component';
import { CSSProperties } from 'react';
import { Wrapper } from './Grid.styles';

type Keys = 'child0' | 'child1' | 'child2';

interface Props {
  id: string;
  customProps?: IComponentInEditor['props']['customProps'];
  style?: CSSProperties;
  child0?: IComponentInEditor[];
  child1?: IComponentInEditor[];
  child2?: IComponentInEditor[];
}






export const Grid = ({ id, customProps, style, ...rest }: Props) => {

  const { cols: editorCols, rows: editorRows } = customProps || {};
  const amountOfChildren = [
    ...Array(Math.max(editorCols, editorRows)).keys(),
  ] || [0, 1, 2];

  return (
    <Wrapper editorCols={editorCols} editorRows={editorRows} style={style}>
      {amountOfChildren.map((_, index) => {
        const key: Keys = `child${index as 0 | 1 | 2}`;
        if (!key) return;
        const replacementChildren = rest[key] || [];

        return <GridDrop index={index} id={id} blocks={replacementChildren} />;
      })}
    </Wrapper>
  );
};
