import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as UserActionCreators from '../actions/userCreators';

const UsersList = (props) => {
  const {users, isFetching, error, getUsersReq} = props;
  useEffect(() => { getUsersReq() }, [getUsersReq]);
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
const mapStateToProps = ({users})=>users;
const mapDispatchToProps = (dispatch) => ({
  getUsersReq:({limit, offset}={})=>dispatch(UserActionCreators.getUsersRequest({limit, offset}))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
