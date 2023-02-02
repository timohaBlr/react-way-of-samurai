import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    pageNumber: number
    loadingStatus: boolean
    toggleUnfollow: (userId: string) => void
    toggleFollow: (userId: string) => void
    setUsers: (pageSize: number, pageNumber: number) => void
    setPageNumber: (pageNumber: number) => void
    changingFollowing: string[]
}

export class UsersClass extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setUsers(this.props.pageSize, this.props.pageNumber)
    }

    setCurrentPageCallBack = (currentPage: number) => {
        this.props.setPageNumber(currentPage)
        this.props.setUsers(this.props.pageSize, currentPage)
    }

    toggleFollowingCallBack = (userId: string) => {
        let user = this.props.users.find(user => user.id === userId)
        if (user!.followed) {
            this.props.toggleUnfollow(userId)
        } else {
            this.props.toggleFollow(userId)
        }
    }


    render() {
        return <div>{this.props.loadingStatus && <Preloader/>}
            <Users users={this.props.users}
                   setCurrentPageCallBack={this.setCurrentPageCallBack}
                   toggleFollowingCallBack={this.toggleFollowingCallBack}
                   changingFollowing={this.props.changingFollowing}/>

        </div>
    }
}
