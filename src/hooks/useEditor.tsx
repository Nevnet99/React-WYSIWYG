import { IComponentInEditor } from '@models/Component';

import update from 'immutability-helper';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IEditorContext {
  schema: IComponentInEditor[];
  activeBlock: IComponentInEditor | Record<string, never>;
  setSchema: Dispatch<SetStateAction<IComponentInEditor[]>>;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  setActiveBlock: (block: IComponentInEditor) => void;
  getBlock: (id: string) => {
    index: number;
    block: IComponentInEditor | undefined;
  };
  removeBlock: (id: string) => void;
  updateBlock: (
    elementId: string,
    fields: Partial<IComponentInEditor>,
    gridId: string
  ) => void;
}

const EditorContext = createContext<IEditorContext>({} as IEditorContext);

const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [schema, setSchema] = useState<IComponentInEditor[]>([]);
  const [activeBlock, setActiveBlock] = useState<
    IComponentInEditor | Record<string, never>
  >({});

  const moveComponent = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setSchema((prev) =>
        update(prev, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prev[dragIndex]],
          ],
        })
      );
    },
    [schema]
  );

  const getBlock = useCallback(
    (id: string) => ({
      block: schema.find((block) => block.id === id),
      index: schema.findIndex((block) => block.id === id),
    }),
    [schema]
  );

  const removeBlock = useCallback(
    (id: string) => {
      if (!id) return;
      setSchema((prev) => prev.filter((block) => block.id !== id));
    },
    [schema]
  );

  const updateBlock = useCallback(
    (
      elementId: string,
      fields: Partial<IComponentInEditor>,
      gridId: string
    ) => {
      setSchema((curr) => {
        if (gridId) {
          const gridBlock = curr.find((block) => block.id === gridId);
          const gridIndex = curr.findIndex((block) => block.id === gridId);
          if (!gridBlock) return;

          const maxBlocks = Math.max(
            gridBlock.props?.customProps.cols,
            gridBlock.props?.customProps?.rows
          );
          let currentBlock;

          for (let index = 0; index < maxBlocks; index++) {
            const blocks = gridBlock?.props[`child${index}`] || [];

            if (blocks.length) {
              currentBlock = {
                block: blocks.find((block) => block.id === elementId),
                index: blocks.findIndex((block) => block.id === elementId),
                childIndex: index,
              };
            }
          }

          const newArray = [...curr];
          newArray[gridIndex].props[`child${currentBlock.childIndex}`][
            currentBlock.index
          ] = {
            ...newArray[gridIndex].props[`child${currentBlock.childIndex}`][
              currentBlock.index
            ],
            ...fields,
          };

          return newArray;
        }

        const newArray = [...curr];
        const blockIndex = newArray.findIndex(
          (block) => block.id === elementId
        );

        newArray[blockIndex] = {
          ...newArray[blockIndex],
          ...fields,
        };

        return newArray;
      });
    },
    [schema]
  );

  const value = useMemo(
    () => ({
      schema,
      activeBlock,
      setSchema,
      moveComponent,
      setActiveBlock,
      getBlock,
      removeBlock,
      updateBlock,
    }),
    [
      schema,
      activeBlock,
      setSchema,
      moveComponent,
      setActiveBlock,
      getBlock,
      removeBlock,
      updateBlock,
    ]
  );

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

const useEditor = () => {
  const context = useContext(EditorContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export { EditorProvider, useEditor };
