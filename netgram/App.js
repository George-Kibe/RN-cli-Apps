import "react-native-gesture-handler"
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { withAuthenticator } from "aws-amplify-react-native"
import Navigator from "./src/navigation"

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
