export interface IFormData {
  name: string;
  email: string;
  contactNo: Number;
  agencyName: string;
  feedback: string;
}

export interface IFormItem {
  label: string;
  keyName: string;
  required: boolean;
}

export interface ITableFormData {
  email: string;
  contactNo: Number;
}
