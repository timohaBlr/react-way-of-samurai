import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addNewMessageAC, DialogsInitialStateType} from "../../redux/reducers/dialogs-add-reducer";
import React from "react";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {selectDialogsPage} from "../../redux/selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



export type MapStatePropsType = {
    dialogsPage: DialogsInitialStateType
}
export type mapDispatchToPropsType = {
    addMessage: (message: string) => void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: selectDialogsPage(state)
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addNewMessageAC(message))
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    React.memo,
)(Dialogs)

