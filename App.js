import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Sayfaları import edelim
import LoginScreen from './components/pages/login';
import PromptFlow from './components/pages/PromptFlow';
import PromptResult from './components/pages/PromptResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#000',
            }
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: "PromptForge - Giriş" }}
          />
          <Stack.Screen 
            name="PromptFlow" 
            component={PromptFlow} 
            options={{ title: "PromptForge - Prompt Oluşturma" }}
          />
          <Stack.Screen 
            name="PromptResult" 
            component={PromptResult} 
            options={{ title: "Oluşturulan Prompt" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
