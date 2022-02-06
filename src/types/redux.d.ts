import actionTypes from 'redux/types';

type SubmissionData = {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  agencyName: string;
  feedback: string;
  feedbackStatus: string;
};

type SubmissionDataList = SubmissionData[];

type SubmissionListLoading = {
  type: typeof actionTypes.SAVE_SUBMISSIONS_LOADING;
};

type SubmissionListSuccess = {
  type: typeof actionTypes.SAVE_SUBMISSIONS_SUCCESS;
  payload: typeof SubmissionDataList;
};

type SubmissionListFailure = {
  type: typeof actionTypes.SAVE_SUBMISSIONS_FAILURE;
  payload: string;
};

type SubmissionListActions =
  | SubmissionListLoading
  | SubmissionListSuccess
  | SubmissionListFailure;
