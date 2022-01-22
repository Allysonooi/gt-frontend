import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import { errorMessages } from 'constants/errorMessages';
import { ITableFormData } from 'types/form';

// TODO: Form logic can be more efficiently coded. E.g Controller
export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITableFormData>();

  return (
    <form
      className="viewHistoryForm"
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <p>{errorMessages.invalidInput}</p>}
        </Grid>
        <Grid item xs={5}>
          <label>Contact Number</label>
          <input {...register('contactNo', { required: true })} />
          {errors.contactNo && <p>{errorMessages.invalidInput}</p>}
        </Grid>
        <Grid item xs={2}>
          <input type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};
