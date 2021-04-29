const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action): UserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { users: [], loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { users: [], loading: true, error: null };
    case FETCH_USERS_ERROR:
      return { users: [], loading: true, error: null };

    default:
      return state;
  }
};
