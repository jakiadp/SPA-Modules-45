import React, { use } from 'react';

const Users2 = ({userspromise}) => {
    const user = use(userspromise);
    console.log(user)
    return (
        <div>
            <h3>my users2</h3>
        </div>
    );
};

export default Users2;