import componentConfig from '@constants/componentConfig';
import { IComponent } from '@models/Component';
import { ItemTypes } from '@models/ItemTypes';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useDrag } from 'react-dnd';

interface Props {
  name: keyof typeof componentConfig;
  children: ReactNode;
  updateCanvas: Dispatch<SetStateAction<IComponent[]>>;
}

export const SidebarDrag = ({ name, updateCanvas, children }: Props) => {
  const currentComponent = componentConfig[name];

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.COMPONENT,
    item: { ...currentComponent },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        updateCanvas((prev) => [...prev, item]);
      }
    },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected}>
      {children}
    </div>
  );
};
