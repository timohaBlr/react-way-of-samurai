import React from 'react';
import {UsersInitialStateType, UserType} from "../../redux/reducers/users-reducer";
import {User} from "./User";
import {v1} from "uuid";
import axios from "axios";


type UsersPropsType = {
    usersPage: UsersInitialStateType
    changeFollowStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
}
export const Users: React.FC<UsersPropsType> = React.memo(({setUsers, usersPage, changeFollowStatus, ...restProps}) => {
    if (usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(
                    response.data.items
                   /* [
                    {
                        id: v1(),
                        name: 'Timofey G.',
                        ava: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png',
                        description: 'I am a react-redux developer',
                        followed: true,
                        location: {
                            country: "Belarus",
                            city: 'Minsk',
                        },
                    },
                    {
                        id: v1(),
                        name: 'Barsik',
                        ava: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png',
                        description: 'I am very pretty kitten=)',
                        followed: false,
                        location: {
                            country: "Belarus",
                            city: 'Bobruisk',
                        },
                    },
                    ]*/
                );
            })
    }
    return (
        <div>
            {usersPage.users.map(user => <User changeFollowStatus={changeFollowStatus} key={user.id} user={user}/>)}
        </div>
    );
})

