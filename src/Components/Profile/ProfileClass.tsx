import React from 'react';
import {Profile} from "./Profile";
import {ProfileType} from "../../redux/reducers/profile/types";
import {Preloader} from "../Common/Preloader/Preloader";


type ProfilePropsType = {
    /**
     * preloader calls 2 additional componentDidUpdate methods
     */
    loadingStatus: boolean
    loggedInUser: ProfileType | null
    setLoggedInUserTC: (userId: string) => void
    userId?: string
}
type ProfileStateType = {
    // userId: string | null
    // user: ProfileType | null
}

export class ProfileClass extends React.Component<ProfilePropsType, ProfileStateType> {

    componentDidMount() {
        console.log('did mount')
        console.log(this.props)
        /**
         * fetch profile data in first mount
         */
        if (this.props.userId !== this.props.loggedInUser?.userId) {
            this.props.setLoggedInUserTC(this.props.userId!)
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<ProfileStateType>, snapshot?: any) {
        console.log('did update')
        console.log(this.props)
        /**
         * update when url has been changed
         */
        if (this.props.userId !== prevProps.userId) {
            this.props.setLoggedInUserTC(this.props.userId!)
        }
    }

    render() {
        if (this.props.loadingStatus) return <Preloader/>

        if (!this.props.loggedInUser) return <div>This profile does not exist. Create new profile?</div>

        return <Profile user={this.props.loggedInUser}
        />
    }
}
