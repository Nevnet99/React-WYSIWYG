import { Button } from '@atoms/Button';
import { SidebarDrag } from '@atoms/SidebarDrag';
import { IComponent } from '@models/Component';
import { Tabs } from '@organisms/Tabs';
import { Dispatch, SetStateAction } from 'react';
import { Buttons, Wrapper } from './ComponentTray.styles';
import { components } from './config';

interface Props {
  updateCanvas: Dispatch<SetStateAction<IComponent[]>>;
  activeItem: IComponent | null;
}

export const ComponentTray = ({ updateCanvas, activeItem }: Props) => (
  <Wrapper>
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Components</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Styles</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Tab value="tab1">
        <Buttons>
          {components.map(({ name }, index) => (
            <SidebarDrag
              key={name}
              name={name}
              updateCanvas={updateCanvas}
              index={index}
            >
              <Button>{name}</Button>
            </SidebarDrag>
          ))}
        </Buttons>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">Tab 2 Content</Tabs.Tab>
    </Tabs>
  </Wrapper>
);
