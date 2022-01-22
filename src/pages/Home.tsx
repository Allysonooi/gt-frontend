import React from 'react';
import Typography from '@mui/material/Typography';
import Title from 'components/styled/Title';

export default () => {
  return (
    <div className="pt20">
      <Title>Welcome to the Feedback Portal!</Title>
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
    </div>
  );
};
