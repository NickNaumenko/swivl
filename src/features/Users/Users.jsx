import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import UserItem from './UserItem';
import { fetchUsers, selectUsersIds } from './usersSlice';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector(selectUsersIds);

  const loadMore = (page) => {
    dispatch(fetchUsers({ page, since: users[users.length - 1] }));
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={1}
        hasMore
        loader={<h4 key="loader">Loading...</h4>}
        loadMore={loadMore}
      >
        <List divided relaxed>
          {users.map((id) => (
            <UserItem key={id} id={id} />
          ))}
        </List>
      </InfiniteScroll>

    </Container>
  );
};

export default Users;
