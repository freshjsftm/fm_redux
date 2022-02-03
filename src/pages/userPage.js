import React from 'react';
import UserForm from '../components/UserForm';
import UsersList from '../components/UsersList';

const UserPage = () => {
  return (
    <div>
      <UserForm />
      <hr/>
      <UsersList />
    </div>
  );
}

export default UserPage;
