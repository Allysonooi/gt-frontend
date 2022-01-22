import React from 'react';
import Typography from '@mui/material/Typography';
import Title from 'components/styled/typography';

export default () => {
  return (
    <div className="pt20">
      <Title>
        <Typography variant="h5">Welcome to the Feedback Portal!</Typography>
      </Title>
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
