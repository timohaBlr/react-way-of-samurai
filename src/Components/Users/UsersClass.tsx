import React from 'react';
import {UsersFilterType, UsersInitialStateType, UserType} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


type UsersPropsType = {
    usersPage: UsersInitialStateType
    // users: UserType[]
    // pageSize: number
    // pageNumber: number
    // loadingStatus: boolean
    toggleUnfollow: (userId: string) => void
    toggleFollow: (userId: string) => void
    setUsers: (pageSize: number, pageNumber: number, filter: UsersFilterType) => void
    setPageNumber: (pageNumber: number) => void
    // changingFollowing: string[]
}

export class UsersClass extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.setUsers(this.props.usersPage.pageSize,
            this.props.usersPage.pageNumber,
            this.props.usersPage.filter)
    }

    setCurrentPageCallBack = (currentPage: number) => {
        this.props.setPageNumber(currentPage)
        this.props.setUsers(this.props.usersPage.pageSize,
            currentPage,
            this.props.usersPage.filter)
    }

    toggleFollowingCallBack = (userId: string) => {
        let user = this.props.usersPage.users.find(user => user.id === userId)
        if (user!.followed) {
            this.props.toggleUnfollow(userId)
        } else {
            this.props.toggleFollow(userId)
        }
    }


    render() {

        return <div>{this.props.usersPage.loadingStatus && <Preloader/>}
            <Users users={this.props.usersPage.users}
                   setCurrentPageCallBack={this.setCurrentPageCallBack}
                   toggleFollowingCallBack={this.toggleFollowingCallBack}
                   changingFollowing={this.props.usersPage.changingFollowing}/>

        </div>
    }
}
