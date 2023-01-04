import React from 'react';
import {UsersInitialStateType} from "../../redux/reducers/users-reducer";
import {User} from "./User";


type UsersPropsType = {
    usersPage: UsersInitialStateType
    changeFollowStatus: (userId: string) => void
}
export const Users: React.FC<UsersPropsType> = React.memo(({usersPage,changeFollowStatus, ...restProps}) => {
    return (
        <div>
            {usersPage.users.map(user => <User changeFollowStatus={changeFollowStatus} key={user.id} user={user}/>)}
        </div>
    );
})

