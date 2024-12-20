import React, {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: green;
`;
const Map = () => {
  return (
    <Container>
      <Text>MAPS</Text>
    </Container>
  );
};

export default Map;
