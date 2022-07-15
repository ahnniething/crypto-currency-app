import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Icon } from "../components/common";
import { useQuery } from "react-query";
import { history, info } from "../api";
import { BLACK_COLOR } from "../colors";

const Container = styled.ScrollView`
  background-color: ${BLACK_COLOR};
`;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
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

  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );
  const [victoryData, setVictoryData] = useState([]);
  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  });
  return <Container />;
};
export default Detail;
