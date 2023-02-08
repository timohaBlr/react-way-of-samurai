import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import {User} from "./User";
import {Pagination} from "./Pagination";
import {SearchField} from "./SearchField";


type UsersPropsType = {
    users: UserType[]
    setCurrentPageCallBack: (currentPage: number) => void
    toggleFollowingCallBack: (userId: string) => void
    changingFollowing: string[]
}
export const Users: React.FC<UsersPropsType> = React.memo(({
                                                               users,
                                                               setCurrentPageCallBack,
                                                               toggleFollowingCallBack,
                                                               changingFollowing,
                                                           }) => {

    const mappedUsers = users.map(user => <User
        toggleFollowingCallBack={toggleFollowingCallBack}
        changingFollowing={changingFollowing}
        key={user.id}
        user={user}/>)
    return <div>
        <Pagination setCurrentPageCallBack={setCurrentPageCallBack}/>
        <SearchField/>
        <div>
            {mappedUsers}
        </div>
    </div>
})

