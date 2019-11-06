import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container, Text, Press } from './styles';

const SelectProvider = () => {
	return (
		<Background>
			<Container>
				<Text>SelectProvider</Text>
			</Container>
		</Background>
	);
};

SelectProvider.navigationOptions = ({ navigation }) => ({
	title: 'Selecione o prestador',
	headerLeft: () => (
		<Press
			onPress={() => {
				navigation.navigate('Dashboard');
			}}
		>
			<Icon name="chevron-left" size={20} color="#fff" />
		</Press>
	),
});

export default SelectProvider;
