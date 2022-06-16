import "react-native-gesture-handler"
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
