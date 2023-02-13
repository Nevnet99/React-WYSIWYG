import { ComponentSwitch } from '@atoms/ComponentSwitch';
import { EditWrapper } from '@atoms/EditWrapper';
import { EditorDrag } from '@atoms/EditorDrag';

interface Props {}

export const EditBlock: Props = ({ block, index, gridChild }) => {
  const { id, componentType, props, ...rest } = block;

  return (
    <EditorDrag block={block}>
      <EditWrapper {...block}>
        <ComponentSwitch
          id={id}
          componentType={componentType}
          props={props}
          {...rest}
          {...props?.editableProps}
        />
      </EditWrapper>
    </EditorDrag>
  );
};
