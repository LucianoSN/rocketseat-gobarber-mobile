import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import SelectDateTime from '~/pages/New/SelectDateTime';
import SelectProvider from '~/pages/New/SelectProvider';
import Confirm from '~/pages/New/Confirm';

/*
cd android
gradlew clean
cd ..
react - native run-android
*/

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator(
					{
						Dashboard,
						New: {
							screen: createStackNavigator(
								{
									SelectProvider,
									SelectDateTime,
									Confirm,
								},
								{
									defaultNavigationOptions: {
										headerTransparent: true,
										headerTintColor: '#fff',
										headerLeftContainerStyle: {
											marginLeft: 20,
										},
									},
									headerLayoutPreset: 'center',
								}
							),
							navigationOptions: {
								tabBarVisible: false,
								tabBarLabel: 'Agendar',
								tabBarIcon: (
									<Icon
										name="add-circle-outline"
										size={20}
										color="rgba(255, 255, 255, 0.6)"
									/>
								),
							},
						},
						Profile,
					},
					{
						resetOnBlur: true,
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#FFF',
							inactiveTintColor: 'rgba(255,255,255,0.6)',
							safeAreaInset: { bottom: 'always', top: 'never' },
							style: {
								backgroundColor: '#8d41a8',
								borderTopWidth: 0,
							},
						},
					}
				),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Sign',
			}
		)
	);
