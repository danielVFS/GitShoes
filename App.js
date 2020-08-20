import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/router';

export default function App() {
  let [fontLoaded] = useFonts({
    Anton_400Regular,
  });
 
  if(!fontLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="ligth" backgroundColor="#000" translucent={true}/>
      <Routes />
    </>
  );
}