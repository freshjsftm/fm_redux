import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as UserActionCreators from '../actions/userCreators';

const UsersList = (props) => {
  const {users, isFetching, error} = useSelector(({users})=>users);
  const {getUsersRequest} = bindActionCreators(UserActionCreators, useDispatch());
  const getUsersReq = ({limit, offset}={})=>getUsersRequest({limit, offset});
  useEffect(() => { getUsersReq() }, []);
  return (
    <section>
      <h2>Users list</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map(u=>(<li key={u.id}>{u.email}</li>))}
      </ul>
      <button onClick={()=>{getUsersReq({offset:users.length})}}>load more</button>
    </section>
  );
}
export default UsersList;

