import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  width: 30%;
  position: absolute;
  right: 0;
`;

export const TriggerWrapper = styled(motion.div)`
  position: absolute;
  top: 100px;
  left: -32px;
  display: flex;

  button {
    width: auto;
  }
`;

export const Header = styled.div`
  background: ${({ theme }) => `${theme.colors.secondaryBackground}`};
  padding: ${({ theme }) => theme.spacing(20)};
  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const Buttons = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(20)};

  li {
    border: 1px dashed ${({ theme }) => theme.colors.outline};
    list-style: none;
    width: 50%;
    display: flex;
    place-content: center;
    place-items: center;

    & > * {
      margin: 0;
      pointer-events: none;
    }
  }
`;
