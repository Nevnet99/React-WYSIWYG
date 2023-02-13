import { ComponentSwitch } from '@atoms/ComponentSwitch';

interface Props {}

export const PreviewBlock: Props = ({ block }) => {
  const { id, componentType, props, ...rest } = block;

  return (
    <ComponentSwitch
      id={id}
      componentType={componentType}
      props={props}
      {...rest}
      {...props?.editableProps}
    />
  );
};
