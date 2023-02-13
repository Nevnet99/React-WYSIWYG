import { Components } from '@atoms/ComponentSwitch/config';
import componentConfig from '@constants/componentConfig';

type Style = {
  style: string;
  type: string;
};

type ActiveStyle = {
  style: string;
  value: string;
};

export type CustomPropOptions = {
  cols: number;
  rows: number;
  label: string;
  src: string;
  alt: string;
};

export interface IComponent {
  Component: JSX.Element;
  name: keyof typeof componentConfig;
  componentType: keyof typeof Components;
  gridId?: string | undefined;
  gridChild?: boolean;
  props: {
    children?: string;
    children0: IComponentInEditor[];
    children1: IComponentInEditor[];
    children2: IComponentInEditor[];
    customProps?: Partial<CustomPropOptions>;
    style: ActiveStyle[];
    blocks: IComponentInEditor[];
    editableProps: Partial<{
      type: string;
      name: string;
      input: string;
      label: string;
    }>
  };

  type: string;
  styles: Style[];
}

export interface IComponentInEditor extends IComponent {
  id: string;
}
