import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';


const Users = () => {

const users = useLoaderData();
console.log(users);
    return (
        <div>
            <h1>this users me page</h1>
            <div>
             {
                users.map(user => <User user={user}
                    key={user.id}
                
                ></User>)
             }
            </div>
            
        </div>
    );
};

export default Users;