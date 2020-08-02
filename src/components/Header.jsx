import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  padding: 0.7em;
  text-align: left;
  color: yellow;
`;

const Header = () => (
  <header>
    <Title>
      Task Manager
    </Title>
  </header>
);

export default Header;
