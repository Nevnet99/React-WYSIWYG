import { ComponentSwitch } from '@atoms/ComponentSwitch';
import { EditWrapper } from '@atoms/EditWrapper';
import { EditorDrag } from '@atoms/EditorDrag';
import { IComponentInEditor } from '@models/Component';
import { ItemTypes } from '@models/ItemTypes';
import { ComponentTray } from '@molecules/ComponentTray';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Canvas, Wrapper } from './Editor.styles';

export const Editor = () => {
  const [webSchema, setWebSchema] = useState<IComponentInEditor[]>([]);
  const [activeItem, setActiveItem] = useState<IComponentInEditor | null>(null);
  const [collectedProps, drop] = useDrop(() => ({
    accept: ItemTypes.COMPONENT,
    drop: () => ({ name: 'Canvas' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const moveComponent = useCallback((dragIndex: number, hoverIndex: number) => {
    setWebSchema((prev) =>
      update(prev, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prev[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <Wrapper>
      <Canvas ref={drop}>
        {webSchema.map((block, index) => {
          const { name, props } = block;
          return (
            <EditorDrag
              key={name}
              name={name}
              moveComponent={moveComponent}
              index={index}
            >
              <EditWrapper setActiveItem={setActiveItem} {...block}>
                <ComponentSwitch id={name} {...props} />
              </EditWrapper>
            </EditorDrag>
          );
        })}
      </Canvas>
      <ComponentTray updateCanvas={setWebSchema} activeItem={activeItem} />
    </Wrapper>
  );
};
