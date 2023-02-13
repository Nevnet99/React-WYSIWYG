import { useEditor } from '@hooks/useEditor';
import { IComponentInEditor } from '@models/Component';
import { ItemTypes } from '@models/ItemTypes';
import { EditBlock } from '@molecules/EditBlock';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { GridDropContainer } from './GridDrop.styles';

export interface DustbinProps {
  greedy?: boolean;
  children?: ReactNode;
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
}

export interface DustbinState {
  hasDropped: boolean;
  hasDroppedOnChild: boolean;
}

export const GridDrop: FC<DustbinProps> = ({ id, index, greedy, blocks }) => {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const { schema, updateBlock, removeBlock, getBlock } = useEditor();

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ItemTypes.COMPONENT,
      drop(item: unknown, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop && !greedy) {
          return;
        }

        const { block } = getBlock(id);

        const prev = block?.props[`child${index}`] || [];
        updateBlock(block?.id, {
          props: {
            ...block.props,
            [`child${index}`]: [
              ...prev,
              { ...item, gridChild: true, gridId: id },
            ],
          },
        });

        // remove duplicate
        removeBlock(item?.id);

        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild, schema]
  );

  return (
    <GridDropContainer blocks={blocks && blocks.length} ref={drop}>
      {blocks &&
        blocks.map((block, index) => {
          const { type } = block || {};
          return (
            <EditBlock
              key={`${type}${index}-in-grid`}
              index={index}
              block={block}
            />
          );
        })}
    </GridDropContainer>
  );
};
