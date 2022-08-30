import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// nome do arquivo ou da func de cada reducer ??

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
