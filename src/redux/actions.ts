import actionTypes from 'redux/types';
import * as types from 'types/redux';
import { fetchSubmissionsByEmailAndContact } from 'utils/axiosCall';

const fetchSubmissionListLoading = (): types.SubmissionListLoading => {
  return {
    type: actionTypes.FETCH_SUBMISSIONS_LOADING,
  };
};

const fetchSubmissionListSuccess = (
  payload: types.SubmissionDataList,
): types.SubmissionListSuccess => {
  return {
    type: actionTypes.FETCH_SUBMISSIONS_SUCCESS,
    payload,
  };
};

const fetchSubmissionListFailure = (
  payload: string,
): types.SubmissionListFailure => {
  return {
    type: actionTypes.FETCH_SUBMISSIONS_FAILURE,
    payload,
  };
};

export const getSubmissionByEmailAndContactNo = (data: any) => {
  const { email, contactNo } = data;
  return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(fetchSubmissionListLoading());
    await fetchSubmissionsByEmailAndContact(email, contactNo)
      .then((response: any) => {
        console.log(response);
        dispatch(fetchSubmissionListSuccess(response.data.data));
      })
      .catch((error: any) => {
        console.log(error);
        dispatch(fetchSubmissionListFailure(error));
      });
  };
};
