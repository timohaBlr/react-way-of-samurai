import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {UserType} from "../../../redux/reducers/profile-reducer";
import defaultAva from './../../../images/ava.png'


type ProfileInfoPropsType = {
    status: string
    user: UserType
    setStatus: (status: string) => void
    // getStatus: (userId: string) => void
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
    const defaultValue = '...'
    return (
        <div className={s.wrapper}>
            <span className={s.ava}><img src={props.user.photos.small || defaultAva} alt={'Profile avatar'}/></span>
            <span className={s.info}>
                <div>User name: {props.user.fullName || defaultValue}</div>
                <div>About me:{props.user.aboutMe || defaultValue}</div>
                <div>Looking for a job:{props.user.lookingForAJob ? 'Yes' : 'No'}</div>
                <div>More about job:{props.user.lookingForAJobDescription || defaultValue}</div>
                <div>Website:<a
                    href={props.user.contacts.website || defaultValue}>{props.user.contacts.website || defaultValue}</a></div>
            </span>
            <div className={s.status}>
                <ProfileStatus status={props.status}
                               setStatus={props.setStatus}
                    // getStatus={props.getStatus}
                />
            </div>
        </div>
    );
});

type ProfileStatusPropsType = {
    status: string
    setStatus: (status: string) => void
    // getStatus: (userId: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.props.setStatus(this.state.status)
        this.setState({editMode: false})
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        this.setState({
            status: value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>,
                       prevState: Readonly<ProfileStatusStateType>,
                       snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return this.state.editMode
            ? <input onChange={this.onStatusChange}
                     onBlur={this.deactivateEditMode}
                     placeholder={'status'}
                     value={this.state.status}
                     autoFocus/>
            : <span onDoubleClick={this.activateEditMode}>{this.props.status
            ?this.props.status
            :'------'}</span>
    }
}