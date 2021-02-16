import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';
import { selectUserById } from './usersSlice';
import styles from './UserItem.module.css';

const UserItem = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));
  const history = useHistory();
  const handleClick = () => {
    history.push(user.login);
  };

  return (
    <List.Item className={styles.item} onClick={handleClick}>
      <Image
        className={styles.avatar}
        size="tiny"
        avatar
        src={user.avatar_url}
      />
      <List.Content>
        <List.Header>
          {user.login}
        </List.Header>
        <List.Description>
          {user.url}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default UserItem;
