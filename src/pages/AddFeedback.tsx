import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormData } from 'types/form';
import { errorMessages } from 'constants/errorMessages';
import Title from 'components/styled/Title';
import FormFields from 'components/form/FormFields';

// TODO: Form logic can be more efficiently coded.
export default () => {
  return (
    <>
      <Title>Add New Feedback</Title>
      <FormFields />
    </>
  );
};
