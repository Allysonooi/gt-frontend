import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Home from 'pages/Home';
import AddFeedback from 'pages/AddFeedback';
import SubmittedFeedback from 'pages/SubmittedFeedback';
import ViewHistory from 'pages/ViewFeedback';
import { IRoute } from 'types/routes';

const routes: IRoute[] = [
  {
    label: 'Home',
    path: '/',
    component: <Home />,
    icon: <HomeIcon />,
    shownOnNavBar: true,
  },
  {
    label: 'View History',
    path: '/view',
    component: <ViewHistory />,
    icon: <FactCheckIcon />,
    shownOnNavBar: true,
  },
  {
    label: 'Add New Feedback',
    path: '/add',
    component: <AddFeedback />,
    icon: <AddIcon />,
    shownOnNavBar: true,
  },
  {
    label: 'Submitted Feedback',
    path: '/confirm',
    component: <SubmittedFeedback />,
    icon: <PublishedWithChangesIcon />,
    shownOnNavBar: false,
  },
];

export default routes;
