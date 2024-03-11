/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestuarantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
  ClosedTemporarilyText,
} from "./restaurant-info-card.styles";

export const RestuarantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hummus Bean Dip",
    icon = open,
    photos = ["https://picsum.photos/700"],
    address = "200 some random Street New York NY",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestuarantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            <ClosedTemporarilyText>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </ClosedTemporarilyText>
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={icon} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestuarantCard>
  );
};
