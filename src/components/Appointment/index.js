import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data, onCancel }) => {
	let avatar_url = data.provider.avatar.url;

	// if (__DEV__ && avatar_url !== null) {
	// 	avatar_url = String(avatar_url).replace('localhost', '10.0.3.2');
	// }

	const dateParsed = useMemo(() => {
		return formatRelative(parseISO(data.date), new Date(), {
			locale: pt,
			addSuffix: true,
		});
	}, [data.date]);

	return (
		<Container past={data.past}>
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
					<Time>{dateParsed}</Time>
				</Info>
			</Left>

			{data.cancelable && !data.canceled_at && (
				<TouchableOpacity onPress={onCancel}>
					<Icon name="event-busy" size={20} color="#f64c75" />
				</TouchableOpacity>
			)}
		</Container>
	);
};

export default Appointment;
