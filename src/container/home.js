import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
function HomePage() {
  return (
    <CenterHeader>
      <Header as="h1">Home Page</Header>
      <p>Welcome React beginner!</p>
    </CenterHeader>
  );
}

export default HomePage;

export const CenterHeader = styled.div`
  text-align: center;
  padding-top: 30px;
`;