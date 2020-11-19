
import React, {Component} from 'react';
import UserItem from './UserItem';


const Users = ({users}) => {

    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user } />
                ))}
        </div>
    );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '.5rem'
}

export default Users;
