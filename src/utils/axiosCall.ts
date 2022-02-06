import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL_ENV_SUBMISSION_API as string;

export const fetchSubmissionsByEmailAndContact = (
  email: string,
  contactNo: string,
) => {
  const url = baseUrl + `?email=${email}&contactNo=${contactNo}`;
  return axios.get(url);
};

export const saveSubmissions = (submission: any) => {
  return axios.post(baseUrl, submission);
};
