import componentConfig from '@constants/componentConfig';
import { useEditor } from '@hooks/useEditor';
import { ItemTypes } from '@models/ItemTypes';
import { ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  componentType: keyof typeof componentConfig;
  children: ReactNode;
}

export const SidebarDrag = ({ componentType, children }: Props) => {
  const uniqueId = uuidv4();
  const currentComponent = componentConfig[componentType];
  const block = { ...currentComponent, id: uniqueId };
  useEditor();
  const { setSchema } = useEditor();

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.COMPONENT,
    item: block,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        setSchema((prev) => [...prev, block]);
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
