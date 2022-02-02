import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActionCreators from '../actions/userCreators';

const UsersList = (props) => {
  const {users, isFetching, error} = useSelector(({users})=>users);
  const {getUsersRequest} = bindActionCreators(UserActionCreators, useDispatch());

  const loadMore = ({limit, offset}={})=>getUsersRequest({offset:users.length});
  useEffect(() => { loadMore() }, []);
  return (
    <section>
      <h2>Users list</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map(u=>(<li key={u.id}>{u.email}</li>))}
      </ul>
      <button onClick={loadMore}>load more</button>
    </section>
  );
}
export default UsersList;

