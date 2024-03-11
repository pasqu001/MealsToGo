import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestuarantInfoCard } from "../components/restaurant-info-card.componet";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestuarantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList 
      data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
      renderItem={() => <RestuarantInfoCard /> }
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
