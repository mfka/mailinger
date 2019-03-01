import { Nullable } from './nullable';

export interface IRecipient {
  email: string;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
}
