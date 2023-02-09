import { IComponentInEditor } from '@models/Component';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Components } from './config';

interface Props {
  id: keyof typeof Components;
  children: ReactNode;
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
  gridId: string;
}

export const ComponentSwitch = ({ id, children, ...rest }: Props) => {
  const Component = Components[id];

  return <Component {...rest}>{children}</Component>;
};
