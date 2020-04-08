import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Write Tab navigator Ekranlari Connectlari
import { WriteScreen } from './src/screen/WriteScreen'
import { PostScreen } from './src/screen/PostScreen'
//Top Tab navigator Ekranlari Connectlari
import { TopListScreen } from './src/screen/TopListScreen'
//Add skreen ekranlari
import { AddPlaceScreen } from './src/screen/AddPlaceScreen'

//Navigatsiya sozdat qilindi
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TopStack = createStackNavigator();
const AddStack = createStackNavigator();

//BottomTab Funksiyalari
function HomeScreen() {
  return (
  <HomeStack.Navigator initialRouteName="Write">
    <HomeStack.Screen name="Write" component={WriteScreen} />
    <HomeStack.Screen name="Post" component={PostScreen} />
  </HomeStack.Navigator>
  );
}
function TopScreen() {
    return (
    <TopStack.Navigator initialRouteName="Write">
    <TopStack.Screen name="TopList" component={TopListScreen} />
    <TopStack.Screen name="Post" component={PostScreen} />
    </TopStack.Navigator>
    );
  }

function AddScreen() {
  return (
    <AddStack.Navigator initialRouteName="AddPlace">
    <AddStack.Screen name="AddPlace" component={AddPlaceScreen} />
    </AddStack.Navigator>
  );
}
function LikeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LikeScreen</Text>
      </View>
    );
  }
  
  function MyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyScreen</Text>
      </View>
    );
  }

//Glavniy APP

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-variant'
              : 'home-variant-outline';
          } else if (route.name === 'Top') {
            iconName = focused ? 'star-circle' : 'star-circle-outline';
          }
          else if (route.name === 'Add') {
            iconName = focused ? 'plus-circle-outline' : 'plus-circle';
          }
          else if (route.name === 'Like') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'My') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel:false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        tabStyle:{ backgroundColor:'#fafafa' }
      }}
      
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Top" component={TopScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Like" component={LikeScreen} />
        <Tab.Screen name="My" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
