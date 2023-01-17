import React from 'react';
import { UserType} from "../../redux/reducers/users-reducer";
import {instance} from "../../server/axios";
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
}

export class UsersClass extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setLoadingStatus(true)
        instance.get(`/users?count=${this.props.pageSize}&page=${this.props.pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)

                this.props.setLoadingStatus(false)
            })
    }

    setCurrentPageCallBack = (currentPage: number) => {
        this.props.setLoadingStatus(true)
        this.props.setPageNumber(currentPage)
        instance.get(`/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);

                this.props.setLoadingStatus(false)
            })
    }

    render() {
        return <div>{this.props.loadingStatus && <Preloader/>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   pageNumber={this.props.pageNumber}
                   changeFollowStatus={this.props.changeFollowStatus}
                   setCurrentPageCallBack={this.setCurrentPageCallBack}/>

        </div>
    }
}
