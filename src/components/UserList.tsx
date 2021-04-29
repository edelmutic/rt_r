import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';
import { useTypedSelector } from './../hooks/useTypedSelector';

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} and their id {user.id}
        </div>
      ))}
    </div>
  );
};

export default UserList;
