import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

import * as rankAPI from '../lib/api/rank';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const [RANK_DATA, RANK_DATA_SUCCESS, RANK_DATA_FAILURE] = createRequestActionTypes(
  'rank/RANK_DATA',
);

export const rankData = createAction(RANK_DATA, (rank) => rank);

const rankDataSaga = createRequestSaga(RANK_DATA, rankAPI.rank);

export function* rankSaga() {
  yield takeLatest(RANK_DATA, rankDataSaga);
}

const initState = {
  data: [],
  error: null,
};

const rank = handleActions(
  {
    [RANK_DATA_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data: data.songs,
    }),
    [RANK_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default rank;
