import componentConfig from '@constants/componentConfig';

type Style = {
  style: string;
  type: string;
};

type ActiveStyle = {
  style: string;
  value: string;
};

type CustomPropOptions = {
  cols: number;
  rows: number;
  label: string;
};

export interface IComponent {
  Component: JSX.Element;
  name: keyof typeof componentConfig;
  props: {
    children: string;
    children0: IComponent[];
    children1: IComponent[];
    children2: IComponent[];
    customProps?: Partial<CustomPropOptions>;
    style: ActiveStyle[];
  };
  type: string;
  styles: Style[];
}

export interface IComponentInEditor extends IComponent {
  id: string;
}
