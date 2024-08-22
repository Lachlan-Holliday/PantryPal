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
import { useTheme } from '../hooks/useTheme';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const customDarkTheme = {...MD3DarkTheme, colors: Colors.dark}
const customLightTheme = {...MD3LightTheme, colors: Colors.light}

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);


export default function SignIn() {

  // const colorScheme = useColorScheme();
  const {colorScheme} = useTheme();



  const paperTheme =
    colorScheme === 'dark'
      ? CombinedDarkTheme
      : CombinedDefaultTheme

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
      <Stack  screenOptions={{
              // Hide the header for all other routes.
              headerShown: false,
            }}>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      </Stack>
      </ThemeProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'}/>
    </PaperProvider>
  );
}
