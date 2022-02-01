import React from 'react';
import { connect } from 'react-redux';

const UsersList = (props) => {
  const {users, isFetching, error} = props;
  return (
    <section>
      <h2>Users list</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {users.map(u=>(<li key={u.id}>{u.email}</li>))}
      </ul>
    </section>
  );
}
const mapStateToProps = ({users})=>users;
export default connect(mapStateToProps)(UsersList);
