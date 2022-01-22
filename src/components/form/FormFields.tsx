import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormData } from 'types/form';
import { errorMessages } from 'constants/errorMessages';

// TODO: Form logic can be more efficiently coded. E.g Controller
export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <label>Name</label>
      <input {...register('name', { required: true })} />
      {errors.name && <p>{errorMessages.invalidInput}</p>}
      <label>Email</label>
      <input {...register('email', { required: true })} />
      {errors.email && <p>{errorMessages.invalidInput}</p>}
      <label>Contact Number</label>
      <input {...register('contactNo', { required: true })} />
      {errors.contactNo && <p>{errorMessages.invalidInput}</p>}
      <label>Agency Name (Optional)</label>
      <input {...register('agencyName', { required: false })} />
      <label>Feedback</label>
      <input {...register('feedback', { required: true })} />
      {errors.feedback && <p>{errorMessages.invalidInput}</p>}

      <input type="submit" />
    </form>
  );
};