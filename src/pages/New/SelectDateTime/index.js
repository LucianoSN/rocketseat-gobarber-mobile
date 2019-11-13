import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, Press } from './styles';

const SelectDateTime = ({ navigation }) => {
	const [date, setDate] = useState(new Date());
	const [hours, setHours] = useState([]);

	const provider = navigation.getParam('provider');

	useEffect(() => {
		const loadAvailable = async () => {
			const response = api.get(`providers/${provider.id}/available`, {
				params: {
					date: date.getTime(),
				},
			});

			setHours(response.data);
		};

		loadAvailable().then();
	}, [date, provider.id]);

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
