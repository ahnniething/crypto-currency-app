import React from "react";
import styled from "styled-components/native";
import {Text, BtnText} from '../components/common'
import { BLACK_COLOR } from "../colors";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  color: white;
`;

const Wrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.TouchableOpacity``;

const Login = ({ navigation: { navigate } }) => (
  <Container>
    <Wrapper>
      <Text>Don't have an account? </Text>
      <Btn onPress={() => navigate("Join")}>
        <BtnText>Join &rarr;</BtnText>
      </Btn>
    </Wrapper>
  </Container>
);
export default Login;