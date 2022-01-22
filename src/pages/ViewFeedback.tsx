import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ViewSubmissionFormFields from 'components/form/ViewSubmissionFormFields';
import CommonTable from 'components/common/CommonTable';

export default () => {
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
        <ViewSubmissionFormFields />
      </div>

      <Divider variant="middle" />
      <div style={{ paddingTop: '40px' }}>
        <Typography variant="subtitle1" sx={{ paddingBottom: '30px' }}>
          Upon submitting the information above, the data should be shown below
          in a table.
        </Typography>
        <CommonTable />
      </div>
    </>
  );
};
