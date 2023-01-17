import React from 'react';
import {instance} from "../../server/axios";
import {Profile} from "./Profile";
import { PostsType, UserType} from "../../redux/reducers/profile-reducer";


type ProfilePropsType = {
    user: UserType
    posts: Array<PostsType>
    newPostText: string
    addMessage: () => void
    updateTextArea: (value: string) => void
    loadingStatus: boolean
    setLoadingStatus: (loadingStatus: boolean) => void
    setProfile: (response: UserType) => void
    userId?: string
}

export class ProfileClass extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.userId
        if (userId) {
            this.props.setLoadingStatus(true)
            instance.get(`/profile/${userId}`)
                .then(response => {
                    this.props.setProfile(response.data)
                    this.props.setLoadingStatus(false)
                })
        }
        }

    render() {
        if (!this.props.user) return <div>This profile does not exist. Create new profile?</div>
        return <Profile user={this.props.user}
                        posts={this.props.posts}
                        newPostText={this.props.newPostText}
                        addMessage={this.props.addMessage}
                        updateTextArea={this.props.updateTextArea}
                        loadingStatus={this.props.loadingStatus}/>
    }
}
