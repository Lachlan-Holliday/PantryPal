import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native';
import {MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import merge from 'deepmerge';


import { Colors } from '../constants/Colors';

const customDarkTheme = {...MD3DarkTheme, colors: Colors.dark}
const customLightTheme = {...MD3LightTheme, colors: Colors.light}

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export default function RootLayout() {

  const colorScheme = useColorScheme();


  const paperTheme =
    colorScheme === 'dark'
      ? CombinedDefaultTheme
      : CombinedDarkTheme

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
      <Stack>
        <Stack.Screen name='index'/>
      </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
