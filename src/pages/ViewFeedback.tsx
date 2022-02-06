import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ViewSubmissionFormFields from 'components/form/ViewSubmissionFormFields';
import CommonTable from 'components/common/CommonTable';
import { getSubmissionByEmailAndContactNo } from 'redux/actions';
import { RootState } from 'redux/store';

export default () => {
  const dispatch = useDispatch();
  const { submissionList } = useSelector(
    (state: RootState) => state.submission,
  );
  const handleViewSubmissionForm = (data: any) => {
    dispatch(getSubmissionByEmailAndContactNo(data));
  };

  return (
    <>
      <div style={{ paddingBottom: '40px' }}>
        <Typography variant="h5" className="pb20">
          View Past Feedback Submissions
        </Typography>
        <Typography variant="subtitle1">
          Please input your email and contact number below before submitting to
          view your past feedback submissions.
        </Typography>
        <ViewSubmissionFormFields
          handleViewSubmissionForm={handleViewSubmissionForm}
        />
      </div>

      <Divider variant="middle" />
      <div style={{ paddingTop: '40px' }}>
        <Typography variant="subtitle1" sx={{ paddingBottom: '30px' }}>
          Upon submitting the information above, the data should be shown below
          in a table.
        </Typography>
        <CommonTable data={submissionList} />
      </div>
    </>
  );
};
