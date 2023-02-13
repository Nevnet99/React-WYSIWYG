import { IComponentInEditor } from '@models/Component';
import { FC, ReactNode } from 'react';
import { Components, voidComponents } from './config';

interface Props {
  componentType: keyof typeof Components;
  children?: ReactNode;
  props: IComponentInEditor['props'];
}

export const ComponentSwitch = ({
  componentType,
  children,
  props,
  ...rest
}: Props) => {
  if (!componentType) return null;
  const Component: FC<any> = Components[componentType];
  const { blocks } = props || [];
  const isVoid = voidComponents.includes(componentType);

  return isVoid ? (
    <Component {...rest} {...props} />
  ) : (
    <Component {...rest} {...props}>
      {children}
      {blocks &&
        blocks.map((block) => {
          const {
            componentType: blockComponentType,
            props: blockProps,
            ...blockRest
          } = block || {};

          return (
            <ComponentSwitch
              componentType={blockComponentType}
              props={blockProps}
              {...blockRest}
              {...blockProps?.editableProps}
            />
          );
        })}
    </Component>
  );
};
