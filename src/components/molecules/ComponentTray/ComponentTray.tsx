import { Button } from '@atoms/Button';
import { SidebarDrag } from '@atoms/SidebarDrag';
import { IComponentInEditor } from '@models/Component';
import { StyleEditor } from '@organisms/StyleEditor';
import { Tabs } from '@organisms/Tabs';
import { Dispatch, SetStateAction } from 'react';
import { Buttons, Wrapper } from './ComponentTray.styles';
import { components } from './config';

interface Props {
  webSchema: IComponentInEditor[];
  updateCanvas: Dispatch<SetStateAction<IComponentInEditor[]>>;
  activeItem: IComponentInEditor | null;
}

export const ComponentTray = ({
  webSchema,
  updateCanvas,
  activeItem,
}: Props) => (
  <Wrapper>
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Components</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Styles / Content</Tabs.Trigger>
        <Tabs.Trigger value="tab3">JSON</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Tab value="tab1">
        <Buttons>
          {components.map(({ name }) => (
            <SidebarDrag key={name} name={name} updateCanvas={updateCanvas}>
              <Button>{name}</Button>
            </SidebarDrag>
          ))}
        </Buttons>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">
        <h2>
          {!activeItem
            ? 'Please select a component to start editing'
            : `Editing: ${activeItem?.name}`}
        </h2>
        {activeItem && (
          <StyleEditor updateCanvas={updateCanvas} activeItem={activeItem} />
        )}
      </Tabs.Tab>
      <Tabs.Tab value="tab3">
        <pre>{JSON.stringify(webSchema, null, 2)}</pre>
      </Tabs.Tab>
    </Tabs>
  </Wrapper>
);
