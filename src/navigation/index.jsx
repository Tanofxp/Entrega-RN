import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

import Tabs from './tabs'


import AuthNavigator from "./auth";



const AppNavigation = () => {
  const userId = useSelector((state) => state.auth.auth?.userId);
  const state = useSelector((state) => state.auth);
  console.log('state from navigation', state)
  console.log('userID from navigation', userId)


  return (
    <NavigationContainer>
        {userId ? <Tabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;