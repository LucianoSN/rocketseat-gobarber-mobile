import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

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
				App: createBottomTabNavigator({
					Dashboard,
				}),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Sign',
			}
		)
	);
