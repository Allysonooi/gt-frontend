import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const TitleStyled = styled('div')({
  paddingTop: '10px',
  paddingBottom: '20px',
});

export default ({ children }: { children: ReactNode }) => {
  return (
    <TitleStyled>
      <Typography variant="h5">{children}</Typography>
    </TitleStyled>
  );
};
