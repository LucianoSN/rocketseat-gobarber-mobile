import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, Press } from './styles';

const SelectDateTime = () => {
	const [date, setDate] = useState(new Date());

	return (
		<Background>
			<Container>
				<DateInput date={date} onChange={setDate} />
			</Container>
		</Background>
	);
};

SelectDateTime.navigationOptions = ({ navigation }) => ({
	title: 'Selecione o horário',
	headerLeft: () => (
		<Press
			onPress={() => {
				navigation.goBack();
			}}
		>
			<Icon name="chevron-left" size={30} color="#fff" />
		</Press>
	),
});

export default SelectDateTime;
