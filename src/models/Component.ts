import componentConfig from '@constants/componentConfig';
import { ReactNode } from 'react';

export interface IComponent {
  Component: JSX.Element;
  name: keyof typeof componentConfig;
  props: {
    children: ReactNode;
  };
  type: string;
}
