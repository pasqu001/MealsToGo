import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestuarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const RestaurantScreen = () => {
  return <RestuarantsScreen />;
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings Screen!</Text>
    </SafeArea>
  );
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map Screen!</Text>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
