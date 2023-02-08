import React from 'react';
import {Profile} from "./Profile";
import {PostsType, UserType} from "../../redux/reducers/profile-reducer";
import {Navigate} from "react-router-dom";


type ProfilePropsType = {
    user: UserType | null
    posts: Array<PostsType>
    newPostText: string
    addMessage: () => void
    updateTextArea: (value: string) => void
    loadingStatus: boolean
    setProfile: (userId: string) => void
    setStatus: (status: string) => void
    getStatus: (userId: string) => void
    userId?: string
    status: string
}
type ProfileStateType = {

}

export class ProfileClass extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.userId
        if (userId) {
            this.props.setProfile(userId)
            this.props.getStatus(userId)
        }
    }
    // componentDidUpdate(prevProps: Readonly<ProfilePropsType>,
    //                    prevState: Readonly<ProfileStateType>,
    //                    snapshot?: any) {
    //     if (prevProps.user !== this.props.user) {
    //         return <Navigate to={'/profile/'+this.props.user?.userId}/>
    //     }
    // }


    render() {
        if (!this.props.user) return <div>This profile does not exist. Create new profile?</div>
        return <Profile user={this.props.user}
                        posts={this.props.posts}
                        newPostText={this.props.newPostText}
                        addMessage={this.props.addMessage}
                        updateTextArea={this.props.updateTextArea}
                        loadingStatus={this.props.loadingStatus}
                        status={this.props.status}
                        setStatus={this.props.setStatus}
                        // getStatus={this.props.getStatus}
        />
    }
}
