import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Loader } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import { loadingStates } from 'helpers/constants';
import UserItem from './UserItem';
import { fetchUsers, selectUsersIds, selectUsersStatus } from './usersSlice';

const ItemLoader = () => (
  <List.Item>
    <Loader active inline="centered" size="medium" key="loader">Loading...</Loader>
  </List.Item>
);

const Users = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectUsersStatus);

  useEffect(() => {
    if (status === loadingStates.IDLE) {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const users = useSelector(selectUsersIds);

  const loadMore = (page) => {
    if (status !== loadingStates.IDLE) {
      dispatch(fetchUsers({ page, since: users[users.length - 1] }));
    }
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={1}
        hasMore
        loader={<ItemLoader key="loader" />}
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
