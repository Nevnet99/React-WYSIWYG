import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const StyledTabsList = styled(Tabs.List)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};

  button {
    width: auto;
    min-width: 100px;
    background: none;
    border: none;
    border-radius: 0;
    margin: 0;

    &[data-state='active'] {
      border-bottom: 2px solid ${({ theme }) => theme.colors.positive};
    }
  }
`;

export const StyledTabTrigger = styled(Tabs.Trigger)``;

export const StyledTabsContent = styled(Tabs.Content)``;
