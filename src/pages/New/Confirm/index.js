import React, { useMemo } from 'react';

import { formatRelative, parseISO, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Press, Avatar, Name, Time, SubmitButton } from './styles';

const Confirm = ({ navigation }) => {
	const provider = navigation.getParam('provider');
	const time = navigation.getParam('time');

	const dateFormatted = useMemo(
		() => formatRelative(parseISO(time), new Date(), { locale: pt }),
		[time]
	);

	const handleAddAppointment = async () => {
		await api.post('appointments', {
			provider_id: provider.id,
			date: time,
		});

		navigation.navigate('Dashboard');
	};

	return (
		<Background>
			<Container>
				<Avatar
					source={{
						uri: provider.avatar
							? provider.avatar.url
							: `https://api.adorable.io/avatar/50/${provider.name}.png`,
					}}
				/>
				<Name>{provider.name}</Name>
				<Time>{dateFormatted}</Time>
				{/*<Time>{time}</Time>*/}

				<SubmitButton onPress={handleAddAppointment}>
					Confirmar agendamento
				</SubmitButton>
			</Container>
		</Background>
	);
};

Confirm.navigationOptions = ({ navigation }) => ({
	title: 'Confirmar agendamento',
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

export default Confirm;
