import { useEffect } from "react";
import styled from "styled-components/native";
import { Icon } from "../components/common"

const Container = styled.ScrollView``;

const Detail = ({ navigation, route:{params: {symbol}} }) => {
    useEffect(() => {
        navigation.setOptions({
          headerTitle: () => (
            <Icon
              source={{
                uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
              }}
            />
          ),
        });
      }, []);
  return <Container />;
};
export default Detail;
