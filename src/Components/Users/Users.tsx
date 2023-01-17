import React, {MouseEvent} from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import {User} from "./User";
import s from "./Users.module.css";


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    changeFollowStatus: (userId: string) => void
    setCurrentPageCallBack: (currentPage: number) => void
}
export const Users: React.FC<UsersPropsType> = React.memo(({
                                                               pageNumber,
                                                               users,
                                                               totalUserCount,
                                                               pageSize,
                                                               changeFollowStatus,
                                                               setCurrentPageCallBack,
                                                               ...restProps
                                                           }) => {
    const spanOnClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
        const pageNumber = Number(e.currentTarget.textContent)
        setCurrentPageCallBack(pageNumber)
    }
    const pagesCount = Math.ceil(totalUserCount / pageSize)
    let arrPages = []
    for (let i = 1; i <= pagesCount; i++) {
        arrPages.push(i)
    }
    const mappedArrPages = arrPages.map(m => <span key={m}
                                                   className={m === pageNumber ? s.pageNumber : ''}
                                                   onClick={spanOnClickHandler}>{m}</span>)
    const mappedUsers = users.map(user => <User
        changeFollowStatus={changeFollowStatus}
        key={user.id}
        user={user}/>)
    return <div>
        <div>{mappedArrPages} </div>
        <div>
            {mappedUsers}
        </div>
    </div>
})

