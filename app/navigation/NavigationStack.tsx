import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './NavigationService';
import Images from 'app/config/Images';
import Home from 'app/screens/Home';
import DebitCard from 'app/screens/DebitCard';
import Payments from 'app/screens/Payments';
import Profile from 'app/screens/Profile';
import Credit from 'app/screens/Credit';
import SpendingLimit from 'app/screens/SpendingLimit';
import AppStyles from 'app/config/AppStyles';

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <Images.home
                width={24}
                height={24}
                fill={
                  focused
                    ? AppStyles.colors.COLOR_PRIMARY
                    : AppStyles.colors.COLOR_UN_SELECTED_TAB
                }
              />
            );
          } else if (route.name === 'Debit Card') {
            return (
              <Images.debitcard
                width={24}
                height={24}
                fill={
                  focused
                    ? AppStyles.colors.COLOR_PRIMARY
                    : AppStyles.colors.COLOR_UN_SELECTED_TAB
                }
              />
            );
          } else if (route.name === 'Payments') {
            return (
              <Images.payments
                width={24}
                height={24}
                fill={
                  focused
                    ? AppStyles.colors.COLOR_PRIMARY
                    : AppStyles.colors.COLOR_UN_SELECTED_TAB
                }
              />
            );
          } else if (route.name === 'Credit') {
            return (
              <Images.credit
                width={24}
                height={24}
                fill={
                  focused
                    ? AppStyles.colors.COLOR_PRIMARY
                    : AppStyles.colors.COLOR_UN_SELECTED_TAB
                }
              />
            );
          } else {
            return (
              <Images.profile
                width={24}
                height={24}
                fill={
                  focused
                    ? AppStyles.colors.COLOR_PRIMARY
                    : AppStyles.colors.COLOR_UN_SELECTED_TAB
                }
              />
            );
          }
        },

        tabBarActiveTintColor: AppStyles.colors.COLOR_PRIMARY,
        tabBarInactiveTintColor: AppStyles.colors.COLOR_UN_SELECTED_TAB,
        tabBarStyle: {
          height: 56,
          backgroundColor: AppStyles.colors.COLOR_WHITE,
          shadowColor: '#000000',
          shadowRadius: 6,
          overflow: 'visible',
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 3,
            height: 3,
          },
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: AppStyles.fonts.FONT_DEMI_BOLD,
        },
      })}
    >
      <MainTab.Screen name="Home" component={Home} />
      <MainTab.Screen name="Debit Card" component={DebitCard} />
      <MainTab.Screen name="Payments" component={Payments} />
      <MainTab.Screen name="Credit" component={Credit} />
      <MainTab.Screen name="Profile" component={Profile} />
    </MainTab.Navigator>
  );
};

const NavigationStack: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
