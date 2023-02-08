import componentConfig from '@constants/componentConfig';
import { ReactNode } from 'react';

type Style = {
  style: string;
  type: string;
};

type ActiveStyle = {
  style: string;
  value: string;
};

export interface IComponent {
  Component: JSX.Element;
  name: keyof typeof componentConfig;
  props: {
    children: ReactNode;
    styles: ActiveStyle[];
  };
  type: string;
  styles: Style[];
}

export interface IComponentInEditor extends IComponent {
  id: string;
}
