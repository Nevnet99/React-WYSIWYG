import { Components } from './config';

interface Props {
  id: keyof typeof Components;
  children: React.ReactNode;
}

export const ComponentSwitch = ({ id, children, ...rest }: Props) => {
  const Component = Components[id];

  return <Component {...rest}>{children}</Component>;
};
