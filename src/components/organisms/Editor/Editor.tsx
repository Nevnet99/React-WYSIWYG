import { useEditor } from '@hooks/useEditor';
import { ItemTypes } from '@models/ItemTypes';
import { ComponentTray } from '@molecules/ComponentTray';
import { EditBlock } from '@molecules/EditBlock';
import { useDrop } from 'react-dnd';
import { Canvas, Wrapper } from './Editor.styles';

export const Editor = () => {
  const { schema } = useEditor();

  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.COMPONENT,
    drop: () => ({ name: 'Canvas' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Wrapper>
      <Canvas ref={drop}>
        {schema.map((block, index) => (
          <EditBlock key={block?.id} index={index} block={block} />
        ))}
      </Canvas>
      <ComponentTray />
    </Wrapper>
  );
};
