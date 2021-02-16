import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from 'semantic-ui-react';
import UserItem from './UserItem';
import { fetchUsers, selectUsersIds } from './usersSlice';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  const users = useSelector(selectUsersIds);

  return (
    <>
      <Container>
        <List divided relaxed>
          {users.map((id) => (
            <UserItem key={id} id={id} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default Users;
