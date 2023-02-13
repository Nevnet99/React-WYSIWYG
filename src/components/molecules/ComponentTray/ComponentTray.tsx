import { Button } from '@atoms/Button';
import { SidebarDrag } from '@atoms/SidebarDrag';
import { useEditor } from '@hooks/useEditor';
import { JsonPreview } from '@molecules/JsonPreview';
import { PropsEditor } from '@organisms/PropsEditor';
import { StyleEditor } from '@organisms/StyleEditor';
import { Tabs } from '@organisms/Tabs';
import { Buttons, Wrapper } from './ComponentTray.styles';
import { components } from './config';

export const ComponentTray = () => {
  const { activeBlock } = useEditor();
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
          <JsonPreview />
        </Tabs.Tab>
      </Tabs>
    </Wrapper>
  );
};
