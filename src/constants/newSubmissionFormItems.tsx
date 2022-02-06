import { FormItem } from 'types/form';

const newSubmissionFormItems: FormItem[] = [
  {
    label: 'Name',
    keyName: 'name',
    required: true,
  },
  {
    label: 'Email',
    keyName: 'email',
    required: true,
  },
  {
    label: 'Contact Number',
    keyName: 'contactNo',
    required: true,
  },
  {
    label: 'Agency Name',
    keyName: 'agencyName',
    required: false,
  },
  {
    label: 'Feedback',
    keyName: 'feedback',
    required: true,
  },
];

export default newSubmissionFormItems;
