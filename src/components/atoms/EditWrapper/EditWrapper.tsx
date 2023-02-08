import { IComponent } from '@models/Component';
import { Dispatch, SetStateAction } from 'react';
import { Wrapper } from './EditWrapper.styles';

interface Props extends IComponent {
  setActiveItem: Dispatch<SetStateAction<IComponent | null>>;
  children: React.ReactNode;
}

export const EditWrapper = ({
  setActiveItem,
  children,
  ...component
}: Props) => (
  <Wrapper onClick={() => setActiveItem(component)}>{children}</Wrapper>
);
