import { combineReducers } from 'redux';
// import auth, { authSaga } from "./auth";
// import loading from "./loading";
import { all } from 'redux-saga/effects';

// import posts, { postsSaga } from "./posts";
import loading from './loading';
import rank, { rankSaga } from './rank';

const rootReducer = combineReducers({
  loading,
  rank,
});

export function* rootSaga() {
  yield all([rankSaga()]);
}

export default rootReducer;
