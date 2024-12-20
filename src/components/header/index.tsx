import React, {Text} from 'react-native';
import styled from 'styled-components/native';

const HeaderContaner = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const Header = () => {
  return (
    <HeaderContaner>
      <Text>Wash Car Play</Text>
    </HeaderContaner>
  );
};

export default Header;
