import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

function* updateProfile({ payload }) {
	try {
		const { name, email, ...rest } = payload.data;

		const profile = {
			name,
			email,
			...(rest.oldPassword ? rest : {}),
		};

		console.tron.log('[USER PROFILE]', profile);

		const response = yield call(api.put, 'users', profile);

		Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');

		yield put(updateProfileSuccess(response.data));
	} catch (e) {
		Alert.alert(
			'Falha na atualização',
			'Houve um erro na atualização do perfil, verifique seu dados'
		);
		yield put(updateProfileFailure());
	}
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
