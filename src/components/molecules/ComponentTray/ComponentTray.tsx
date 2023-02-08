import { useState } from 'react';
import {
  Buttons,
  Header,
  Wrapper
} from './ComponentTray.styles';
import { components } from './config';

const animationVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  closed: {
    x: '150%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const ComponentTray = () => {
  const [isOpen, isClosed] = useState(false);

  return (
    <Wrapper variants={animationVariants} animate={isOpen ? 'open' : 'open'}>
      <Header>
        <h2>Components</h2>
      </Header>

      <Buttons>
        {components.map(({ id, Component, children }) => (
          <li>
            <Component key={id}>{children}</Component>
          </li>
        ))}
      </Buttons>
    </Wrapper>
  );
};
