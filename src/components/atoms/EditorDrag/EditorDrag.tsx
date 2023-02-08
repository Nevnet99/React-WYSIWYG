import componentConfig from '@constants/componentConfig';
import { ItemTypes } from '@models/ItemTypes';
import type { Identifier, XYCoord } from 'dnd-core';
import { ReactNode, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface Props {
  name: keyof typeof componentConfig;
  children: ReactNode;
  index: number;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
}

export const EditorDrag = ({ name, children, index, moveComponent }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const currentComponent = componentConfig[name];

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.COMPONENT,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current || !item?.index) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // ! Used the example code on the site I take no credit for this sorting algo.

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveComponent(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COMPONENT,
    item: { ...currentComponent, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId}>
      {children}
    </div>
  );
};
