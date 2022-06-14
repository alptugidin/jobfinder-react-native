import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './colors';
import Detail from './pages/Detail/Detail';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTintColor: colors.red600,
          }}
          name="Jobs"
          component={Jobs}
        />
        <Stack.Screen
          options={({route}) => ({
            title: route.params.name,
            headerTitleAlign: 'center',
            headerTintColor: colors.red600,
            // headerTitle: ({style, children: title}) => {
            //   return (
            //     <Text style={{fontSize: 18}} numberOfLines={1}>
            //  {title}
            // </Text>
            // );
            // },
          })}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
