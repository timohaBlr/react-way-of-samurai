import React, {ChangeEvent} from "react";
import {
    setUserStatusTC,
} from "../../../redux/reducers/profile-reducer";
import {AppDispatchType, AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type ProfileStatusPropsType = {
    status: string
    setStatus: (status: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
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
                ? this.props.status
                : '------'}</span>
    }
}

export type MapStatePropsType = {
    status: string
}
export type MapDispatchToPropsType = {
    setStatus: (status: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        status: state.profilePage.status,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        setStatus: (status: string) => {
            dispatch(setUserStatusTC(status))
        },
    }
}

export const ProfileStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatus)