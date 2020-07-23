export const LOGIN = '/login';
export const CALLBACK = '/callback';
export const SET_ROLE = '/set-role';
type Login = typeof LOGIN;
type Callback = typeof CALLBACK;
type SetRole = typeof SET_ROLE;
export type LoginPaths = Login | Callback | SetRole;
