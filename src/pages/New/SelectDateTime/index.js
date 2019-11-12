import React from 'react';

import Background from '~/components/Background';

import { Container, Text } from './styles';

const SelectDateTime = () => {
	return (
		<Background>
			<Container>
				<Text>Select Date Time</Text>
			</Container>
		</Background>
	);
};

SelectDateTime.navigationOptions = {
	title: 'Selecione o horário',
};

export default SelectDateTime;
