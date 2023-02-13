import { useEditor } from '@hooks/useEditor';
import { ItemTypes } from '@models/ItemTypes';
import { ComponentTray } from '@molecules/ComponentTray';
import { EditBlock } from '@molecules/EditBlock';
import { PreviewBlock } from '@molecules/PreviewBlock';
import { Toolbar } from '@molecules/Toolbar';
import { useDrop } from 'react-dnd';
import { Canvas, Wrapper } from './Editor.styles';

export const Editor = () => {
  const { schema, preview } = useEditor();

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
      <Toolbar />
      <Canvas preview={preview} ref={drop}>
        {schema.map((block, index) =>
          preview ? (
            <PreviewBlock key={block?.id} index={index} block={block} />
          ) : (
            <EditBlock key={block?.id} index={index} block={block} />
          )
        )}
      </Canvas>
      {!preview && <ComponentTray />}
    </Wrapper>
  );
};
