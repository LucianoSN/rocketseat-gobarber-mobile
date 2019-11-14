import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title, Press } from './styles';

const SelectDateTime = ({ navigation }) => {
	const [date, setDate] = useState(new Date());
	const [hours, setHours] = useState([]);

	const provider = navigation.getParam('provider');

	useEffect(() => {
		const loadAvailable = async () => {
			const response = await api.get(
				`providers/${provider.id}/available`,
				{
					params: {
						date: date.getTime(),
					},
				}
			);

			setHours(response.data);
		};

		loadAvailable().then();
	}, [date, provider.id]);

	const handleSelectHour = time => {
		navigation.navigate('Confirm', {
			provider,
			time,
		});
	};

	return (
		<Background>
			<Container>
				<DateInput date={date} onChange={setDate} />

				<HourList
					data={hours}
					extraData={date}
					keyExtractor={item => String(item.time)}
					renderItem={({ item }) => (
						<Hour
							onPress={() => handleSelectHour(item.value)}
							enabled={item.available}
						>
							<Title>{item.time}</Title>
						</Hour>
					)}
				/>
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
