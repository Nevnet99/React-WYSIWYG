import { Button } from '@atoms/Button';
import { useEditor } from '@hooks/useEditor';
import { IComponentInEditor } from '@models/Component';
import { Dispatch, SetStateAction } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { Actions, Tag, Wrapper } from './EditWrapper.styles';

interface Props extends IComponentInEditor {
  setActiveItem: Dispatch<SetStateAction<IComponentInEditor | null>>;
  children: React.ReactNode;
}

export const EditWrapper = ({ children, ...component }: Props) => {
  const { setActiveBlock, removeBlock } = useEditor();
  const { id, componentType } = component;

  return (
    <Wrapper
      onClick={(evt) => {
        evt.stopPropagation();
        console.log(component);
        setActiveBlock(component);
      }}
    >
      <Tag>
        {componentType}
        <Actions>
          <Button
            type="button"
            onClick={(evt) => {
              removeBlock(id);
            }}
          >
            <MdOutlineDelete />
          </Button>
        </Actions>
      </Tag>
      {children}
    </Wrapper>
  );
};
