import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './colors';
import Detail from './pages/Detail/Detail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from './pages/Favorites/Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './store';
import {Provider} from 'react-redux';
import FavDetails from './pages/FavDetails/FavDetails';
import LiveCount from './components/LiveCount/LiveCount';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackFavorites = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesScreen"
        component={Favorites}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: colors.red600,
          title: 'Favorite Jobs',
        }}
      />
      <Stack.Screen
        name="FavDetailsScreen"
        component={FavDetails}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: colors.red600,
          title: 'Job Detail',
        }}
      />
    </Stack.Navigator>
  );
};

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: colors.red600,
          title: 'Jobs',
        }}
        name="JobsScreen"
        component={Jobs}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.name,
          headerTitleAlign: 'center',
          headerTintColor: colors.red600,
        })}
        name="DetailScreen"
        component={Detail}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Jobs') {
                iconName = focused ? 'briefcase-eye' : 'briefcase-eye-outline';
                color = focused ? colors.red600 : colors.gray600;
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
                color = focused ? colors.red600 : colors.gray600;
              }
              return <LiveCount iconName={iconName} color={color} size={32} />;
            },
          })}>
          <Tab.Screen name="Jobs" component={StackScreens} />
          <Tab.Screen name="Favorites" component={StackFavorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
