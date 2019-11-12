import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import {
	Container,
	Press,
	ProvidersList,
	Provider,
	Avatar,
	Name,
} from './styles';

const SelectProvider = ({ navigation }) => {
	const [providers, setProviders] = useState([]);

	useEffect(() => {
		const loadProviders = async () => {
			const response = await api.get('providers');
			setProviders(response.data);
		};

		loadProviders().then();
	}, []);

	return (
		<Background>
			<Container>
				<ProvidersList
					data={providers}
					keyExtractor={provider => String(provider.id)}
					renderItem={({ item: provider }) => (
						<Provider
							onPress={() =>
								navigation.navigate('SelectDateTime', {
									provider,
								})
							}
						>
							<Avatar
								source={{
									uri: provider.avatar
										? provider.avatar.url
										: `https://api.adorable.io/avatar/50/${provider.name}.png`,
								}}
							/>
							<Name>{provider.name}</Name>
						</Provider>
					)}
				/>
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
			<Icon name="chevron-left" size={30} color="#fff" />
		</Press>
	),
});

export default SelectProvider;
