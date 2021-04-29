const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};
enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
type UserAction =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUsersSuccessAction;

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
