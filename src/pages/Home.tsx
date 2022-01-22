import Typography from '@mui/material/Typography';

export default () => {
  return (
    <>
      <Typography variant="h5" className="pb20">
        Welcome to the Feedback Portal!
      </Typography>
      <Typography variant="subtitle1">
        In this portal, there are a couple of actions available as seen below in
        the bulletin.
        <br />
        Please refer to the side menu to navigate to the actions.
      </Typography>
      <ul>
        <li>View History of Feedbacks </li>
        <li>Submit a New Feedback</li>
      </ul>
    </>
  );
};
