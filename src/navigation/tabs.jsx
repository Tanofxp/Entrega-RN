import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import colors from "../utils/colors";
import { Ionicons, Feather, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <BottomTab.Screen
        name="Places"
        component={PlaceListScreen}
        options={{ title: "Lista de PetShop",
        tabBarIcon: ({ focused }) => (
           <Ionicons
             name={focused ? "home" : "home-outline"}
             size={24}
             color={colors.primary}
           />
         ),
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
     name="PlaceDetail"
     component={PlaceDetailScreen}
     options={{ title: "Detalles de la Tienda",
     tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "list-sharp" : "list-outline"}
        size={24}
        color={colors.primary}
      />
      ),
     }}
      ></BottomTab.Screen>

    <BottomTab.Screen
     name="NewPlace"
     component={NewPlaceScreen}
     options={{ title: "Agregar tienda",
     tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "add" : "add-outline"}
          size={24}
          color={colors.primary}
        />
      ),
     }}
    ></BottomTab.Screen>
      
    <BottomTab.Screen 
      name="Maps" 
      component={MapsScreen}      
      options={{ title: "Mapa",
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons 
        name="google-maps" 
        size={24}              
        color={colors.primary}
        />
        ),
      }} 
     />
    </BottomTab.Navigator>
  );
};

export default Tabs;
