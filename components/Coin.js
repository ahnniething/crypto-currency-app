import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";


const Wrapper = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;
const CoinName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Icon = styled.Image`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const Coin = ({ symbol, index }) => {
  return (
    <Wrapper style={{ flex: 0.31 }}>
      <CoinName>{symbol}</CoinName>
    </Wrapper>
  );
};
export default Coin;