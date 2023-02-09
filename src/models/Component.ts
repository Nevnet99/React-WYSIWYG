import componentConfig from '@constants/componentConfig';

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
    children: string;
    style: ActiveStyle[];
  };
  type: string;
  styles: Style[];
}

export interface IComponentInEditor extends IComponent {
  id: string;
}
