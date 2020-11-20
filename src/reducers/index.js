import { combineReducers } from 'redux';

import acc from './Acc';
import error from './errAct';

export const reducers = combineReducers({ acc ,error });