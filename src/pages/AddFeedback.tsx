import NewSubmissionFormFields from 'components/form/NewSubmissionFormFields';
import Typography from '@mui/material/Typography';

export default () => {
  return (
    <>
      <Typography variant="h5" className="pb20">
        Add New Feedback
      </Typography>
      <NewSubmissionFormFields />
    </>
  );
};
