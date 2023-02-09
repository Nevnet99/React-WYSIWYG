import { IComponentInEditor } from '@models/Component';
import { ItemTypes } from '@models/ItemTypes';
import type {
  CSSProperties,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
} from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

function getStyle(backgroundColor: string): CSSProperties {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '8rem',
    minWidth: '8rem',
    color: 'white',
    backgroundColor,
    padding: '2rem',
    paddingTop: '1rem',
    margin: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  };
}

export interface DustbinProps {
  greedy?: boolean;
  children?: ReactNode;
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
}

export interface DustbinState {
  hasDropped: boolean;
  hasDroppedOnChild: boolean;
}

export const GridDrop: FC<DustbinProps> = ({
  id,
  updateCanvas,
  greedy,
  children,
}) => {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ItemTypes.COMPONENT,
      drop(item: unknown, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop && !greedy) {
          return;
        }
        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
        console.log(id, 'ID');
        // updateCanvas((prev) => {
        //   const copy = [...prev];
        // });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild]
  );

  let backgroundColor = 'rgba(0, 0, 0, .5)';

  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'darkgreen';
  }

  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      {children}
    </div>
  );
};
