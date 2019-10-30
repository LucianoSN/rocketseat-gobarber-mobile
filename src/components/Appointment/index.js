import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data }) => {
	let avatar_url = data.provider.avatar.url;

	// if (__DEV__ && avatar_url !== null) {
	// 	avatar_url = String(avatar_url).replace('localhost', '10.0.3.2');
	// }

	return (
		<Container>
			<Left>
				<Avatar
					source={{
						uri:
							avatar_url ||
							`https://api.adorable.io/avatar/50/${data.provider.name}.png`,
					}}
				/>
				<Info>
					<Name>{data.provider.name}</Name>
					<Time>em 3 horas</Time>
				</Info>
			</Left>

			<TouchableOpacity onPress={() => {}}>
				<Icon name="event-busy" size={20} color="#f64c75" />
			</TouchableOpacity>
		</Container>
	);
};

export default Appointment;
