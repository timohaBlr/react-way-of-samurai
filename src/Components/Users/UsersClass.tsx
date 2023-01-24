import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import {fetching_API,  instance} from "../../Api/api";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    loadingStatus: boolean
    setLoadingStatus: (loadingStatus: boolean) => void
    changeFollowStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (totalUserCount: number) => void
    setPageNumber: (pageNumber: number) => void
    toggleFollowing: (userId: string, inProgress: boolean) => void
    changingFollowing: string[]
}

export class UsersClass extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setLoadingStatus(true)
        fetching_API.getUsers(this.props.pageSize, this.props.pageNumber)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
                this.props.setLoadingStatus(false)
            })
    }

    setCurrentPageCallBack = (currentPage: number) => {
        this.props.setLoadingStatus(true)
        this.props.setPageNumber(currentPage)
        fetching_API.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setLoadingStatus(false)
            })
    }

    toggleFollowingCallBack = (userId: string) => {
        let user = this.props.users.find(user => user.id === userId)
        if (user!.followed) {
            this.props.toggleFollowing(userId, true)
            instance.delete('/follow/' + userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.changeFollowStatus(userId)
                        this.props.toggleFollowing(userId, false)
                    } else {
                        alert('Сервер не дал разрешения delete новый фолоу');
                        this.props.toggleFollowing(userId, false)
                    }
                })
        } else {
            this.props.toggleFollowing(userId, true)
            instance.post('/follow/' + userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.changeFollowStatus(userId)
                        this.props.toggleFollowing(userId, false)
                    } else {
                        alert('Сервер не дал разрешения set новый фолоу');
                        this.props.toggleFollowing(userId, false)
                    }
                })
        }
    }


    render() {
        return <div>{this.props.loadingStatus && <Preloader/>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   pageNumber={this.props.pageNumber}
                   setCurrentPageCallBack={this.setCurrentPageCallBack}
                   toggleFollowingCallBack={this.toggleFollowingCallBack}
                   changingFollowing={this.props.changingFollowing}/>

        </div>
    }
}
