import React from 'react';
import {UsersInitialStateType, UserType} from "../../redux/reducers/users-reducer";
import {User} from "./User";
import axios from "axios";


type UsersPropsType = {
    usersPage: UsersInitialStateType
    changeFollowStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export class UsersClass extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(
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

    render() {
        return <div>
            {this.props.usersPage.users.map(user => <User
                changeFollowStatus={this.props.changeFollowStatus}
                key={user.id}
                user={user}/>)}
        </div>
    }
}

export const Users: React.FC<UsersPropsType> = React.memo(({setUsers, usersPage, changeFollowStatus, ...restProps}) => {

    return (
        <div>
            {usersPage.users.map(user => <User changeFollowStatus={changeFollowStatus}
                                               key={user.id}
                                               user={user}/>)}
        </div>
    );
})

