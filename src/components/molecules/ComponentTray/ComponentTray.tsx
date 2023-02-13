import { Button } from '@atoms/Button';
import { SidebarDrag } from '@atoms/SidebarDrag';
import { useEditor } from '@hooks/useEditor';
import { PropsEditor } from '@organisms/PropsEditor';
import { StyleEditor } from '@organisms/StyleEditor';
import { Tabs } from '@organisms/Tabs';
import { Buttons, Wrapper } from './ComponentTray.styles';
import { components } from './config';

export const ComponentTray = () => {
  const { schema, activeBlock } = useEditor();
  return (
    <Wrapper>
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Components</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Styles / Content</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Custom properties</Tabs.Trigger>
          <Tabs.Trigger value="tab4">JSON</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Tab value="tab1">
          <Buttons>
            {components.map(({ componentType }) => (
              <SidebarDrag key={componentType} componentType={componentType}>
                <Button>{componentType}</Button>
              </SidebarDrag>
            ))}
          </Buttons>
        </Tabs.Tab>
        <Tabs.Tab value="tab2">{activeBlock && <StyleEditor />}</Tabs.Tab>
        <Tabs.Tab value="tab3">
          <PropsEditor />
        </Tabs.Tab>
        <Tabs.Tab value="tab4">
          <pre>{JSON.stringify(schema, null, 2)}</pre>
        </Tabs.Tab>
      </Tabs>
    </Wrapper>
  );
};
