import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h4>Not Logged In</h4>
    return (
        <div>
            <h1>UserName:{user.username} </h1>
        </div>
    );
};

export default Profile;