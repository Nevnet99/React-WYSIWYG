import * as Tabs from '@radix-ui/react-tabs';
import {
  StyledTabTrigger,
  StyledTabsContent,
  StyledTabsList,
} from './Tabs.styled';

interface Props {
  children: React.ReactNode;
  defaultValue: string;
}

export const TabsElement = ({ children, defaultValue, ...rest }: Props) => (
  <Tabs.Root defaultValue={defaultValue} {...rest}>
    {children}
  </Tabs.Root>
);

TabsElement.List = StyledTabsList;
TabsElement.Trigger = StyledTabTrigger;
TabsElement.Tab = StyledTabsContent;
