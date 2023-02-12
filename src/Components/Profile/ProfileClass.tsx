import React from 'react';
import {Profile} from "./Profile";
import {ProfileType} from "../../redux/reducers/profile/types";
import {Preloader} from "../Common/Preloader/Preloader";


type ProfilePropsType = {
    loadingStatus: boolean
    loggedInUser: ProfileType | null
    // displayedProfile: ProfileType | null
    setLoggedInUserTC: (userId: string) => void
    userId?: string
}
type ProfileStateType = {
    userId: string | null
    user: ProfileType | null
}

export class ProfileClass extends React.Component<ProfilePropsType, ProfileStateType> {

    componentDidMount() {
        if (this.props.userId !== this.props.loggedInUser?.userId) {
            this.props.setLoggedInUserTC(this.props.userId!)
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<ProfileStateType>, snapshot?: any) {
    }

    shouldComponentUpdate(nextProps: Readonly<ProfilePropsType>, nextState: Readonly<ProfileStateType>, nextContext: any): boolean {
        return this.props.userId !== nextProps.userId //обновление при загрузке по скопированной ссылке
            || this.props.loggedInUser !== nextProps.loggedInUser // обновление при первом старте приложения
            ||this.props.loadingStatus !== nextProps.loadingStatus
        // || this.props.displayedProfile !== nextProps.displayedProfile
    }

    componentWillUnmount() {

    }

    render() {
        // const profileToRender = this.props.displayedProfile
        //     ? this.props.displayedProfile
        //     : this.props.loggedInUser
        if (this.props.loadingStatus) return <Preloader/>
        if (!this.props.loggedInUser) return <div>This profile does not exist. Create new profile?</div>

        return <Profile user={this.props.loggedInUser}
        />
    }
}
