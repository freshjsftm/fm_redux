import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as UserActionCreators from '../actions/userCreators';

export function * createUserSaga(action){
  try {
    const {data:{data:[user]}} = yield API.createUser(action.values)
    yield put(UserActionCreators.createUserSuccess(user))
  } catch (error) {
    yield put(UserActionCreators.createUserError(error))
  }
}