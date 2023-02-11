import React from 'react';
import {Profile} from "./Profile";
import { ProfileType} from "../../redux/reducers/profile-reducer";


type ProfilePropsType = {
    loggedInUser: ProfileType | null
    displayedProfile: ProfileType | null
    setProfile: (userId: string) => void
    userId?: string
}
type ProfileStateType = {
    userId: string | null
    user: ProfileType | null
}

export class ProfileClass extends React.Component<ProfilePropsType, ProfileStateType> {
    constructor(props: ProfilePropsType) {
        super(props);
        this.state = {
            userId: null,
            user: null
        }
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<ProfileStateType>, snapshot?: any) {
        console.log('component did update')
        // if (this.state === prevState) {
        //     this.setState((state, props)=> {
        //         return {
        //             user: props.loggedInUser
        //         }
        //     })
        // }
    }

    render() {
        // console.log('profile render props', this.props.loggedInUser?.fullName)
        // console.log('profile render state', this.state.user?.fullName)
        if (!this.state.user) return <div>This profile does not exist. Create new profile?</div>

        return <Profile user={this.state.user}
        />
    }
}
