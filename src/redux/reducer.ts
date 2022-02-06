import * as types from 'types/redux';
import actionTypes from 'redux/types';

export const initialState = {
  loading: false,
  error: '',
  submissionList: [] as types.SubmissionDataList,
};

export default (state = initialState, action: types.SubmissionListActions) => {
  switch (action.type) {
    case actionTypes.FETCH_SUBMISSIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUBMISSIONS_SUCCESS: {
      const { payload } = action as types.SubmissionListSuccess;
      return {
        ...state,
        loading: false,
        error: '',
        submissionList: payload,
      };
    }
    case actionTypes.FETCH_SUBMISSIONS_FAILURE: {
      const { payload } = action as types.SubmissionListFailure;
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
