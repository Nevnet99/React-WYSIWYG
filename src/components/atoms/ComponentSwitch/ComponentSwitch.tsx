import { Components } from './config';

interface Props {
  id: keyof typeof Components;
  children: React.ReactNode;
}

export const ComponentSwitch = ({ id, children }: Props) => {
  const Component = Components[id];

  return <Component>{children}</Component>;
};
