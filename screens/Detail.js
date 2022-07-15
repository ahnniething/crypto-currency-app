import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { history, info } from "../api";
import { Icon } from "../components/Coin";

const Container = styled.ScrollView``;

const Detail = ({ navigation, route:{params: {symbol}} }) => {
    useEffect(()=> {
        navigation.setOptions({
            title: symbol
        })
    }, []);
  return <Container />;
};
export default Detail;
