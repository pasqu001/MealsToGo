import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View, SafeAreaView, StatusBar } from "react-native";
import { RestuarantInfoCard } from "../components/restaurant-info-card.componet";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const RestuarantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestuarantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
